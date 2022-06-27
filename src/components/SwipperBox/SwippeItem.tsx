import { Flex, Text, Tooltip, useMediaQuery } from '@chakra-ui/react'

interface SwippeItemProsp {
  swipperData: {
    name: string
    image: string
    description: string
    url: string
  }
}

export function SwippeItem({ swipperData }: SwippeItemProsp) {
  const [isSmallerThan780] = useMediaQuery('(max-width: 780px)')

  return (
    <Flex
      bgImage={`url(${swipperData.image})`}
      backgroundSize="cover"
      backgroundPosition="center"
      w="full"
      h="28rem"
      flexDir="column"
      align="center"
      justify="center"

    >
      <Flex
        flexDir="column"
        justifyContent="center"
        align="center"
        textAlign="center"
        w={isSmallerThan780 ? '12rem' : '30rem'}
        transition="all .4s"

      >
        <Tooltip
          label="Clique para saber mais!"
          mb="-1rem"
          borderRadius="md"
          aria-label="A tooltip"
          placement="top"
          fontSize={isSmallerThan780 ? '1rem' : '1.5rem'}
          bgColor="gray.700"
        >
          <Text
            as="a"
            href={swipperData.url}
            fontWeight="bold"
            fontSize={isSmallerThan780 ? '2rem' : '3rem'}
            color="white"
            textShadow="1px 1px 3px #47585B"
          >
            {swipperData.name}
          </Text>
        </Tooltip>
        <Text
          as="p"
          fontWeight="bold"
          fontSize={isSmallerThan780 ? '1rem' : '1.5rem'}
          color="white"
          bgColor="gray.700"
          px="0.5rem"
          borderRadius="md"
        >
          {swipperData.description}
        </Text>
      </Flex>
    </Flex>
  )
}
