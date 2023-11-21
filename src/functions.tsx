import { Order } from "./types";


export function dotDateFormat(date: Date): string {
  if (! Number.isNaN(date.valueOf())) {
    return [date.getDate(), date.getMonth() + 1, date.getFullYear()].join('.');

  } else return "";
}


export function spaceNumberFormat(num: number): string {
  if (! Number.isNaN(num)) {
    return num.toLocaleString("fr");

  } else return "";
}


export function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

export function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key,
): (
  a: { [key in Key]: number | Date | string  },
  b: { [key in Key]: number | Date | string  },
) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}