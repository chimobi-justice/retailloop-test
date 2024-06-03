import { MdOutlineMoving, MdOutlineShowChart } from 'react-icons/md'

import { ICardDataItem } from '../types'

export const CardData: ICardDataItem[] = [
  {
    id: 1,
    headerText: 'Uploads',
    countNumber: '1,345',
    dateLeft: '1 sep',
    dateRight: '31 sep',
    icon: MdOutlineMoving
  },
  {
    id: 2,
    headerText: 'Assessments completed',
    countNumber: '893',
    dateLeft: '1 sep',
    dateRight: '31 sep',
    icon: MdOutlineShowChart
  },
  {
    id: 3,
    headerText: 'Modules completed',
    countNumber: '533',
    dateLeft: '1 sep',
    dateRight: '31 sep',
    icon: MdOutlineMoving
  }
];