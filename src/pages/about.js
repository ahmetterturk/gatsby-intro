import React from "react"
import { Link } from "gatsby"
import Footer from "../components/Footer"
import Header from "../components/Header"

const About = () => {
  return (
    <div>
      <Header />
      <h1>About</h1>
      <p>I am currently looking for Front End Jobs</p>
      <p>
        <Link to="/contact">Want to work with me? Reach out!</Link>
      </p>
      <Footer />
    </div>
  )
}

export default About
