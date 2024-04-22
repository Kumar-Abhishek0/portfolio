import React from 'react'
import { BsInfoCircleFill } from 'react-icons/bs'
import PageHeaderContent from '../../components/pageHeaderContent'
import { Animate } from 'react-simple-animate'
import './style.scss'
import { SiCypress } from 'react-icons/si'
import { SiSelenium } from 'react-icons/si'
import { IoLogoJavascript } from 'react-icons/io'
import { FaJava } from 'react-icons/fa'

const personalDetails = [
  { label: 'Name:', value: 'Kumar Abhishek' },
  { label: 'Email:', value: 'kabhisheksdet@gmail.com' },
  { label: 'Phone:', value: '+ (585)978-5003' },
  { label: 'Location:', value: 'Bay Area, CA' },
]

const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="ABOUT ME"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={5}
            delay={1}
            start={{ transform: 'translateX(-900px)' }}
            end={{ transform: 'translatex(0px)' }}
          >
            <h3>SDET/QA Engineer</h3>
            <p>
              <ul class="bullet-list">
                <li>
                  Master's degree(Graduated Dec 2016) in Computer Science from
                  Rochester Institute of Technology.
                </li>
                <li>
                  7+ Years of professional experience in software testing which
                  includes Automation, Functional, Load, Performance & API
                  testing.
                </li>
                <li>
                  Proficient in designing and implementing testing frameworks
                  like Cypress.io, Selenium WebDriver, Appium, TestNG, Junit,
                  Cucumber & JMeter.
                </li>

                <li>
                  Expert in writing & maintaining test automation scripts for
                  Web & Mobile applications.
                </li>
                <li>
                  Skilled in writing test stratigies/plans, test cases, test
                  scenarios & test data.
                </li>
                <li>
                  Experienced working with multi cross-functional teams to
                  understand requirements for projects/features & design test
                  strategies/plans to automate them resulting in >70% reduction
                  in manual testing.
                </li>
                <li>
                  Well versed with programmimg languages like JavaScript, Java,
                  Python.
                </li>
                <li>
                  Experienced in testing RESTful API services using POSTMAN.
                </li>
                <li>
                  Expert in testing features manually & collaborating with
                  engineers to ensure smooth releases.
                </li>
                <li>Certification in Meta Front-End Development.</li>
              </ul>
            </p>
          </Animate>

          <Animate
            play
            duration={5}
            delay={1}
            start={{ transform: 'translateX(500px)' }}
            end={{ transform: 'translatex(0px)' }}
          >
            <h3 className="personalInformationHeaderText">
              Personal Information
            </h3>
            <ul>
              {personalDetails.map((item, li) => (
                <li key={li}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="about__content__serviceWrapper">
          <div className="about__content__serviceWrapper__innerContent">
            <div>
              <SiCypress size={60} color="white" />
            </div>
            <div>
              <SiSelenium size={60} color="white" />
            </div>
            <div>
              <FaJava size={60} color="white" />
            </div>
            <div>
              <IoLogoJavascript size={60} color="white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
