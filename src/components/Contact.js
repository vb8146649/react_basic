// import './pngwing.png';
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import MotionPathPlugin from 'gsap/MotionPathPlugin';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { Draggable } from 'gsap/Draggable';
// // import { InertiaPlugin } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);
// gsap.registerPlugin(Draggable);// InertiaPlugin);
const Contact = () => {
//   const pathRef = useRef(null);
//   const [hower, setHower] = useState(false);
//   const [play,setPlay]=useState(false)

//   // Draggable.create(".flair--1", {
//   //   type: "x",
//   //   bounds: ".container"
//   // });

//   // Draggable.create(".flair--3", {
//   //   type: "rotation",
//   //   inertia: true
//   // });

//   useEffect(() => {
//     // GSAP animation
//     Draggable.create("#box", {
//       bounds: "#lost",
//       // inertia: true
//     })
//     const tl= gsap.timeline({
//        repeat: 1,// yoyo: true , 
//        duration: 5,
//       });
      
//       tl.to('#box',{
//         ease: "none",
//         motionPath: {
//           path: '#path',
//           align: '#path',
//           alignOrigin: [0.5, 0.5],
//           autoRotate: true
//         },
//         // scrollTrigger: {
//         //   trigger: '#lost',
          
//         //   // scrub: 0,
//         //   // pin:true,
//         //   start: 'top 5%',
//         //   end: "10% top",
//         //   markers: true,
//         //   //  toggle : "play pause resume pause"
          
//         //  }

//      })
//     //  tl.play();
//     //  if(play){
//     //   tl.play()
//     //  }
//      if(hower){
//       tl.play();
//       console.log("play");
//      }else{
//       tl.pause();
//       console.log("pause");
//      }
     
//     }, [hower]);
//     const handleMouseEnter = () => {
//       setHower(true);
//       setPlay(true);
//       console.log(true);
//       // tl.play();
//     };

//     // Mouse leave event
//     const handleMouseLeave = () => {
//       setHower(false);
//       console.log(false)
//     };
useEffect(()=>{

  const timeline=gsap.timeline({
        scrollTrigger: {
          trigger: "#svg",
          scrub: true,
          // pin:"#svg",
          start: "top top",
          end: "bottom bottom",
          markers:true
      }
    })
    .to("#box", {motionPath:{
      path:"#path",
      align:"#path",
      alignOrigin:[0.5, 0.5],
      autoRotate:true,
    }, duration:10}, 0)
    .from("#path", {drawSVG:0, duration:4}, 0)

},[])
  return (
    <div id='lost' //style={{ height: "200vh" }}
    style={{background:"radial-gradient(circle at top center ,rgba(237, 252, 108, 0.9) 0%,rgb(15, 212, 238) 80% )"}}
    >
      <div id="box"  
      style={{ width: "200px", height: "200px" ,
       overflow:'hidden'}}//, borderRadius: '30%', backgroundColor: "#ffffff" }}
      >
        <img src={require("./pngwing.com+(1).png")} alt='paper plane' style={{objectFit:"contain",width:"100%",height:"100%"}}/>
      </div>
      <div>

      <svg viewBox='0 0 200 200' id='svg'>
        <path id="path" d="M 0 0 C 32 0 92 8 92 32 C 92 64 68 80 48 80 C 36 80 68 48 80 80 C 88 104 8 104 12 144 C 16 176 40 176 64 176" fill="none" stroke="black"/>
      </svg>
      </div>
    </div>

  );
};

export default Contact;