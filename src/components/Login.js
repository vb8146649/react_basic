import React from 'react';
import { useCallback } from "react";
import Particles from "react-tsparticles";
import blobSvg from "./particleicon.svg";
// import Svg from './Svg';
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.

function Login() {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        //await loadFull(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        console.log(container);
    }, []);
    return (
        <div className='mybody'
        // style={{'background-color':"#000",'position':"absolute"
        // "radial-gradient(circle at top center ,rgba(0, 51, 61, 0.9) 0%,rgba(0 , 0, 0, 1) 80% )"
        // }}
        >
            <div>
                <h1>
                    OCEAN DEAPTH
                </h1>
            </div>
            <div className="container shadow-lg p-3 mb-5 bg-body-tertiary rounded" style={{ width: '350px', background: "radial-gradient(circle at center ,rgba(0, 51, 61, 0.9) 0%,rgba(0 , 0, 0, 1) 80% )"//, filter: 'blur(1px)', '-webkit-filter': 'blur(202px)' 
        }}>
                <div className="form-floating m-3 ">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label for="floatingInput">Email address</label>
                </div>
                <div className="form-floating m-3">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                    <label for="floatingPassword">Password</label>
                </div>
            </div>

            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={

                    {
                        fullScreen: {
                            enable: true,
                            zIndex: 0
                        },
                        // background: {
                        //     color: {
                        //         value: "#ffffff00",
                        //     },
                        // },
                        fpsLimit: 120,
                        interactivity: {
                            events: {
                                onClick: {
                                    enable: true,
                                    mode: "push",
                                },
                                onHover: {
                                    enable: true,
                                    mode: "repulse",
                                },
                                resize: true,
                            },
                            modes: {
                                push: {
                                    quantity: 4,
                                },
                                repulse: {
                                    distance: 100,
                                    duration: 0.4,
                                },
                            },
                        },
                        particles: {
                            color: {
                                value: "#ffffff",
                            },
                            links: {
                                color: "#ffffff",
                                distance: 150,
                                enable: false,
                                opacity: 0.5,
                                width: 1,
                            },
                            move: {
                                direction: "top",
                                enable: true,
                                outModes: {
                                    default: "out",
                                },
                                random: false,
                                speed: 6,
                                straight: false,
                            },
                            number: {
                                density: {
                                    enable: true,
                                    area: 800,
                                },
                                value: 200,
                            },
                            opacity: {
                                value: 0.5,
                            },
                            shape: {
                                type: "image",
                                image: {
                                    src: blobSvg
                                }
                            },
                            size: {
                                value: { min: 1, max: 5 },
                            },
                        },
                        detectRetina: true,
                    }
                }
            // style={{background:"radial-gradient(circle at top center ,rgba(0, 51, 61, 0.9) 0%,rgba(0 , 0, 0, 1) 80% )"}}

            />
        </div>
    );
}

export default Login;
