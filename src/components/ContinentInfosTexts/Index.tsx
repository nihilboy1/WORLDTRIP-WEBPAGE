import { InfoOutlineIcon } from '@chakra-ui/icons'
import {
  Box,
  Flex,
  Text,
  Tooltip,
  useMediaQuery,
  VStack
} from '@chakra-ui/react'

import data from '../../continentData.json'

interface ContinentInfosTextsProps {
  currentContinentID: number
}

export function ContinentInfosTexts({
  currentContinentID
}: ContinentInfosTextsProps) {
  const [isSmallerThan1100] = useMediaQuery('(max-width: 1100px)')
  const [isSmallerThan600] = useMediaQuery('(max-width: 600px)')

  return (
    <Flex
      w="100%"
      justifyContent="center"
      mt="5rem"
      gap="5.5rem"
      flexDir={isSmallerThan1100 ? 'column' : 'row'}
      transition="all .4s"
    >
      <Box
        textAlign="justify"
        fontSize="1.5rem"
        fontWeight="semibold"
        mx={isSmallerThan1100 ? 'auto' : '0'}
        w={isSmallerThan1100 ? '80%' : '35%'}
        color="gray.600"
      >
        {data[currentContinentID].about}
      </Box>
      <Flex
        justify="space-between"
        align="center"
        gap="3rem"
        flexDir={isSmallerThan600 ? 'column' : 'row'}
        w={isSmallerThan1100 ? '80%' : '35%'}
        mx={isSmallerThan1100 ? 'auto' : '0'}
        transition="all .4s"
      >
        <VStack>
          <Text fontSize="3rem" fontWeight="semibold" color="yellow.400">
            {data[currentContinentID].countriesAmount}
          </Text>
          <Text fontSize="1.5rem" fontWeight="semibold" color="gray.600">
            Países
          </Text>
        </VStack>
        <VStack>
          <Text fontSize="3rem" fontWeight="semibold" color="yellow.400">
            {data[currentContinentID].languagesAmount}
          </Text>
          <Text fontSize="1.5rem" fontWeight="semibold" color="gray.600">
            Línguas
          </Text>
        </VStack>
        <VStack>
          <Text fontSize="3rem" fontWeight="semibold" color="yellow.400">
            {data[currentContinentID].topCities}
          </Text>
          <Flex alignItems="center" justify="space-between">
            <Text
              fontSize="1.5rem"
              fontWeight="semibold"
              color="gray.600"
              w="10rem"
            >
              Cidades +100
            </Text>
            <Tooltip
              label="Top 100 cidades mais visitadas no mundo"
              aria-label="A tooltip"
            >
              <InfoOutlineIcon mt="0.2rem" color="gray.400" cursor="help" />
            </Tooltip>
          </Flex>
        </VStack>
      </Flex>
    </Flex>
  )
}
