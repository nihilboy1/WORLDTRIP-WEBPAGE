import { Box, Flex, Text, Tooltip } from '@chakra-ui/react'
import { A11y, Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css/bundle'

export function SwipperBox() {
  return (
    <Flex
      align="center"
      justify="end"
      flexDir="column"
      w="full"
      h="43rem"
      pb="2rem"
    >
      <Box>
        <Text fontSize="2.25rem" color="gray.600" textAlign="center" mb="3rem">
          Vamos nessa? <br /> Então escolha seu continente
        </Text>
      </Box>
      <Flex w="75%">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, A11y]}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <Flex
              backgroundImage={`url('/src/images/swipper_images/home_europa_swipper.png')`}
              backgroundSize="cover"
              w="full"
              h="28rem"
              flexDir="column"
              align="center"
              justify="center"
            >
              <Tooltip
                label="Clique pra saber mais! :)"
                aria-label="A tooltip"
                placement="top"
                fontSize="1.5rem"
                bgColor="gray.700"
              >
                <Text
                  as="a"
                  href="/continente/europa"
                  fontWeight="bold"
                  fontSize="3rem"
                  color="white"
                  textShadow="2px 2px 1px #47585B"
                >
                  Europa
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
                Vida noturna e história
              </Text>
            </Flex>
          </SwiperSlide>
          <SwiperSlide>
            <Flex
              backgroundImage={`url('/src/images/swipper_images/home_americanorte_swipper.jpg')`}
              backgroundSize="cover"
              backgroundPosition="center"
              w="full"
              h="28rem"
              flexDir="column"
              align="center"
              justify="center"
            >
              <Tooltip
                label="Clique pra saber mais! :)"
                aria-label="A tooltip"
                placement="top"
                fontSize="1.5rem"
                bgColor="gray.700"
              >
                <Text
                  as="a"
                  href="/continente/americanorte"
                  fontWeight="bold"
                  fontSize="3rem"
                  color="white"
                  textShadow="2px 2px 1px #47585B"
                >
                  América do norte
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
                Natureza e dinamismo
              </Text>
            </Flex>
          </SwiperSlide>
          <SwiperSlide>
            <Flex
              backgroundImage={`url('/src/images/swipper_images/home_americasul_swipper.jpg')`}
              backgroundSize="cover"
              backgroundPosition="bottom"
              w="full"
              h="28rem"
              flexDir="column"
              align="center"
              justify="center"
            >
              <Tooltip
                label="Clique pra saber mais! :)"
                aria-label="A tooltip"
                placement="top"
                fontSize="1.5rem"
                bgColor="gray.700"
              >
                <Text
                  as="a"
                  href="/continente/americasul"
                  fontWeight="bold"
                  fontSize="3rem"
                  color="white"
                  textShadow="2px 2px 1px #47585B"
                >
                  América do sul
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
                Receptividade e gastronomia
              </Text>
            </Flex>
          </SwiperSlide>
          <SwiperSlide>
            <Flex
              backgroundImage={`url('/src/images/swipper_images/home_asia_swipper.avif')`}
              backgroundSize="cover"
              backgroundPosition="center"
              w="full"
              h="28rem"
              flexDir="column"
              align="center"
              justify="center"
            >
              <Tooltip
                label="Clique pra saber mais! :)"
                aria-label="A tooltip"
                placement="top"
                fontSize="1.5rem"
                bgColor="gray.700"
              >
                <Text
                  as="a"
                  href="/continente/asia"
                  fontWeight="bold"
                  fontSize="3rem"
                  color="white"
                  textShadow="2px 2px 1px #47585B"
                >
                  Ásia
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
                Tecnologia e Tradição
              </Text>
            </Flex>
          </SwiperSlide>
          <SwiperSlide>
            <Flex
              backgroundImage={`url('/src/images/swipper_images/home_africa_swipper.avif')`}
              backgroundSize="cover"
              backgroundPosition="center"
              w="full"
              h="28rem"
              flexDir="column"
              align="center"
              justify="center"
            >
              <Tooltip
                label="Clique pra saber mais! :)"
                aria-label="A tooltip"
                placement="top"
                fontSize="1.5rem"
                bgColor="gray.700"
              >
                <Text
                  as="a"
                  href="/continente/africa"
                  fontWeight="bold"
                  fontSize="3rem"
                  color="white"
                  textShadow="2px 2px 1px #47585B"
                >
                  África
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
                O berço da civilização
              </Text>
            </Flex>
          </SwiperSlide>
          <SwiperSlide>
            <Flex
              backgroundImage={`url('/src/images/swipper_images/home_oceania_swipper.jpg')`}
              backgroundSize="cover"
              backgroundPosition="center"
              w="full"
              h="28rem"
              flexDir="column"
              align="center"
              justify="center"
            >
              <Tooltip
                label="Clique pra saber mais! :)"
                aria-label="A tooltip"
                placement="top"
                fontSize="1.5rem"
                bgColor="gray.700"
              >
                <Text
                  as="a"
                  href="/continente/oceania"
                  fontWeight="bold"
                  fontSize="3rem"
                  color="white"
                  textShadow="2px 2px 1px #47585B"
                >
                  Oceania
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
                Cangurus e hobbits
              </Text>
            </Flex>
          </SwiperSlide>
        </Swiper>
      </Flex>
    </Flex>
  )
}
