import { FunctionComponent } from 'react'
import { Outlet } from 'react-router-dom'
import { Box } from '@chakra-ui/react'

import { AsideNav, NavBar } from '../components'

const RootLayouts: FunctionComponent = () => {
  return (
    <Box display="flex" h="100vh">
      <AsideNav />

      <Box 
        p={{base: '0px', md: '20px'}} 
        ml={{ base: '0%', md: '20%'}} 
        width={{ base: '100%', md: '80%'}}
      >
        <NavBar /> 
        <Outlet />
      </Box>
    </Box>
  )
}

export default RootLayouts