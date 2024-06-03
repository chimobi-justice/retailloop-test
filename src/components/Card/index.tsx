import {FunctionComponent} from 'react'
import {
  Card as ChakraCard,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Text,
  HStack,
  Spacer,
  Icon
} from '@chakra-ui/react'
import { ICardProps } from '../../types'

const Card: FunctionComponent<ICardProps> = ({
  heading,
  count,
  dateLeft,
  dateRight,
  icon
}) => {
  return (
    <ChakraCard>
      <CardHeader p="15px">
        <Heading as="h6" size="xs">{heading}</Heading>
      </CardHeader>
      <CardBody p="15px" alignItems="flex-end" display="flex" gap={1}>
        <Text fontSize="3xl" p="0">{count}</Text>
        <Text>
          <Icon as={icon} boxSize={4} />
        </Text>
      </CardBody>
      <CardFooter p="15px">
        <HStack w="100%">
          <Text fontSize="sm">{dateLeft}</Text>
          <Spacer />
          <Text fontSize="sm">{dateRight}</Text>
        </HStack>
      </CardFooter>
    </ChakraCard>
  )
}

export default Card;