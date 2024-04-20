import React from 'react'
import { BsInfoCircleFill } from 'react-icons/bs'
import PageHeaderContent from '../../components/pageHeaderContent'
import { Animate } from 'react-simple-animate'
import './style.scss'

const personalDetails = [
  { label: 'Name', value: 'Kumar Abhishek' },
  { label: 'Email', value: 'kabhisheksdet@gmail.com' },
  { label: 'Phone', value: '+ (585)978-5003' },
  { label: 'Location', value: 'Bay Area, CA' },
]

const jobSummary =
  'I am a Software Development Engineer in Test (SDET) with 5 years of experience in software testing and quality assurance. I have a strong understanding of software development life cycle (SDLC) and software testing life cycle (STLC). I have experience in writing test plans, test cases, test scripts, test scenarios, and test data. I have experience in manual testing, automation testing, and performance testing. I have experience in testing web applications, mobile applications, and APIs. I have experience in testing on different platforms like Windows, Mac, and Linux. I have experience in testing on different browsers like Chrome, Firefox, Safari, and Edge. I have experience in testing on different devices like desktop, laptop, tablet, and mobile. I have experience in testing on different screen sizes like 13 inch, 15 inch, 21 inch, and 27 inch. I have experience in testing on different resolutions like 1366x768, 1920x1080, 2560x1440, and 3840x2160.'
const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
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
            <h3>Software Developer in Test</h3>
            <p>{jobSummary}</p>
          </Animate>

          <Animate
            play
            duration={5}
            delay={1}
            start={{ transform: 'translateX(500px)' }}
            end={{ transform: 'translatex(0px)' }}
          >
            <h3>Personal Information</h3>
            <ul>
              {personalDetails.map((item, index) => (
                <li key={index}>
                  <span>{item.label}</span>
                  <span>{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="about__content__sericeWrapper">Services Wrapper</div>
      </div>
    </section>
  )
}

export default About
