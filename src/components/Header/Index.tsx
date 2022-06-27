import { ChevronLeftIcon } from '@chakra-ui/icons'
import { Box, Tooltip } from '@chakra-ui/react'
import { Link, useParams } from 'react-router-dom'
import { WorldTripLogo } from './WorldTripLogo'

export function Header() {
  const { id } = useParams()
  return (
    <Box
      minW="450px"
      as="header"
      display="flex"
      justifyContent="center"
      alignItems="center"
      h="6.25rem"
      position="relative"
    >
      {id && (
        <Box position="absolute" top="2rem" left="3rem">
          <Tooltip label="Home" aria-label="A tooltip" mt="-3.8rem">
            <Link to="/">
              <ChevronLeftIcon
                color="gray.700"
                fontWeight="bold"
                fontSize="2.5rem"
                transition="all 0.4s"
                _hover={{ paddingRight: '0.1rem' }}
              />
            </Link>
          </Tooltip>
        </Box>
      )}
      <WorldTripLogo />
    </Box>
  )
}
