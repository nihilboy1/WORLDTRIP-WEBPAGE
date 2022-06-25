import { Box, Flex, Img, Text } from '@chakra-ui/react'
import { citiesData } from '../../citiesData'

export function CitiesBox() {
  return (
    <Flex w="full" flexDir="column" my="5rem" px="13rem">
      <Text
        as="h1"
        fontSize="2.25rem"
        color="gray.600"
        fontWeight="semibold"
        mb="2rem"
      >
        Cidades +100
      </Text>
      <Flex w="full" justify="space-between" wrap="wrap">
        <Flex flexDir="column" borderRadius="md" mb="4rem">
          <Img src={citiesData.europe[1].cityImage} />
          <Flex
            align="center"
            justifyContent="space-between"
            px="1.2rem"
            py="0.5rem"
            border="1px solid #FFBA08"
            borderBottomRadius="md"
          >
            <Box>
              <Text
                as="h2"
                fontSize="1.25rem"
                color="gray.600"
                fontWeight="semibold"
              >
                {citiesData.europe[1].city}
              </Text>
              <Text fontSize="1rem" as="h3" color="gray.500">
                {citiesData.europe[1].country}
              </Text>
            </Box>
            <Img src={citiesData.europe[1].cityFlag} w="2rem" h="2rem" />
          </Flex>
        </Flex>
        <Flex flexDir="column" borderRadius="md" mb="4rem">
          <Img src={citiesData.europe[2].cityImage} />
          <Flex
            align="center"
            justifyContent="space-between"
            px="1.2rem"
            py="0.5rem"
            border="1px solid #FFBA08"
            borderBottomRadius="md"
          >
            <Box>
              <Text
                as="h2"
                fontSize="1.25rem"
                color="gray.600"
                fontWeight="semibold"
              >
                {citiesData.europe[2].city}
              </Text>
              <Text fontSize="1rem" as="h3" color="gray.500">
                {citiesData.europe[2].country}
              </Text>
            </Box>
            <Img src={citiesData.europe[2].cityFlag} w="2rem" h="2rem" />
          </Flex>
        </Flex>
        <Flex flexDir="column" borderRadius="md" mb="4rem">
          <Img src={citiesData.europe[3].cityImage} />
          <Flex
            align="center"
            justifyContent="space-between"
            px="1.2rem"
            py="0.5rem"
            border="1px solid #FFBA08"
            borderBottomRadius="md"
          >
            <Box>
              <Text
                as="h2"
                fontSize="1.25rem"
                color="gray.600"
                fontWeight="semibold"
              >
                {citiesData.europe[3].city}
              </Text>
              <Text fontSize="1rem" as="h3" color="gray.500">
                {citiesData.europe[3].country}
              </Text>
            </Box>
            <Img src={citiesData.europe[3].cityFlag} w="2rem" h="2rem" />
          </Flex>
        </Flex>
        <Flex flexDir="column" borderRadius="md" mb="4rem">
          <Img src={citiesData.europe[4].cityImage} />
          <Flex
            align="center"
            justifyContent="space-between"
            px="1.2rem"
            py="0.5rem"
            border="1px solid #FFBA08"
            borderBottomRadius="md"
          >
            <Box>
              <Text
                as="h2"
                fontSize="1.25rem"
                color="gray.600"
                fontWeight="semibold"
              >
                {citiesData.europe[4].city}
              </Text>
              <Text fontSize="1rem" as="h3" color="gray.500">
                {citiesData.europe[4].country}
              </Text>
            </Box>
            <Img src={citiesData.europe[4].cityFlag} w="2rem" h="2rem" />
          </Flex>
        </Flex>
        <Flex flexDir="column" borderRadius="md" mb="4rem">
          <Img src={citiesData.europe[5].cityImage} />
          <Flex
            align="center"
            justifyContent="space-between"
            px="1.2rem"
            py="0.5rem"
            border="1px solid #FFBA08"
            borderBottomRadius="md"
          >
            <Box>
              <Text
                as="h2"
                fontSize="1.25rem"
                color="gray.600"
                fontWeight="semibold"
              >
                {citiesData.europe[5].city}
              </Text>
              <Text fontSize="1rem" as="h3" color="gray.500">
                {citiesData.europe[5].country}
              </Text>
            </Box>
            <Img src={citiesData.europe[5].cityFlag} w="2rem" h="2rem" />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}
