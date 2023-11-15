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
  dateAwarded: Date,
  prizeAmount: number,
  prizeAmountAdjusted: number
}


export interface Row {
  id: number,
  awardYear: number,
  category: string,
  dateAwarded: Date,
  prizeAmount: number
}