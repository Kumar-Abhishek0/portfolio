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

const jobSummary = `I am a Software Development Engineer in Test (SDET) with 5 years of experience in software testing and quality assurance.
  I have a strong understanding of software development life cycle (SDLC) and software testing life cycle (STLC). I have experience in writing test plans, test cases, test scripts, test scenarios, and test data. I have experience in manual testing, automation testing, and performance testing.
  I have experience in testing web applications, mobile applications, and APIs. I have experience in testing on different platforms like Windows, Mac, and Linux. I have experience in testing on different browsers like Chrome, Firefox, Safari, and Edge.
  I have experience in testing on different devices like desktop, laptop, tablet, and mobile. I have experience in testing on different screen sizes like 13 inch, 15 inch, 21 inch, and 27 inch. I have experience in testing on different resolutions like 1366x768, 1920x1080, 2560x1440, and 3840x2160.`
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
                  I am a Software Development Engineer in Test (SDET) with 8
                  years of experience in software testing and quality assurance.
                </li>
                <li>
                  I have a strong understanding of software development life
                  cycle (SDLC) and software testing life cycle (STLC).
                </li>
                <li>
                  I am proficient in writing test plans, test cases, test
                  scripts, test scenarios, and test data.
                </li>
                <li>
                  I have extensive experience in manual testing, automation
                  testing, and performance testing.
                </li>
                <li>
                  I am skilled in testing web applications, mobile applications,
                  and APIs.
                </li>
                <li>
                  I have expertise in testing on various platforms like Windows,
                  Mac, and Linux, as well as different browsers like Chrome,
                  Firefox, Safari, and Edge.
                </li>
                <li>
                  I have tested applications on different devices including
                  desktops, laptops, tablets, and mobile devices, across various
                  screen sizes and resolutions.
                </li>
                <li>
                  I have a proven track record of delivering high-quality
                  software products by ensuring thorough testing and adherence
                  to best practices.
                </li>
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
