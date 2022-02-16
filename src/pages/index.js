import React from "react"
import { Link } from "gatsby"
import Footer from "../components/Footer"
import Header from "../components/Header"

const IndexPage = () => {
  return (
    <div>
      <Header />
      <h1>Hello</h1>
      <h2>I'm Ahmet, a full-stack developer, living in beautiful Sydney.</h2>
      <p>
        Need a developer? <Link to="/contact">Contact Me</Link>
      </p>
      <p>
        Reach me on Twitter{" "}
        <a href="https://twitter.com/ahmtertt">Contact Me</a>
      </p>
      <Footer />
    </div>
  )
}

export default IndexPage
