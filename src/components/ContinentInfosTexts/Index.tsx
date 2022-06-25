import { InfoOutlineIcon } from '@chakra-ui/icons'
import { Flex, Text, Tooltip, VStack } from '@chakra-ui/react'

export function ContinentInfosTexts() {
  return (
    <Flex w="100%" justifyContent="center" mt="5rem" gap="12%">
      <Text textAlign="justify" fontSize="1.5rem" w="35%">
        A Europa é, por convenção, um dos seis continentes do mundo.
        Compreendendo a península ocidental da Eurásia, a Europa geralmente
        divide-se da Ásia a leste pela divisória de águas dos montes Urais, o
        rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
      </Text>
      <Flex justify="space-between" align="center" gap="3rem" width="30rem">
        <VStack>
          <Text fontSize="3rem" fontWeight="semibold" color="yellow.400">
            50
          </Text>
          <Text fontSize="1.5rem" fontWeight="semibold">
            Países
          </Text>
        </VStack>
        <VStack>
          <Text fontSize="3rem" fontWeight="semibold" color="yellow.400">
            60
          </Text>
          <Text fontSize="1.5rem" fontWeight="semibold">
            Línguas
          </Text>
        </VStack>
        <VStack>
          <Text fontSize="3rem" fontWeight="semibold" color="yellow.400">
            27
          </Text>
          <Flex alignItems="center">
            <Text fontSize="1.5rem" fontWeight="semibold" textAlign="center">
              Cidades +100
            </Text>
            <Tooltip
              label="Top 100 cidades mais visitadas no mundo"
              aria-label="A tooltip"
            >
              <InfoOutlineIcon mt="0.2rem" ml="0.4rem" color="gray.400" />
            </Tooltip>
          </Flex>
        </VStack>
      </Flex>
    </Flex>
  )
}
