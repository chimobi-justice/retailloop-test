import { IconType } from 'react-icons'

export interface ITableDataItem {
  id: number;
  name: string;
  email: string;
  assessmentCheck: string;
  status: string;
  progressStart: number;
  progressEnd: number;
  progressNumber?: number
  icon?: IconType;
}

export interface ICardDataItem {
  id: number;
  headerText: string;
  countNumber: string;
  dateLeft: string;
  dateRight: string;
  icon: IconType;
}

export interface ICardProps {
  heading: string;
  count: string;
  dateLeft: string;
  dateRight: string;
  icon: IconType;
}

export interface IMenuProps {
  id: number;
  name: string;
  url: string;
}

export interface ILogo {
  size: number;
}