import { Flex, Text, Box, Avatar } from "@chakra-ui/react"

interface ProfileProps {
  showProfileData: boolean;
}

export default function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData &&
        <Box mr="4" textAlign="right">
          <Text>Douglas Flores</Text>
          <Text color="gray.400" fontSize="small">contato@douglasdgmarques.dev</Text>
        </Box>
      }

      <Avatar size="md" name="Douglas Flores"></Avatar>
    </Flex>
  )
}
