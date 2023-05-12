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
    color: '#3DABC3',
  },
  {
    number: 2,
    name: 'feb',
    row: 1,
    col: 3,
    color: '#5B6DB2',
  },
  {
    number: 3,
    name: 'mar',
    row: 1,
    col: 4,
    color: '#A46FAC',
  },
  {
    number: 4,
    name: 'apr',
    row: 2,
    col: 5,
    color: '#CB749D',
  },
  {
    number: 5,
    name: 'may',
    row: 3,
    col: 5,
    color: '#EA3D3D',
  },
  {
    number: 6,
    name: 'jun',
    row: 4,
    col: 5,
    color: '#EE6443',
  },
  {
    number: 7,
    name: 'jul',
    row: 5,
    col: 4,
    color: '#F67B47',
  },
  {
    number: 8,
    name: 'aug',
    row: 5,
    col: 3,
    color: '#E8CC4B',
  },
  {
    number: 9,
    name: 'sep',
    row: 5,
    col: 2,
    color: '#A8BC3F',
  },
  {
    number: 10,
    name: 'oct',
    row: 4,
    col: 1,
    color: '#6EBE50',
  },
  {
    number: 11,
    name: 'nov',
    row: 3,
    col: 1,
    color: '#5BB7A8',
  },
  {
    number: 12,
    name: 'dec',
    row: 2,
    col: 1,
    color: '#84C8DA',
  },
]
export const DAYS = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']
