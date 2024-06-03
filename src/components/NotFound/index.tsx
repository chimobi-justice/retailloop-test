import { FunctionComponent } from 'react'
import { Box, Button, Center, Heading, Text } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';

const NotFound: FunctionComponent = () => {
  const navigate = useNavigate()

  return (
    <Center h="80vh">
      <Box textAlign="center">
        <Heading as="h2" size={{ base: "lg", md: "xl" }}>Opp's you're seems to be lost</Heading>
        <Text fontSize="md" py="15px">you're try to browse a file that might be remove or placed</Text>
        <Button
          onClick={() => {
            navigate(-1);
          }}
        >
          Back Home
        </Button>
      </Box>
    </Center>
  )
}

export default NotFound;