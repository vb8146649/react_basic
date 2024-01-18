import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import '../style.css';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)
const i = 0;


export default function Home() {
  const [state,setState]=useState('4000ms')
  const onMouseEnter=()=>{
    setState("500ms")
  }
  const onMouseLeave=()=>{
    setState("2000ms")
  }
  return (
    <div className="mybodyblob">
      <div id='blob' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} >
        <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="100%" id="blobSvg">
          <defs>
            <radialGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{ "stopColor": "rgba(239, 98, 159, 0)" }}></stop>
              <stop offset="100%" style={{ "stopColor": "rgba(238, 205, 163, 0.3)" }}></stop>
            </radialGradient>
          </defs>
          <path fill="url(#gradient)" >
            <animate attributeName="d" repeatCount="indefinite" keySplines="0.74 0.01 0.25 0.99; 0.74 0.01 0.25 0.99; 0.74 0.01 0.25 0.99; 0.74 0.01 0.25 0.99" dur={state} values="M426,349Q364,448,246,454.5Q128,461,72,355.5Q16,250,73,146.5Q130,43,249.5,43.5Q369,44,428.5,147Q488,250,426,349Z; M430.5,353.5Q369,457,248.5,459Q128,461,65,355.5Q2,250,69,151Q136,52,253,47.5Q370,43,431,146.5Q492,250,430.5,353.5Z; M424.5,352Q368,454,251,453Q134,452,67.5,351Q1,250,64.5,144.5Q128,39,248.5,41.5Q369,44,425,147Q481,250,424.5,352Z; M425.5,350Q365,450,247,454.5Q129,459,66.5,354.5Q4,250,69.5,151Q135,52,251.5,48.5Q368,45,427,147.5Q486,250,425.5,350Z; M426,349Q364,448,246,454.5Q128,461,72,355.5Q16,250,73,146.5Q130,43,249.5,43.5Q369,44,428.5,147Q488,250,426,349Z" ></animate>

          </path>
        </svg>
      </div>
    </div>
  )
}





{/* <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="24">Hello SVG!</text> */}
{/* <div>
  <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 400 400">
  <text y="50%" className="w" fontSize="20px">W</text>
  <text x="22%" y="50%" className="a">A</text>
  <text x="40%" y="50%" className="v">V</text>
  <text x="60%" y="50%" className="y">Y</text>
  </svg>
</div> */}
// useEffect(() => {
//   gsap.to("#blob", {
//     rotation: 900,
//     duration: 3,
//     // delay: 1,
//     // repeat:
//     scrollTrigger: {
//       trigger: '#blob',
//       scrub: true,
//       start: '11% 10%',
//       end: "20% top",
//       markers: true,
//     }
//   });
// }, [])