import { ChangeEvent, FunctionComponent, useState } from 'react'
import {
  Box,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputLeftAddon,
  TableContainer,
  Table as ChakraTable,
  Thead,
  Tbody,
  Td,
  Tr,
  Th,
  Container,
  Divider,
  Progress,
  Text,
  Flex,
  Spacer,
  HStack,
  Center
} from '@chakra-ui/react'
import { CiSearch } from 'react-icons/ci'
import { IoIosArrowRoundDown } from 'react-icons/io'

import { TableData } from '../../constant/TableData'
import { ITableDataItem } from '../../types'

const Table: FunctionComponent = () => {
  const [data, setData] = useState<ITableDataItem[]>(TableData);
  const [search, setSearch] = useState<string>('');
  const [recordNotFound, setRecordNotFound] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value.trimStart();
    setSearch(searchTerm);

    if (searchTerm) {
      const filteredData = TableData.filter((item: ITableDataItem) => (
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.status.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.email.toLowerCase().includes(searchTerm.toLowerCase())
      ));
      if (filteredData.length > 0) {
        setData(filteredData);
        setRecordNotFound(false)
      } else {
        setRecordNotFound(true)
        setData([])
      }
    } else {
      setData(TableData);
    }
  };

  return (
    <Box
      as="section"
      mt="25px"
      bg="white"
      borderRadius="4px"
      pb="20px"
    >
      <Container minW="100%">
        <Box
          display="flex"
          flexWrap="wrap"
          alignItems="center"
          justifyContent="space-between"
          pl="5px"
          py="15px"
        >
          <Heading as="h5" size="sm">Recent uploads</Heading>

          <Box
            width={{ base: '100%', lg: '30%' }}
            mt={{ base: '15px', md: '0px' }}
          >
            <InputGroup size="sm">
              <InputLeftAddon bg="white" border="none" fontSize="lg" p="0px">
                <Icon as={CiSearch} />
              </InputLeftAddon>
              <Input
                pl="5px"
                letterSpacing="1px"
                placeholder="search by name, status or email"
                variant='flushed'
                value={search}
                onChange={handleChange}
              />
            </InputGroup>
          </Box>
        </Box>
      </Container>

      <Divider />

      <TableContainer>
        <ChakraTable>
          <Thead>
            <Tr>
              <Th textTransform="initial" w="45%">
                <HStack w="100%">
                  <Text>Name</Text>
                  <Spacer />
                  <Icon as={IoIosArrowRoundDown} boxSize={4} />
                </HStack>
              </Th>
              <Th textTransform="initial">
                <HStack>
                  <Text>Assessments status</Text>
                  <Icon as={IoIosArrowRoundDown} boxSize={4} />
                </HStack>
              </Th>
              <Th textTransform="initial">
                <HStack>
                  <Text>Last active</Text>
                  <Icon as={IoIosArrowRoundDown} boxSize={4} />
                </HStack>
              </Th>
              <Th textTransform="initial">
                <HStack>
                  <Text>Modules completed</Text>
                  <Icon as={IoIosArrowRoundDown} boxSize={4} />
                </HStack>
              </Th>
            </Tr>
          </Thead>

          <Tbody>
            {data?.map((data: ITableDataItem) => (
              <Tr
                key={data.id}
                _odd={{
                  background: '#fbfbfb'
                }}>
                <Td><Text fontSize="sm">{data.name}</Text></Td>
                <Td><Text fontSize="sm">{data.assessmentCheck}</Text></Td>
                <Td><Text fontSize="sm">{data.status}</Text></Td>
                <Td>
                  <Flex alignItems="center" gap={5}>
                    <Text as="span" fontSize="sm">{data.progressStart}</Text>
                    <Progress
                      colorScheme='green'
                      size='sm'
                      value={data.progressNumber}
                      w="50px"
                      borderRadius="3px"
                    />
                    <Text as="span" fontSize="sm">{data.progressEnd}</Text>
                  </Flex>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </ChakraTable>
      </TableContainer>

      {recordNotFound && (
        <Center w="100%" h="200px">
          <Heading as="h4" size="md">Record not found.</Heading>
        </Center>
      )}
    </Box>
  )
}

export default Table;
