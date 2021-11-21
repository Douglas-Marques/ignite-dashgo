/* eslint-disable react-hooks/rules-of-hooks */
import { Box, useBreakpointValue, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, useColorModeValue } from "@chakra-ui/react"

import { useSidebarDrawer } from "../../context/SidebarDrawerContext"
import SidebarNav from "./SidebarNav"

export default function Sidebar() {

  const { isOpen, onClose } = useSidebarDrawer()

  const isDrawer = useBreakpointValue({
    base: true,
    lg: false
  })

  if (isDrawer) {
    return (
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent bg={useColorModeValue('gray.200', 'gray.900')} p="4">
            <DrawerCloseButton mt="6"></DrawerCloseButton>
            <DrawerHeader>Navegação</DrawerHeader>

            <DrawerBody>
              <SidebarNav />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    )
  }

  return (
    <Box as="aside" w="64" mr="8">
      <SidebarNav />
    </Box>
  )
}
