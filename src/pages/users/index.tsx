import { Box, Flex, Heading, Button, Icon, Table, Thead, Tr, Th, Checkbox, Tbody, Td, Text, useBreakpointValue, useColorModeValue } from "@chakra-ui/react"
import { RiAddLine } from "react-icons/ri"
import Link from 'next/link'

import Header from "../../components/Header"
import Pagination from "../../components/Pagination"
import Sidebar from "../../components/Sidebar"

export default function UserList() {

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
            <Heading size="lg" fontWeight="normal">Usuários</Heading>

            <Link href="/users/create" passHref>
              <Button as="a" size="sm" fontSize="sm" colorScheme="pink" leftIcon={<Icon as={RiAddLine} fontSize="20" />} >
                Criar novo
              </Button>
            </Link>
          </Flex>

          <Table>
            <Thead>
              <Tr>
                <Th px={['4', '4', '6']} color={useColorModeValue('gray.100', 'gray.900')} width="8"><Checkbox colorScheme="pink" /></Th>
                <Th>Usuário</Th>
                {isWideVersion && <Th>Data de cadastro</Th>}
              </Tr>
            </Thead>

            <Tbody>
              <Tr>
                <Td px={['4', '4', '6']}><Checkbox colorScheme="pink" /></Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Douglas Flores</Text>
                    <Text fontSize="sm" color={useColorModeValue('gray.500', 'gray.300')}>contato@douglasdgmarques.dev</Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>15 de Novembro, 2021</Td>}
              </Tr>

              <Tr>
                <Td px={['4', '4', '6']}><Checkbox colorScheme="pink" /></Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Diego Fernanders</Text>
                    <Text fontSize="sm" color={useColorModeValue('gray.500', 'gray.300')}>diegola@rocketseat.com</Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>04 de Abril, 2021</Td>}
              </Tr>

              <Tr>
                <Td px={['4', '4', '6']}><Checkbox colorScheme="pink" /></Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Casimiro</Text>
                    <Text fontSize="sm" color={useColorModeValue('gray.500', 'gray.300')}>ihala@meteuessa.twitch</Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>02 de Março, 2021</Td>}
              </Tr>
            </Tbody>
          </Table>

          <Pagination />
        </Box>
      </Flex>
    </Box >
  )
}
