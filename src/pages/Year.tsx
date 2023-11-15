import React, {useState, useEffect, useRef} from 'react';
import { useParams } from "react-router-dom";
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { NobelPrize, Row } from "../types";


const columns: GridColDef[] = [
  {
    field: 'id',
    headerName: 'ID',
    type: 'number',
    width: 90,
    hideable: true
  },
  {
    field: 'awardYear',
    headerName: 'Prize Year',
    type: 'number',
    width: 90
  },
  {
    field: 'category',
    headerName: 'Category',
    type: 'string',
    width: 150,
  },
  {
    field: 'dateAwarded',
    headerName: 'Date',
    type: 'Date',
    width: 150,
  },
  {
    field: 'prizeAmount',
    headerName: 'Prize amount',
    type: 'number',
    width: 110,
  },
  // {
  //   field: 'fullName',
  //   headerName: 'Full name',
  //   description: 'This column has a value getter and is not sortable.',
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (params: GridValueGetterParams) =>
  //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  // },
];


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
      id: nobelPrize.prizeAmount + Math.random(), // def change
      awardYear: nobelPrize.awardYear,
      category: nobelPrize.category.en,
      dateAwarded: nobelPrize.dateAwarded,
      prizeAmount: nobelPrize.prizeAmount
    }
  }


  useEffect(() => {
    nobelPrizes && setRows(nobelPrizes.map(prize => mapNobelPrizeToRow(prize)));
  }, [nobelPrizes])

  console.log(1, nobelPrizes);
  console.log(2, rows);
  return(
    <Box sx={{ height: 2000, width: '100%' }}>
      {rows && <DataGrid
        rows={rows!}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 25,
            },
          },
        }}
        pageSizeOptions={[25]}
        checkboxSelection
        disableRowSelectionOnClick
      />}
    </Box>
  )
}

export default Year;