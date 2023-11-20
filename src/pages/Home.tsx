import React, {useState, useEffect, useRef} from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { NobelPrize } from '../types';


type Props = {
  nobelPrizes: NobelPrize[]
}

const Home: React.FC<Props> = ({
  nobelPrizes
}) => {
  const [prizesYears, setPrizesYears] = useState<number[]>([]);
  const [pickedYear, setPickedYear] = useState<string>('');


  useEffect(() => {
    if (nobelPrizes !== undefined) { // probably should change it
      const uniqueYears = new Set<number>();

      nobelPrizes.map(prize => uniqueYears.add(prize.awardYear));

      setPrizesYears(Array.from(uniqueYears));
    }
  }, [nobelPrizes])


  function handleChange(e: SelectChangeEvent) {
    setPickedYear(e.target.value);
  }


  return (
    <>
      <section>
        <Typography variant='h3' component='h1' marginBottom={4}>
          Nobel prize winners website
        </Typography>
        <Typography variant='body1' component='span'>
          You can easily get access to information about Nobel prize winners by following thwe short guide below.
        </Typography>
      </section>
      <section>
        <Box paddingTop={4} className="box">
          <Typography variant='h6' component='p' margin={1}>
            Pick Nobel prize year:
          </Typography>
          <FormControl sx={{width: "120px"}}>
            <InputLabel id="demo-simple-select-label">Prize year</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={pickedYear}
              label="Prize year"
              onChange={handleChange}
              MenuProps={{ PaperProps: { sx: { maxHeight: 300 } } }}
            >
              {prizesYears && prizesYears.map(year => 
                <MenuItem value={year} key={year}>{year}</MenuItem>)}
            </Select>
          </FormControl>
        </Box>
      </section>
      <section>
        <Box>
          <Typography variant='h6' component='p' margin={1}>
            Then click button below to view results.
          </Typography>
          <Button href={"./" + pickedYear} variant="contained" disabled={! pickedYear}> {/* idk if href works correctly */}
            Search for Rewards
          </Button>
        </Box>
      </section>
    </>
  )
}

export default Home;