import { Box, Flex, Heading, Divider, VStack, SimpleGrid, HStack, Button, useColorModeValue } from "@chakra-ui/react"
import Link from 'next/link'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import Header from "../../components/Header"
import Sidebar from "../../components/Sidebar"
import { Input } from "../../components/Form/Input"

type CreateUserFormData = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

const CreateUserFormSchema = yup.object().shape({
  name: yup.string().required('Nome obrigatório!'),
  email: yup.string().required('E-mail obrigatório!').email('E-mail inválido!'),
  password: yup.string().required('Senha obrigatória!').min(6, 'No mínimo 6 caracteres!'),
  password_confirmation: yup.string().oneOf([null, yup.ref('password')], 'As senhas precisam ser iguais!')
})

export default function CreateUser() {

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(CreateUserFormSchema)
  })

  const handleCreateUser: SubmitHandler<CreateUserFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 3000))
    console.log(values)
  }

  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box as="form" onSubmit={handleSubmit(handleCreateUser)} flex="1" borderRadius={8} bg={useColorModeValue('gray.200', 'gray.900')} p={['6', '8']}>
          <Heading size="lg" fontWeight="normal">Criar Usuário</Heading>

          <Divider my="6" borderColor="400" />

          <VStack>
            <SimpleGrid minChildWidth="140PX" spacing={['6', '8']} w="100%">
              <Input name="name" type="name" label="Nome" error={formState.errors.name} {...register('name')} />
              <Input name="email" type="email" label="Email" error={formState.errors.email} {...register('email')} />
            </SimpleGrid>

            <SimpleGrid minChildWidth="140PX" spacing={['6', '8']} w="100%">
              <Input name="password" type="password" label="Senha" error={formState.errors.password} {...register('password')} />
              <Input name="password_confirmation" type="password" label="Confirmar Senha" error={formState.errors.password_confirmation} {...register('password_confirmation')} />
            </SimpleGrid>
          </VStack>

          <Flex mt={['6', '8']} justify="flex-end">
            <HStack spacing="4">
              <Link href="/users" passHref>
                <Button >Cancelar</Button>
              </Link>

              <Button type="submit" colorScheme="pink" isLoading={formState.isSubmitting}>Salvar</Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}
