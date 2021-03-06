import { useQuery } from "react-query"

import { api } from "../api"

type User = {
  id: string;
  name: string;
  email: string;
  created_at: string;
}

type GetUsersResponse = {
  totalCount: number;
  users: User[]
}

export async function getUsers(page: number): Promise<GetUsersResponse> {
  const { data, headers } = await api.get('/users', { params: { page } })
  const totalCount = Number(headers['x-total-count'])
  const users: User[] = data.users.map((user: User) => ({
    id: user.id,
    name: user.name,
    email: user.email,
    createdAt: new Date(user.created_at).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    })
  }))
  return {
    totalCount,
    users
  }
}

export function useUsers(page: number) {
  return useQuery(['users', page], () => getUsers(page), { staleTime: 5000 })
}
