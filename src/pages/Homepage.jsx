import { Footer } from "../components/Footer/Footer"
import { NavBar } from "../components/NavBar/Navbar"
import { Us } from "../components/Us/Us"
import { ImageCarousel } from "../components/ImageCarousel/ImageCarousel"
import { Services } from "../components/Services/Services"
import { Product } from "../components/Product"
import {QuienesSomos} from "../components/QuienesSomos"
import { Contact } from "../components/Contact/Contact"

export const Homepage = () => {
  return (
    <>
      <ImageCarousel />
      <QuienesSomos />
      <Product />
      {/* <Services /> */}
      <Us />
      <Contact />
    </>
  )
}
