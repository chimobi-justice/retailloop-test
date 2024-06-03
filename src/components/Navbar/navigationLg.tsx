import { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'
import { Flex, HStack, Heading, Text } from '@chakra-ui/react'
import { IoIosNotificationsOutline, IoMdAddCircle } from 'react-icons/io'

import { getPathname } from '../../helpers/getPathname'

const NavigationLg: FunctionComponent = () => {
  return (
    <Flex
      as="nav"
      alignItems="center"
      justify="space-between"
      display={{ base: 'none', md: 'flex' }}
    >
      <Heading as="h4" size="lg">{getPathname()}</Heading>

      <HStack alignItems="center">
        <Text fontWeight="semibold" _hover={{textDecoration: 'underline'}}><Link to="/">Export</Link></Text>
        <IoIosNotificationsOutline style={{ fontSize: '25px' }} />
        <IoMdAddCircle style={{ fontSize: '35px' }} />
      </HStack>
    </Flex>
  )
}

export default NavigationLg;