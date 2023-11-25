export interface NobelPrize {
  awardYear: number;
  category: {
    en: string;
    no: string;
    se: string;
  };
  categoryFullName: {
    en: string;
    no: string;
    se: string;
  };
  dateAwarded: string;
  prizeAmount: number;
  prizeAmountAdjusted: number;
}

export interface Row {
  awardYear: number;
  category: string;
  dateAwarded: string;
  prizeAmount: number;
}

// year table
export interface HeadCell {
  id: keyof Row;
  align?: "left" | "center" | "right" | "inherit" | "justify" | undefined;
  label: string;
}

export type Order = "asc" | "desc";

export interface TableProps {
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof Row
  ) => void;
  order: Order;
  orderBy: string;
}

export interface Language {
  name: string;
  muiImportName: string;
  fullName: string;
  country: string;
  relativeImgPath: string;
}

export const supportedLanguagesArray = ["en", "no", "se"] as const;
export type SupportedLanguages = (typeof supportedLanguagesArray)[0];
