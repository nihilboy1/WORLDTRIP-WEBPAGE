import { InfoOutlineIcon } from '@chakra-ui/icons'
import { Box, Flex, Text, Tooltip, VStack } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'

export function ContinentInfosTexts() {
  const { id } = useParams()

  return (
    <Flex w="100%" justifyContent="center" mt="5rem" gap="12%">
      <Box
        textAlign="justify"
        fontSize="1.5rem"
        fontWeight="semibold"
        w="35%"
        color="gray.600"
      >
        {id === 'europa' ? (
          <p>
            A Europa é, por convenção, um dos seis continentes do mundo.
            Compreendendo a península ocidental da Eurásia, a Europa geralmente
            divide-se da Ásia a leste pela divisória de águas dos montes Urais,
            o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
          </p>
        ) : id === 'africa' ? (
          <p>
            A África é o terceiro continente mais extenso com cerca de 30
            milhões de quilômetros quadrados, cobrindo 20,3% da área total da
            terra firme do planeta. É o segundo continente mais populoso da
            Terra com cerca de um bilhão de pessoas, representando cerca de um
            sétimo da população mundial, e 54 países independentes.
          </p>
        ) : id === 'asia' ? (
          <p>
            A Ásia é o maior dos continentes, tanto em área como em população.
            Abrange um terço das partes sólidas da superfície da Terra e é
            responsável por abrigar quase três quintos da população mundial. A
            Ásia faz fronteira no lado ocidental com a África e com a Europa, e
            no lado oriental com o oceano Pacífico, a Oceania e, em menor
            proporção, com a América do Norte, pelo Estreito de Bering.
          </p>
        ) : id === 'oceania' ? (
          <p>
            Oceania ou Oceânia é uma região geográfica composta por vários
            grupos de ilhas do oceano Pacífico. O termo Oceania foi criado em
            1831 pelo explorador francês Dumont d'Urville. O termo é usado hoje
            em vários idiomas para designar uma região geográfica e política que
            compreende o continente da Austrália e ilhas do Oceano Pacífico
            adjacentes.
          </p>
        ) : id === 'americasul' ? (
          <p>
            A América do Sul é um continente que compreende a porção meridional
            da América. Também é considerada um subcontinente do continente
            americano. A sua extensão é de 17 819 100 km², abrangendo 12% da
            superfície terrestre e 6% da população mundial. Une-se à América
            Central a norte pelo istmo do Panamá e se separa da Antártida ao sul
            pelo estreito de Drake.
          </p>
        ) : id === 'americanorte' ? (
          <p>
            A América do Norte é um subcontinente que compreende a porção
            setentrional do continente americano. Existem duas formas de
            classificar esse continente: a primeira considera que a América do
            Norte é apenas a parte mais setentrional da América, separada da
            América Central na fronteira entre o México e a Guatemala, a segunda
            classificação reconhece apenas uma América do Norte e uma América do
            Sul, traçando o limite no Istmo do Panamá
          </p>
        ) : (
          ''
        )}
      </Box>
      <Flex justify="space-between" align="center" gap="3rem" width="30rem">
        <VStack>
          <Text fontSize="3rem" fontWeight="semibold" color="yellow.400">
            50
          </Text>
          <Text fontSize="1.5rem" fontWeight="semibold" color="gray.600">
            Países
          </Text>
        </VStack>
        <VStack>
          <Text fontSize="3rem" fontWeight="semibold" color="yellow.400">
            60
          </Text>
          <Text fontSize="1.5rem" fontWeight="semibold" color="gray.600">
            Línguas
          </Text>
        </VStack>
        <VStack>
          <Text fontSize="3rem" fontWeight="semibold" color="yellow.400">
            16
          </Text>
          <Flex alignItems="center">
            <Text
              fontSize="1.5rem"
              fontWeight="semibold"
              textAlign="center"
              color="gray.600"
            >
              Cidades +100
            </Text>
            <Tooltip
              label="Top 100 cidades mais visitadas no mundo"
              aria-label="A tooltip"
            >
              <InfoOutlineIcon
                mt="0.2rem"
                ml="0.4rem"
                color="gray.400"
                cursor="help"
              />
            </Tooltip>
          </Flex>
        </VStack>
      </Flex>
    </Flex>
  )
}
