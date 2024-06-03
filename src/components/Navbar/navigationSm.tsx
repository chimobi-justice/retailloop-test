import { FunctionComponent, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import {
  Avatar,
  Box,
  Flex,
  HStack,
  Heading,
  Icon,
  List,
  ListItem,
  Spacer,
  Text
} from '@chakra-ui/react'
import {
  IoIosCloseCircleOutline,
  IoIosNotificationsOutline,
  IoMdAddCircle
} from 'react-icons/io'
import { MdFilterList } from 'react-icons/md'

import { getPathname } from '../../helpers/getPathname'
import { Menu } from '../../constant/Menu'
import { Logo } from '../index'
import RetailUserProfile from '../../assets/retaill-profile.avif'
import { IMenuProps } from '../../types'

const NavigationSm: FunctionComponent = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleDrawerBox = () => {
    setOpen((prevState) => !prevState);
  }

  return (
    <>
      <Flex
        as="nav"
        alignItems="center"
        justify="space-between"
        bg="white"
        p="8px"
        mb="25px"
        w="100%"
        display={{ base: 'flex', md: 'none' }}
      >
        <Heading as="h4" size="lg" bg="white">
          <Logo size={8} />
        </Heading>

        <HStack spacing={3}>
          <IoIosNotificationsOutline style={{ fontSize: '25px' }} cursor="pointer" />
          <IoMdAddCircle style={{ fontSize: '30px' }} cursor="pointer" />
          <Icon
            as={MdFilterList}
            boxSize={10}
            onClick={handleDrawerBox}
            cursor="pointer"
          />
        </HStack>
      </Flex>

      <Flex
        as="div"
        alignItems="center"
        justify="space-between"
        p="15px"
        display={{ base: 'flex', md: 'none' }}
      >
        <Heading as="h6" size="sm">{getPathname()}</Heading>

        <HStack alignItems="center">
          <Text><Link to="/">Export</Link></Text>
        </HStack>
      </Flex>

      {/* Box drawer */}
      {open && (
        <>
          <Box
            bg="black"
            color="white"
            w="100%"
            h="100%"
            position="fixed"
            top="0"
            zIndex="10"
            display={{ base: 'block', md: 'none' }}
          >
            <Box
              borderColor="gray.300"
              display="flex"
              borderBottom="1px"
              p="8px"
              alignItems="center"
            >
              <Logo size={8} />
              <Spacer />
              <Icon
                as={IoIosCloseCircleOutline}
                boxSize={10}
                onClick={handleDrawerBox}
                cursor="pointer"
              />
            </Box>

            <List alignItems="start" mt="2rem" w="100%">
              {Menu?.map((menu: IMenuProps) => (
                <ListItem w="100%" mb="20px" key={menu.id}>
                  <NavLink
                    to={menu.url}
                    className="aside_link"
                    key={menu.id}
                    onClick={() => setOpen(false)}
                  >
                    {menu.name}
                  </NavLink>
                </ListItem>
              ))}
            </List>

            <Box position="absolute" bottom="0" py="20px" px="10px" w="100%">
              <HStack>
                <Avatar
                  size="sm"
                  src={RetailUserProfile}
                />
                <Text fontSize="small">Abram Korsgaard</Text>
              </HStack>
            </Box>
          </Box>
        </>
      )}
      {/* Box drawer */}
    </>
  )
}

export default NavigationSm;