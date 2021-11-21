import { Text } from "@chakra-ui/react";
import Link from 'next/link'

export default function Logo() {
  return (
    <Link href="/dashboard" passHref>
      <Text fontSize={['2xl', '3xl', '4xl']} fontWeight="bold" letterSpacing="tight" w="64">
        dashgo
        <Text as="span" ml="1" color="pink.500">.</Text>
      </Text>
    </Link>
  )
}
