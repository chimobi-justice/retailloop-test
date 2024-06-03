import { useLocation } from 'react-router-dom'

export const getPathname = () => {
  const { pathname } = useLocation();

  let formattedPathname: string;

  if (pathname === '/') {
    formattedPathname = 'Home'
  } else {
    formattedPathname = pathname.split('/')
      .map((part) => {
        return part
          .split('-')
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ')
      })
      .join(' ')
  }

  return formattedPathname;
}