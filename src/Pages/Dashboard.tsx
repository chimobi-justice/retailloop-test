import { FunctionComponent } from 'react'
import { Box, SimpleGrid } from '@chakra-ui/react'

import { Card, Table } from '../components'
import { CardData } from '../constant/CardData'

const Dashboard: FunctionComponent = () => {
  return (
    <Box 
      as="section" 
      mt="24px" 
      pb="15px" 
      p={{base: '10px', md: '0px'}}>
      <SimpleGrid minChildWidth="300px" spacing="15px">
        {CardData?.map((data) => (
          <Card
            key={data.id}
            heading={data.headerText}
            count={data.countNumber}
            dateLeft={data.dateLeft}
            dateRight={data.dateRight}
            icon={data.icon}
          />
        ))}
      </SimpleGrid>

      <Table />
    </Box>
  )
}

export default Dashboard;