import React, {useState, useEffect, useRef} from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { NobelPrize } from '../types';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';


type Props = {
  nobelPrizes: NobelPrize[]
}

const Home: React.FC<Props> = ({
  nobelPrizes
}) => {
  const [prizesYears, setPrizesYears] = useState<number[]>([]);
  const [pickedYear, setPickedYear] = useState<string>('');
  const location = useLocation();

  const { t } = useTranslation();


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
          {t("homeHeader")}
        </Typography>
        <Typography variant='body1' component='span'>
          {t("homeInstructions")}
        </Typography>
      </section>
      <section>
        <Box paddingTop={4} className="box">
          <Typography variant='h6' component='p' margin={1}>
            {t("homeFormInstruction")}
          </Typography>
          <FormControl sx={{width: "120px"}}>
            <InputLabel id="demo-simple-select-label">{t("homeInputLabel")}</InputLabel>
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
            {t("homeResultsInstruction")}
          </Typography>
          <Button href={`${location.pathname}/rewards/${pickedYear}`} variant="contained" disabled={! pickedYear}>
            {t("homeSearchForRewardsButton")}
          </Button>
        </Box>
      </section>
    </>
  )
}

export default Home;