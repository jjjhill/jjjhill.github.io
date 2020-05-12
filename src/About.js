import React, { useState } from 'react'
import './About.css'
import Timeline from 'react-static-timeline'
import useWindowDimensions from './useWindowDimensions'

function About() {
  const items = [
    {
      title: "RedIron Technologies",
      summary: "Learned about software engineering and created test suites to improve code coverage",
      start: { year: 2016, month: 4 },
      end: { year: 2016, month: 8 },
      technologies: "C#, SQL",
      color: '#f24f4f'
    },
    {
      title: "OnCorp Direct",
      summary: "Wrote C# code for an ASP.NET web application and designed MySQL stored procedures",
      start: { year: 2017, month: 0 },
      end: { year: 2017, month: 4 },
      technologies: "HTML, CSS, JQuery, ASP.NET, MySQL",
      color: '#ffff32'
    },
    {
      title: "Royal Canadian Air Force",
      summary: "Lead the engineering team in the implementation of a cross-platform forum application for members of the organization to post and discuss ideas",
      start: { year: 2017, month: 8 },
      end: { year: 2017, month: 12 },
      technologies: "React Native, React, AWS, MySQL, Node.js",
      color: '#f79825'
    },
    {
      title: "Miovision",
      summary: "Spent the first 8 months developing features for a React/Redux application. The next 4 months was spent developing device-side features and APIs in Node.js",
      start: { year: 2018, month: 4 },
      end: { year: 2019, month: 4 },
      technologies: "React, Redux, JSON, Ruby on Rails, Node.js, Docker",
      color: '#7cf4e6'
    },
    {
      title: "Vida Health",
      summary: "Developed client-facing features for our iOS application while being a strong presence in agile development and product ownership",
      start: { year: 2019, month: 8 },
      end: { year: 2019, month: 12 },
      technologies: "iOS, Swift, XCode, GraphQL",
      color: '#ffa48e'
    },
    {
      title: "University of Waterloo",
      summary: "Studied all major topics in Computer Engineering, including operating systems, networks, data structures and algorithms, hardware programming, compilers, and many more",
      start: { year: 2015, month: 8 },
      end: { year: 2020, month: 4 },
      technologies: "",
      color: '#bf00ff'
    },
  ]
  const { width } = useWindowDimensions()
  const [hoveredId, setHoveredId] = useState(-1)

  const onItemDisplay = (i, leftPct, rightPct, color) => {
    setHoveredId(i)
  }

  const item = hoveredId >= 0 ? items[hoveredId] : {}
  const customPopupContent = (
    <div>
      <div className='line' style={{ backgroundColor: item.color }} />
      <h1>{item.title}</h1>
      <p className='summary'>{item.summary}</p>
      <p className='technologies'>{item.technologies}</p>
    </div>
  )

  const prefix = width < 770 ? 'Tap/drag on' : 'Hover over'

  return (
    <div className="About">
      <div className="about-content">
        <div className="about-text">
          <h1>About me</h1>
          <div>
            <p>I am a fresh grad from the University of Waterloo's Computer Engineering program. My passion and experience is in full-stack web development.</p>
            <p>Working with many different technology stacks and codebases, I have proven that I can quickly become an efficient individual contributor on a new team.</p>
            <p>Well-organized person, problem solver, passionate employee with high attention to detail. Hobbies include rock climbing, playing video games, listening to Metalcore music, and discovering the world's best craft beers.</p>
          </div>
        </div>
        <div className="about-timeline">
          { hoveredId < 0 &&
            <div className="my-timeline">
              <h1>Timeline</h1>
              <em>{prefix} timeline events to learn more</em>
            </div>
          }
          <div className="timeline-container">
            <Timeline
              items={items}
              onItemDisplay={onItemDisplay}
              customPopupContent={customPopupContent}
              lineThickness={4}
              timelineColor={'white'}
              style={{ fontFamily: "UbuntuLight" }}
              popupWidth={ width < 770 ? Math.min(width*0.9, 300) : 400 }
              verticalGap={25}
              popupBackgroundColor={ width < 770 ? null : 'rgba(22,22,22,0.4)' }
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
