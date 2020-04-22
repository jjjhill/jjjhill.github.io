import React from 'react'
import './About.css'
import Timeline from './Timeline'

function About() {
  let colors = ["#f24f4f", "#ffff32", "#f79825", "#7cf4e6", "#ffa48e"]
  let events = [
    {
      title: "RedIron Technologies",
      summary: "Learned about software engineering and created test suites to improve code coverage",
      startYear: 2016,
      startMonth: 4,
      endYear: 2016,
      endMonth: 8,
      technologies: "C#, SQL"
    },
    {
      title: "OnCorp Direct",
      summary: "Wrote C# code for an ASP.NET web application and designed MySQL stored procedures",
      startYear: 2017,
      startMonth: 0,
      endYear: 2017,
      endMonth: 4,
      technologies: "HTML, CSS, JQuery, ASP.NET, MySQL"
    },
    {
      title: "Royal Canadian Air Force",
      summary: "Lead the engineering team in the implementation of a cross-platform forum application for members of the organization to post and discuss ideas",
      startYear: 2017,
      startMonth: 8,
      endYear: 2017,
      endMonth: 12,
      technologies: "React Native, React, AWS, MySQL, Node.js"
    },
    {
      title: "Miovision",
      summary: "Spent the first 8 months developing features for a React/Redux application. The next 4 months was spent developing device-side features and APIs in Node.js",
      startYear: 2018,
      startMonth: 4,
      endYear: 2019,
      endMonth: 4,
      technologies: "React, Redux, JSON, Ruby on Rails, Node.js, Docker"
    },
    {
      title: "Vida Health",
      summary: "Developed client-facing features for our iOS application while being a strong presence in agile development and product ownership.",
      startYear: 2019,
      startMonth: 8,
      endYear: 2019,
      endMonth: 12,
      technologies: "iOS, Swift, XCode, GraphQL"
    }
  ]

  const hoverEvent = (i) => {
  }

  return (
    <div className="About">
      <Timeline events={events} colors={colors} hoverEvent={hoverEvent} />
    </div>
  )
}

export default About
