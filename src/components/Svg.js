import React from 'react';

// Not important never used
export default function Svg() {
  return (
      <div id='blob' >
        <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="100%" id="blobSvg">
          <defs>
            <radialGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{ "stopColor": "rgba(239, 98, 159, 0)" }}></stop>
              <stop offset="100%" style={{ "stopColor": "rgba(238, 205, 163, 0.3)" }}></stop>
            </radialGradient>
          </defs>
          <path fill="url(#gradient)" >
            <animate attributeName="d" repeatCount="indefinite" dur="4000ms" values="M411.5,341.5Q396,433,302.5,432.5Q209,432,125,391.5Q41,351,42,250.5Q43,150,122.5,94Q202,38,298.5,53.5Q395,69,411,159.5Q427,250,411.5,341.5Z; M401,345Q402,440,302.5,447Q203,454,122,402.5Q41,351,75.5,266.5Q110,182,152.5,95.5Q195,9,288,47.5Q381,86,390.5,168Q400,250,401,345Z; M389,325.5Q371,401,289,418.5Q207,436,148,381.5Q89,327,70,240.5Q51,154,124,87Q197,20,300.5,38.5Q404,57,405.5,153.5Q407,250,389,325.5Z; M411.5,341.5Q396,433,302.5,432.5Q209,432,125,391.5Q41,351,42,250.5Q43,150,122.5,94Q202,38,298.5,53.5Q395,69,411,159.5Q427,250,411.5,341.5Z" ></animate>

          </path>
        </svg>
      </div>
  )
}