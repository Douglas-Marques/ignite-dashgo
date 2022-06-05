import { Box, Flex, Heading, Button, Icon, Table, Thead, Tr, Th, Checkbox, Tbody, Td, Text, useBreakpointValue, useColorModeValue, Spinner } from "@chakra-ui/react"
import { RiAddLine } from "react-icons/ri"
import Link from 'next/link'
import { useState } from "react"

import Header from "../../components/Header"
import Pagination from "../../components/Pagination"
import Sidebar from "../../components/Sidebar"
import { useUsers } from "../../services/hooks/useUsers"

export default function UserList() {
  
  const [currentPage, setCurrentPage] = useState(1)
  const { data, isLoading, error, isFetching } = useUsers(currentPage)
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg={useColorModeValue('gray.100', 'gray.900')} p={['6', '8']}>
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Usuários

              {!isLoading && isFetching && <Spinner size="sm" color="gray.500" ml="4" />}
            </Heading>

            <Link href="/users/create" passHref>
              <Button as="a" size="sm" fontSize="sm" colorScheme="pink" leftIcon={<Icon as={RiAddLine} fontSize="20" />} >
                Criar novo
              </Button>
            </Link>
          </Flex>

          {isLoading ? (
            <Flex justify="center">
              <Spinner />
            </Flex>
          ) : error ? (
            <Flex justify="center">
              <Text>Falha ao obter dados dos usuários.</Text>
            </Flex>
          ) : (
            <>
              <Table>
                <Thead>
                  <Tr>
                    <Th px={['4', '4', '6']} color={useColorModeValue('gray.100', 'gray.900')} width="8"><Checkbox colorScheme="pink" /></Th>
                    <Th>Usuário</Th>
                    {isWideVersion && <Th>Data de cadastro</Th>}
                  </Tr>
                </Thead>

                <Tbody>
                  {data.users.map(user => (
                    <Tr key={user.id}>
                      <Td px={['4', '4', '6']}><Checkbox colorScheme="pink" /></Td>
                      <Td>
                        <Box>
                          <Text fontWeight="bold">{user.name}</Text>
                          <Text fontSize="sm" color={useColorModeValue('gray.500', 'gray.300')}>{user.email}</Text>
                        </Box>
                      </Td>
                      {isWideVersion && <Td>{user.created_at}</Td>}
                    </Tr>
                  ))}
                </Tbody>
              </Table>

              <Pagination totalCountOfRegisters={data.totalCount} currentPage={currentPage} onPageChange={setCurrentPage} />
            </>
          )}
        </Box>
      </Flex>
    </Box >
  )
}
