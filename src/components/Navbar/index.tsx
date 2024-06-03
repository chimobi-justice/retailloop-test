import { FunctionComponent } from 'react'

import { NavigationLg, NavigationSm } from '../../components'

const NavBar: FunctionComponent = () => {
  return (
    <>
      {/* Desktop Navigation */}
      <NavigationLg />
      {/* End Desktop Navigation */}

      {/* Mobile Navigation */}
      <NavigationSm />
      {/* End Mobile Navigation */}
    </>
  )
}

export default NavBar;