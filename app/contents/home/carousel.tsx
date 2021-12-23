import { Carousel } from '~/components'

import carouselItems from './carousel-items.json'

export const HomeCarousel = () => {
  return <Carousel items={carouselItems} />
}
