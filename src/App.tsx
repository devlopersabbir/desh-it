import React, { useEffect, useRef, useState } from 'react'
import Hero from './components/hero'
import About from './components/about'
import OurMenu from './components/our-menu'
import OurChef from './components/our-chef'
import Booking from './components/booking'
import Gallery from './components/gallery'
import Footer from './components/footer'
import BottomFooter from './components/footer/bottom_footer'
import CopyRights from './components/footer/copy-rights'
import BackToTop from './components/global/back-to-top'
import Loading from './components/shared/loading'

function App() {
  const [loading, setLoading] = useState(true)

  const sectionRefs: Record<string, React.RefObject<HTMLElement | null>> = {
    home: useRef<HTMLElement>(null),
    about: useRef<HTMLElement>(null),
    menus: useRef<HTMLElement>(null),
    chef: useRef<HTMLElement>(null),
    reservation: useRef<HTMLElement>(null),
    gallery: useRef<HTMLElement>(null),
    contact: useRef<HTMLElement>(null)
  }
  useEffect(() => {
    const handleLoad = () => setLoading(false)

    if (document.readyState === 'complete') {
      handleLoad() // If the page is already loaded
    } else {
      window.addEventListener('load', handleLoad)
    }

    return () => window.removeEventListener('load', handleLoad)
  }, [])
  if (loading) return <Loading />
  document.title =
    'Butazzo Pizza - Restaurant, Cafe, Fast Food business HTML5 Responsive, CSS3 One Page Template'
  return (
    <div>
      <Hero sectionRefs={sectionRefs} />
      <section ref={sectionRefs.about} id="about">
        <About />
      </section>
      <section ref={sectionRefs.menus} id="menus">
        <OurMenu />
      </section>
      <section ref={sectionRefs.chef} id="chef">
        <OurChef />
      </section>
      <section ref={sectionRefs.reservation} id="reservation">
        <Booking />
      </section>
      <section ref={sectionRefs.gallery} id="gallery">
        <Gallery />
      </section>
      <section ref={sectionRefs.contact} id="contact">
        <Footer />
      </section>
      <BottomFooter />
      <CopyRights />
      <BackToTop />
    </div>
  )
}

export default App
