export interface NobelPrize {
  awardYear: number,
  category: {
    en: string,
    no: string,
    se: string
  },
  categoryFullName: {
    en: string,
    no: string,
    se: string
  },
  dateAwarded: string,
  prizeAmount: number,
  prizeAmountAdjusted: number
}


export interface Row {
  awardYear: number,
  category: string,
  dateAwarded: string,
  prizeAmount: number
}