import { styled } from '~/stitches'
import ReactMultiCarousel from 'react-multi-carousel'

import { AspectRatio } from '~/components'

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
}

const images = [
  '/images/kontenbase-screenshot-1.png',
  '/images/kontenbase-screenshot-2.png',
  '/images/kontenbase-screenshot-3.png',
]

const CarouselContainer = styled('div', {
  borderRadius: '0.25rem',
  border: '0.5rem solid $red3',
})

const CarouselImageContainer = styled('div', {
  display: 'flex',
})

const CarouselImage = styled('img', {
  borderRadius: '0.25rem',
  objectFit: 'cover',
  width: '100%',
  height: '100%',
})

export const Carousel = () => {
  return (
    <CarouselContainer>
      <ReactMultiCarousel
        responsive={responsive}
        draggable
        infinite
        showDots
        swipeable
        ssr
      >
        {images.map((imageUrl, index) => {
          return (
            <CarouselImageContainer key={`carousel-image-${index}`}>
              <AspectRatio.Root ratio={16 / 10}>
                <CarouselImage
                  alt={`Kontenbase screenshot ${index + 1}`}
                  src={imageUrl}
                />
              </AspectRatio.Root>
            </CarouselImageContainer>
          )
        })}
      </ReactMultiCarousel>
    </CarouselContainer>
  )
}
