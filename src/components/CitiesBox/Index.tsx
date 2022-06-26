import { Box, Flex, Img, Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import data from '../../data.json'

interface CitiesBoxProps {
  currentContinentID: number
}

export function CitiesBox() {
  const { id } = useParams()
  const [currentContinentID, setCurrentContinentID] = useState<number>(0)
  const continentList = [
    'europa',
    'americanorte',
    'americasul',
    'asia',
    'africa',
    'oceania'
  ]

  useEffect(() => {
    if (id && continentList.includes(id)) {
      const index = continentList.indexOf(id)
      setCurrentContinentID(index)
    }
  })
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
        {data[currentContinentID].cities.map(city => {
          return (
            <Flex key={city.name} flexDir="column" borderRadius="md" mb="4rem">
              <Img src={city.cityImage} width="16rem" height="12rem" borderTopRadius="md" />
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
                    {city.name}
                  </Text>
                  <Text fontSize="1rem" as="h3" color="gray.500">
                    {city.country}
                  </Text>
                </Box>
                <Img
                  src={city.countryFlag}
                  w="2rem"
                  h="2rem"
                />
              </Flex>
            </Flex>
          )
        })}
      </Flex>
    </Flex>
  )
}
