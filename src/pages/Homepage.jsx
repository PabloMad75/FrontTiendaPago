import { Footer } from "../components/Footer"
import { NavBar } from "../components/Navbar"
import { Us } from "../components/Us"
import { ImageCarousel } from "../components/ImageCarousel"
import { Services } from "../components/Services/Services"
import { Product } from "../components/Product"
import QuienesSomos from "../components/QuienesSomos"

export const Homepage = () => {
  return (
    <>
      <NavBar />
      <ImageCarousel />
      <Product />
      {/* <Services /> */}
      <Us />
      <Footer/>
      <QuienesSomos />

    </>
  )
}
