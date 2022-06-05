import { Stack, Box, Text } from '@chakra-ui/react'

import PaginationItem from './PaginationItem'

interface PaginationProps {
  totalCountOfRegisters: number;
  registersPerPage?: number;
  currentPage?: number;
  onPageChange(page: number): void;
}

const simblingsCount = 1;

function generatePageArrays(from: number, to: number) {
  return [...new Array(to - from)]
    .map((_, index) => from + index + 1)
    .filter(page => page > 0)
}

export default function Pagination({
  totalCountOfRegisters,
  registersPerPage = 10,
  currentPage = 1,
  onPageChange }: PaginationProps) {
  const previousPages = currentPage > 1
    ? generatePageArrays(currentPage - 1 - simblingsCount, currentPage - 1)
    : []
  const lastPage = Math.floor(totalCountOfRegisters / registersPerPage)
  const nextPages = currentPage < lastPage
    ? generatePageArrays(currentPage, Math.min(currentPage + simblingsCount, lastPage))
    : []
  const pageStart = (Number(currentPage) - 1) * Number(registersPerPage)
  const pageEnd = pageStart + Number(registersPerPage)

  return (
    <Stack direction={['column', 'row']} mt="8" justify="space-between" align="center" spacing="6">
      <Box>
        <strong>{pageStart}</strong> - <strong>{pageEnd}</strong> de <strong>{totalCountOfRegisters}</strong>
      </Box>

      <Stack direction="row" spacing="2">
        {currentPage > 1 + simblingsCount && (
          <>
            <PaginationItem pageNumber={1} onPageChange={onPageChange} />
            {currentPage > 2 + simblingsCount && (
              <Text color="gray.300" width="8" textAlign="center">...</Text>
            )}
          </>
        )}

        {previousPages.length > 0 && previousPages.map(page => (
          <PaginationItem key={page} pageNumber={page} onPageChange={onPageChange} />
        ))}

        <PaginationItem pageNumber={currentPage} isCurrent onPageChange={onPageChange} />

        {nextPages.length > 0 && nextPages.map(page => (
          <PaginationItem key={page} pageNumber={page} onPageChange={onPageChange} />
        ))}

        {currentPage + simblingsCount < lastPage && (
          <>
            {currentPage + 1 + simblingsCount < lastPage && (
              <Text color="gray.300" width="8" textAlign="center">...</Text>
            )}
            <PaginationItem pageNumber={lastPage} onPageChange={onPageChange} />
          </>
        )}
      </Stack>
    </Stack>
  )
}
