import { Flex, Img, Text } from '@chakra-ui/react'

interface TravelTypeProps {
  image: string
  detail: string
}

export function TravelType({ image, detail }: TravelTypeProps) {
  return (
    <Flex
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      w="6rem"
    >
      <Img src={image} alt="cocktail Image" />
      <Text
        as="h2"
        fontSize="1.5rem"
        color="gray.600"
        fontWeight="bold"
        textAlign="center"
        w="10rem"
      >
        {detail}
      </Text>
    </Flex>
  )
}
