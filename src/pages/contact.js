import React from "react"
import { Link } from "gatsby"

const Contact = () => {
  return (
    <div>
      <h1>Contact</h1>
      <p>
        Reach me on Twitter{" "}
        <a href="https://twitter.com/ahmtertt" target="_blank">
          @ahmtertt
        </a>
      </p>
      <p>
        <Link to="/">Back to home page</Link>
      </p>
    </div>
  )
}

export default Contact
