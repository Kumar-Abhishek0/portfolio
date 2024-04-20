import React from 'react'
import { BsInfoCircleFill } from 'react-icons/bs'
import PageHeaderContent from '../../components/pageHeaderContent'
import { Line } from 'rc-progress'
import { Animate, AnimateKeyframes } from 'react-simple-animate'
import { skillsData } from './utils'
import './style.scss'

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <PageHeaderContent
        headerText="MY SKILLS"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="skills__content-wrapper">
        {skillsData.map((item, i) => (
          <div key={i} className="skills__content-wrapper__inner-content">
            <Animate
              play
              duration={5}
              delay={0.9}
              start={{
                transform: 'translateX(-200px)',
              }}
              end={{
                transform: 'translateX(0px)',
              }}
            >
              <h3 className="skills__content-wrapper__inner-content__category-text">
                {item.label}
              </h3>
              <div className="skills__content-wrapper__inner-content__progressbar-container">
                {item.data.map((skillItem, j) => (
                  <AnimateKeyframes
                    play
                    duration={1}
                    keyframes={['opacity : 0.5', 'opacity : 0']}
                    iterationCount="1"
                  >
                    <div className="progressbar-wrapper" key={j}>
                      <p>{skillItem.skillName}</p>
                      <Line
                        percent={skillItem.percentage}
                        strokeWidth="5"
                        strokeColor="grey"
                        trailWidth="5"
                        strokeLinecap="square"
                      />
                    </div>
                  </AnimateKeyframes>
                ))}
              </div>
            </Animate>
          </div>
        ))}
      </div>
    </section>
  )
}
export default Skills
