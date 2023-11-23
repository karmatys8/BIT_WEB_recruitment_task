import React, {useState, useEffect, useRef, useContext} from 'react';
import { useParams } from "react-router-dom";

import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';

import { NobelPrize, Row, Order, HeadCell, TableProps, SupportedLanguages } from "../types";
import { dotDateFormat, spaceNumberFormat, getComparator, mapNobelPrizeToRow } from '../functions';
import { v4 as uuidv4 } from 'uuid';
import { useTranslation } from 'react-i18next';
import { LocaleContext } from './SharedLayout';



const headCells: readonly HeadCell[] = [
  {
    id: 'awardYear',
    label: 'Prize year',
  },
  {
    id: 'category',
    label: 'Category',
  },
  {
    id: 'dateAwarded',
    align: "center", // maybe better of with left
    label: 'Date',
  },
  {
    id: 'prizeAmount',
    align: "right",
    label: 'Prize amount',
  },
];

const EnhancedTableHead: React.FC<TableProps> = ({
  order, orderBy, onRequestSort
}) => {

  const createSortHandler =
    (property: keyof Row) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.align}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}


const YearTableToolbar: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Toolbar
      sx={{ pl: 6 , pr: 1 }}
    >
      <Typography
        sx={{ flex: '1 1 100%' }}
        variant="h6"
        id="tableTitle"
        component="div"
      >
        {t("yearTableHeader")}
      </Typography>
      <Tooltip title={t("yearFilterListTitle")}>
        <IconButton>
          <FilterListIcon />
        </IconButton>
      </Tooltip>
    </Toolbar>
  );
}


type Props = {
  nobelPrizes: NobelPrize[]
}

const YearTable: React.FC<Props> = ({
  nobelPrizes
}) => {
  const [order, setOrder] = React.useState<Order>('asc');
  const [orderBy, setOrderBy] = React.useState<keyof Row>('awardYear');
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [rows, setRows] = useState<Row[]>();
  const { year } = useParams();
  const locale = useContext<SupportedLanguages>(LocaleContext);
  const { t } = useTranslation();

  useEffect(() => {
    headCells.forEach((elem, idx) => {elem.label = t("yearHeadCellLabels." + idx)});
  }, [locale, t])


  useEffect(() => {
    let prizes = nobelPrizes;
    if (year) prizes =  prizes.filter(prize => prize.awardYear == Number(year));

    setRows(prizes.map(prize => mapNobelPrizeToRow(prize, locale)));

  }, [nobelPrizes, year])


  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof Row,
  ) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value));
    setPage(0);
  };

  const handleChangeDense = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDense(event.target.checked);
  };


  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - (rows ? rows.length : 0)) : 0;

  const visibleRows = React.useMemo(
    () =>
    rows && rows.slice().sort(getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage,
      ),
    [order, orderBy, page, rowsPerPage, rows],
  );


  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <YearTableToolbar />
        <TableContainer>
          <Table
            sx={{ minWidth: 600 }}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
          >
            <EnhancedTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
            />
            <TableBody>
              {visibleRows && visibleRows.map((row: Row) => {
                return (
                  <TableRow
                    hover
                    tabIndex={-1}
                    key={uuidv4()}
                    sx={{ cursor: 'pointer' }}
                  >
                    <TableCell>{row.awardYear}</TableCell>
                    <TableCell>{row.category}</TableCell>
                    <TableCell align="center">{dotDateFormat(new Date(row.dateAwarded))}</TableCell>
                    <TableCell align="right">{spaceNumberFormat(row.prizeAmount)}</TableCell>
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <Box sx={{display: "flex", justifyContent: "space-between"}}>
          <FormControlLabel
            control={<Switch checked={dense} onChange={handleChangeDense} />}
            label={t("yearDensePadding")}
            sx={{ ml: 2 }}
          />
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={rows ? rows.length : 0}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            sx = {{display: 'inline-block'}}
          />
        </Box>
      </Paper>
    </Box>
  );
}

export default YearTable;