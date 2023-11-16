import React, {useState, useEffect, useRef} from 'react';
import { useParams } from "react-router-dom";
import { Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import { NobelPrize, Row } from "../types";
import { dotDateFormat, spaceNumberFormat } from '../functions';
import { v4 as uuidv4 } from 'uuid';


type Props = {
  nobelPrizes: NobelPrize[]
}


const Year: React.FC<Props> = ({
  nobelPrizes
}) => {
  const {year, locale} = useParams(); // maybe change 'year' to 'pickedYear'
  const [rows, setRows] = useState<Row[]>();


  function mapNobelPrizeToRow(nobelPrize: NobelPrize): Row {
    return {
      awardYear: nobelPrize.awardYear,
      category: nobelPrize.category.en,
      dateAwarded: nobelPrize.dateAwarded,
      prizeAmount: nobelPrize.prizeAmount
    }
  }


  useEffect(() => {
    nobelPrizes && setRows(nobelPrizes.map(prize => mapNobelPrizeToRow(prize)));
  }, [nobelPrizes])

  
  return(
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Prize Year</TableCell>
            <TableCell align="right">Category</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Prize amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows && rows.map((row) => (
            <TableRow
              key={uuidv4()}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.awardYear}
              </TableCell>
              <TableCell align="right">{row.category}</TableCell>
              <TableCell align="right">{dotDateFormat(new Date(row.dateAwarded))}</TableCell>
              <TableCell align="right">{spaceNumberFormat(row.prizeAmount)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Year;