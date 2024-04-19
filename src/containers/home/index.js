import React from 'react'
import './style.scss'

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="home__text-wrapper">
        <h1>
          I'm Kumar Abhishek
          <br />
          SDET/QA Engineer
        </h1>
      </div>
      <div className="home__contact-me">
        <button>Contact Me</button>
        <button>About Me</button>
        <button>Resume</button>
        <button> Skills </button>
      </div>
    </section>
  )
}

export default Home
