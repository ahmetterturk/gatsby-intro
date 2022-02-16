import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"

const About = () => {
  return (
    <Layout>
      <h1>About</h1>
      <p>I am currently looking for Front End Jobs</p>
      <p>
        <Link to="/contact">Want to work with me? Reach out!</Link>
      </p>
    </Layout>
  )
}

export default About
