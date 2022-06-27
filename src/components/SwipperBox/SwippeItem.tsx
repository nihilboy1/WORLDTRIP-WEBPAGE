import { Flex, Text, Tooltip } from '@chakra-ui/react'

interface SwippeItemProsp {
  swipperData: {
    name: string
    image: string
    description: string
    url: string
  }
}

export function SwippeItem({ swipperData }: SwippeItemProsp) {
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
      <Tooltip
        label="Clique para saber mais!"
        mb="-1rem"
        borderRadius="md"
        aria-label="A tooltip"
        placement="top"
        fontSize="1.5rem"
        bgColor="gray.700"
      >
        <Text
          as="a"
          href={swipperData.url}
          fontWeight="bold"
          fontSize="3rem"
          color="white"
          textShadow="2px 2px 1px #47585B"
        >
          {swipperData.name}
        </Text>
      </Tooltip>
      <Text
        as="p"
        fontWeight="bold"
        fontSize="1.5rem"
        color="white"
        bgColor="gray.700"
        px="0.5rem"
        borderRadius="md"
      >
        {swipperData.description}
      </Text>
    </Flex>
  )
}
