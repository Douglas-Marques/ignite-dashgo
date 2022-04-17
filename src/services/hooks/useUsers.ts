import { useQuery } from "react-query"
import { api } from "../api"

type User = {
  id: string;
  name: string;
  email: string;
  created_at: string;
}

export async function getUsers(): Promise<User[]> {
  const { data } = await api.get('/users')
  return data.users.map((user: User) => ({
    id: user.id,
    name: user.name,
    email: user.email,
    createdAt: new Date(user.created_at).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    })
  }))
}

export function useUsers() {
  return useQuery('users', getUsers, { staleTime: 5000 })
}
