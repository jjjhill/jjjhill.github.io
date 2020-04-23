import React, { useState } from "react";
import "./Timeline.css";

export default function Timeline(props) {
  let { events, colors } = props;
  let [hoveredIdx, setHoveredIdx] = useState(-1);

  let hexToRgb = hex => {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16)
        }
      : null;
  };

  let eventHover = i => {
    props.hoverEvent(i);
    setHoveredIdx(i);
  };

  let unHover = () => {
    if (props.unHover) props.unHover();
    setHoveredIdx(-1); // unhover
  };

  let firstYear, firstMonth, lastMonth, lastYear
  events.forEach(event => {
    if (event.startMonth === 1) event.startMonth = 0;
    if (!firstYear || event.startYear <= firstYear) {
      firstYear = event.startYear;
      firstMonth = firstMonth
        ? Math.min(firstMonth, event.startMonth)
        : event.startMonth;
    }
    if (!lastYear || event.endYear >= lastYear) {
      lastYear = event.endYear;
      lastMonth = lastMonth
        ? Math.max(lastMonth, event.endMonth)
        : event.endMonth;
    }
  })

  let numYears = lastYear - firstYear + 1

  let eventLines = events.map((event, i) => {
    let startN = (event.startYear - firstYear) * 12 + event.startMonth
    let endN = (event.endYear - firstYear) * 12 + event.endMonth
    let totalMonths = numYears * 12
    let leftPct = (startN / totalMonths) * 100
    let rightPct = ((totalMonths - endN) / totalMonths) * 100
    let clr

    if (event.isBackgroundEvent) {
      clr = "#FFFFFF"
      let { r, g, b } = hexToRgb(clr)
      return (
        <div
          key={event.title}
          className="event background-event"
          style={{
            left: leftPct + "%",
            right: rightPct + "%",
            borderColor: `rgb(${r}, ${g}, ${b})`,
            backgroundColor: `rgba(${r}, ${g}, ${b}, 0.1)`
          }}
        >
          <p style={{
            fontSize: props.small ? '11px' : '15px',
            transform: props.small ? 'translateY(-140%)' : 'translateY(-130%)'
          }}>
            {event.title}
          </p>
        </div>
      )
    }

    clr = colors[i % colors.length]
    let { r, g, b } = hexToRgb(clr)

    return (
      <div
        key={event.title}
        className="event"
        style={{
          left: leftPct + "%",
          right: rightPct + "%",
          borderColor: `rgb(${r},${g},${b})`,
          backgroundColor: hoveredIdx === i ? `rgba(${r},${g},${b},0.6)` : "transparent"
        }}
        onMouseEnter={() => eventHover(i)}
      >
        {hoveredIdx === i && (
          <div className="arrow" />
        )}
      </div>
    )
  })

  let majorSegments = numYears
  let w = "90%"

  return (
    <div className="timeline-container" style={{
      width: w,
      height: props.small ? '210px' : '250px',
      margin: props.small ? 'auto' : '0'
    }} onMouseLeave={unHover}>
      <div className="timeline">
        {[...Array(majorSegments)].map((_, i) => (
          <div key={"seg" + i} className="major">
            {[...Array(3)].map((_, j) => (
              <div key={"subSeg" + j} className="minor" />
            ))}
            <span className="year">{firstYear + i}</span>
          </div>
        ))}
        {eventLines}
        {hoveredIdx !== -1 &&
          (<div className="popup" style={{
            height: props.small ? '110px' : '150px',
            transform: props.small ? 'translateY(-153%)' : 'translateY(-140%)' }}>
            <div className="line" style={{ backgroundColor: colors[hoveredIdx % colors.length] }} />
            <h1 style={{ fontSize: props.small ? '16px' : '24px', margin: props.small ? '2px' : '7px' }}>{events[hoveredIdx].title}</h1>
            <p className="summary" style={{ fontSize: props.small ? '14px' : '19px' }}>{events[hoveredIdx].summary}</p>
            <p className="technologies" style={{ fontSize: props.small ? '10px' : '13px' }}>{events[hoveredIdx].technologies}</p>
          </div>
        )}
        {hoveredIdx === -1 &&
          (<div className="my-timeline" style={{ top: props.small ? '-150px' : '-200px' }}>
            <h1 style={{ fontSize: props.small ? 24 : 36 }}>Timeline</h1>
            <p style={{ fontSize: props.small ? 12 : 20 }}>Hover or tap on the time periods below to learn more.</p>
          </div>
        )}
      </div>
    </div>
  )
}
