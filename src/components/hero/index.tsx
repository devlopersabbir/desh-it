import { useRef } from 'react'
import Header from '../header/header'
import Wrapper from '../provider/wrapper'
import HeroSlider from './hero-slider'

const Hero = ({
  sectionRefs
}: {
  sectionRefs: Record<string, React.RefObject<HTMLElement | null>>
}) => {
  const secRef = {
    ...sectionRefs,
    home: useRef<HTMLDivElement | null>(null)
  }
  return (
    <div className="bg-[url(/slider_bg.jpg)] bg-no-repeat bg-cover h-screen" ref={secRef.home}>
      <Header sectionRefs={secRef} />
      <Wrapper classname="w-full">
        <HeroSlider />
      </Wrapper>
    </div>
  )
}

export default Hero
