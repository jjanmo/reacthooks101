import { COMMON } from '@styles/colors'

export type Month = {
  number: number
  name: string
  row: number
  col: number
  color: string
}
export const MONTHS: Month[] = [
  {
    number: 1,
    name: 'jan',
    row: 1,
    col: 2,
    color: '#800020',
  },
  {
    number: 2,
    name: 'feb',
    row: 1,
    col: 3,
    color: 'pink',
  },
  {
    number: 3,
    name: 'mar',
    row: 1,
    col: 4,
    color: 'green',
  },
  {
    number: 4,
    name: 'apr',
    row: 2,
    col: 5,
    color: 'yellow',
  },
  {
    number: 5,
    name: 'may',
    row: 3,
    col: 5,
    color: '#add8e6',
  },
  {
    number: 6,
    name: 'jun',
    row: 4,
    col: 5,
    color: '#800080',
  },
  {
    number: 7,
    name: 'jul',
    row: 5,
    col: 4,
    color: COMMON.RED,
  },
  {
    number: 8,
    name: 'aug',
    row: 5,
    col: 3,
    color: COMMON.ORANGE,
  },
  {
    number: 9,
    name: 'sep',
    row: 5,
    col: 2,
    color: '#013220',
  },
  {
    number: 10,
    name: 'oct',
    row: 4,
    col: 1,
    color: '#a52a2a',
  },
  {
    number: 11,
    name: 'nov',
    row: 3,
    col: 1,
    color: '#00008b',
  },
  {
    number: 12,
    name: 'dec',
    row: 2,
    col: 1,
    color: '#666f88',
  },
]
