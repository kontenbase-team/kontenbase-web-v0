import { Link } from 'remix'
import ReactMultiCarousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

const responsive = {
  superLargeDesktop: { items: 1, breakpoint: { max: 4000, min: 3000 } },
  desktop: { items: 1, breakpoint: { max: 3000, min: 1024 } },
  tablet: { items: 1, breakpoint: { max: 1024, min: 464 } },
  mobile: { items: 1, breakpoint: { max: 464, min: 0 } },
}

const images = [
  '/images/screenshot-1.png',
  '/images/screenshot-2.png',
  '/images/screenshot-3.png',
]

export const Carousel = () => {
  return (
    <ReactMultiCarousel
      responsive={responsive}
      swipeable={true}
      draggable={true}
      showDots={true}
      infinite={true}
      ssr={true}
    >
      {images.map((banner, index) => {
        return (
          <Link key={index} to="/">
            <img
              alt={`Kontenbase screenshot ${index + 1}`}
              src={images[index]}
              width={800}
              height={450}
            />
          </Link>
        )
      })}
    </ReactMultiCarousel>
  )
}
