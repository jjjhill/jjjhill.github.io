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
    let clr = colors[i % colors.length]

    let { r, g, b } = hexToRgb(clr)

    return (
      <div
        key={event.title}
        className="event"
        style={{
          left: leftPct + "%",
          right: rightPct + "%",
          borderColor: `rgb(${r},${g},${b})`,
          backgroundColor:
            hoveredIdx === i ? `rgba(${r},${g},${b},0.6)` : "transparent"
        }}
        color={clr}
        onMouseEnter={() => eventHover(i)}
      >
        {hoveredIdx === i && (
          <div className="arrow" />
        )}
      </div>
    )
  })

  let majorSegments = numYears
  let w = "500px"

  return (
    <div className="Timeline" style={{ width: w }} onMouseLeave={unHover}>
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
        (<div className="popup">
            <div className="line" style={{ backgroundColor: colors[hoveredIdx % colors.length] }} />
          <h1>{events[hoveredIdx].title}</h1>
          <p className="summary">{events[hoveredIdx].summary}</p>
          <p className="technologies">{events[hoveredIdx].technologies}</p>
        </div>
      )}
    </div>
  )
}
