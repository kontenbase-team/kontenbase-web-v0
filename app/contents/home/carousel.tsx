import { Carousel } from '~/components'

import carouselImages from './carousel-images.json'

export const HomeCarousel = () => {
  return <Carousel images={carouselImages} />
}
