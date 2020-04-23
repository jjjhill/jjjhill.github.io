import React from 'react'
import './About.css'
import Timeline from './Timeline'
import useWindowDimensions from './useWindowDimensions'

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
    },
    {
      title: "University of Waterloo",
      summary: "Computer Engineering",
      startYear: 2015,
      startMonth: 8,
      endYear: 2020,
      endMonth: 4,
      technologies: "",
      isBackgroundEvent: true
    },
  ]
  const { width } = useWindowDimensions()
  const hoverEvent = (i) => {
  }

  return (
    <div className="About">
      <div className="about-content">
        <div className="about-text">
          <h1>About me</h1>
          <p>I am a fresh graduate from the University of Waterloo's Computer Engineering program. My passion and experience is in full-stack web development.</p>
          <p>Working with many different technology stacks and codebases I have proven that I can quickly become an efficient individual contributor on a new team.</p>
          <p>Well-organised person, problem solver, passionate employee with high attention to detail. Hobbies include rock climbing, playing video games, listening to Metalcore music, and discovering the worlds best craft beers.</p>
        </div>
        <Timeline events={events} colors={colors} hoverEvent={hoverEvent} small={ width < 770 } />
      </div>
    </div>
  )
}

export default About
