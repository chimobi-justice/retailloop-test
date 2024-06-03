import {FunctionComponent} from 'react'
import { NavLink } from 'react-router-dom'
import {
  Avatar,
  Box,
  HStack,
  Heading,
  List,
  ListItem,
  Text
} from '@chakra-ui/react'

import { Menu } from '../../constant/Menu'
import { IMenuProps } from '../../types'
import RetailUserProfile from '../../assets/retaill-profile.avif'
import Logo from '../Logo'

const AsideNav: FunctionComponent = () => {
  return (
    <Box
      as="aside"
      position="fixed"
      display={{ base: "none", md: "block" }}
      w="20%"
      h="100vh"
      p="25px"
      bg="white"
      borderRight={'1px solid black'}
    >
      <Heading pt="5px" bg="white">
        <Logo size={10} />
      </Heading>

      <List alignItems="start" mt="2rem" w="100%">
        {Menu?.map((menu: IMenuProps) => (
          <ListItem w="100%" mb="20px" key={menu.id}>
            <NavLink to={menu.url} className="aside_link" key={menu.id}>
              {menu.name}
            </NavLink>
          </ListItem>
        ))}
      </List>

      <Box position="absolute" bottom="0" pb="15px">
        <HStack>
          <Avatar
            size="xs"
            src={RetailUserProfile}
          />
          <Text fontSize="small">Abram Korsgaard</Text>
        </HStack>
      </Box>
    </Box>
  )
}

export default AsideNav;