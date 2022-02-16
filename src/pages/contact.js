import React from "react"
import { Link } from "gatsby"
import Footer from "../components/Footer"
import Header from "../components/Header"

const Contact = () => {
  return (
    <div>
      <Header />
      <h1>Contact</h1>
      <p>
        Reach me on Twitter{" "}
        <a href="https://twitter.com/ahmtertt" target="_blank">
          @ahmtertt
        </a>
      </p>
      <Footer />
    </div>
  )
}

export default Contact
