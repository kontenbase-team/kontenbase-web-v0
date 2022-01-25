import { FunctionComponent } from 'react'
import ReactMultiCarousel from 'react-multi-carousel'

import { AspectRatio } from '~/components'
import { styled } from '~/stitches'

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

const CarouselContainer = styled('div', {
  borderRadius: '0.25rem',
  border: '0.5rem solid $red3',
})

const CarouselItemContainer = styled('div', {
  display: 'flex',
  minHeight: '186px',
})

const CarouselImage = styled('img', {
  borderRadius: '0.25rem',
  objectFit: 'cover',
  width: '100%',
  height: '100%',
})

const CarouselCaption = styled('div', {
  position: 'absolute',
  color: '$textAbsolute1',
  background: '$tomatoA8',
  width: '$full',
  textAlign: 'center',
  fontWeight: '$bold',
  fontSize: '$2',
  padding: '$1',
  '@tablet': {
    fontSize: '$5',
    padding: '$2',
  },
})

export type CarouselItem = {
  caption: string
  imageUrl: string
}

export interface CarouselProps {
  items: CarouselItem[]
}

export const Carousel: FunctionComponent<CarouselProps> = ({ items }) => (
    <CarouselContainer>
      <ReactMultiCarousel
        responsive={responsive}
        draggable
        infinite
        showDots
        swipeable
        ssr
      >
        {items.map((item, index) => (
            <CarouselItemContainer key={`carousel-item-${index}`}>
              <AspectRatio.Root ratio={16 / 10}>
                <CarouselImage alt={`${item.caption}`} src={item.imageUrl} />
              </AspectRatio.Root>
              <CarouselCaption>
                <span>{item.caption}</span>
              </CarouselCaption>
            </CarouselItemContainer>
          ))}
      </ReactMultiCarousel>
    </CarouselContainer>
  )
