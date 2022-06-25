import { Grid, GridItem, Img, Text } from '@chakra-ui/react'

export function TravelTypesBox() {
  return (
    <Grid
      templateColumns="repeat(5, 10%)"
      alignItems="center"
      justifyContent="center"
      gap="10%"
      h="24rem"
      w="full"
      _after={{
        content: '""',
        position: 'absolute',
        padding: '0.1rem',
        borderRadius: '1rem',
        bgColor: 'gray.600',
        width: '5rem',
        left: '50%',
        top: '52%',
        transform: 'translate(-50%, -50%)'
      }}
    >
      <GridItem>
        <Img src="/src/images/traveltypes_icons/cocktail1.png" alt="cocktail Image" mx="auto" />
        <Text
          as="h2"
          fontSize="1.5rem"
          color="gray.600"
          fontWeight="bold"
          textAlign="center"
        >
          Vida Noturna
        </Text>
      </GridItem>
      <GridItem>
        <Img src="/src/images/traveltypes_icons/surf1.png" alt="surf Image" mx="auto" />
        <Text
          as="h2"
          fontSize="1.5rem"
          color="gray.600"
          fontWeight="bold"
          textAlign="center"
        >
          Praia
        </Text>
      </GridItem>
      <GridItem>
        <Img src="/src/images/traveltypes_icons/building1.png" alt="building Image" mx="auto" />
        <Text
          as="h2"
          fontSize="1.5rem"
          color="gray.600"
          fontWeight="bold"
          textAlign="center"
        >
          Moderno
        </Text>
      </GridItem>
      <GridItem>
        <Img src="/src/images/traveltypes_icons/museum1.png" alt="museum Image" mx="auto" />
        <Text
          as="h2"
          fontSize="1.5rem"
          color="gray.600"
          fontWeight="bold"
          textAlign="center"
        >
          Clássico
        </Text>
      </GridItem>
      <GridItem>
        <Img src="/src/images/traveltypes_icons/earth1.png" alt="earth Image" mx="auto" />
        <Text
          as="h2"
          fontSize="1.5rem"
          color="gray.600"
          fontWeight="bold"
          textAlign="center"
        >
          E mais...
        </Text>
      </GridItem>
    </Grid>
  )
}
