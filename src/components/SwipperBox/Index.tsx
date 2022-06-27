import { Box, Flex, Text, useMediaQuery } from '@chakra-ui/react'
import { A11y, Navigation, Pagination } from 'swiper'
import 'swiper/css/bundle'
import { Swiper, SwiperSlide } from 'swiper/react'
import swipperData from '../../swipperData'
import { SwippeItem } from './SwippeItem'

export function SwipperBox() {
  const [isSmallerThan780] = useMediaQuery('(max-width: 780px)')

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
      <Flex w={isSmallerThan780 ? "90%" : "75%"}>
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <SwippeItem swipperData={swipperData[0]} />
          </SwiperSlide>
          <SwiperSlide>
            <SwippeItem swipperData={swipperData[1]} />
          </SwiperSlide>
          <SwiperSlide>
            <SwippeItem swipperData={swipperData[2]} />
          </SwiperSlide>
          <SwiperSlide>
            <SwippeItem swipperData={swipperData[3]} />
          </SwiperSlide>
          <SwiperSlide>
            <SwippeItem swipperData={swipperData[4]} />
          </SwiperSlide>
          <SwiperSlide>
            <SwippeItem swipperData={swipperData[5]} />
          </SwiperSlide>
        </Swiper>
      </Flex>
    </Flex>
  )
}
