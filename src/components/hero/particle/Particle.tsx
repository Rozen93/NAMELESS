"use client";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Particle = () => {
  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async () => { }, []);
  return (
    <Particles
      className="h-full w-full absolute"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: { enable: false },
        interactivity: {
          detect_on: "canvas",
          events: {
            onHover: {
              enable: true,
              mode: "grab",
            },
            onClick: {
              enable: true,
              mode: "push"
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 312,
              line_linked: {
                opacity: 0.38
              }
            },
            bubbles: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
            push: {
              particles_nb: 4
            },
            remove: {
              particles_nb: 2
            }
          },
        },

        particles: {
          color: {
            value: "#FFFFFF",
          },
          line_linked: {
            color: "#FFFFFF",
            distance: 150,
            enable: true,
            opacity: 0.3,
            width: 1,
          },

          size: {
            value: 7,
            random: true,
            anim: {
              enable: false,
              speed: 40,
              size_min: 1,
              sync: false
            }
          },
          move: {
            enable: true,
            direction: "none",
            outModes: "bounce",
            bounce: false,
            random: true,
            straight: false,
            speed: 2,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200
            }
          },
          number: {
            value: 90,
            density: {
              enable: true,
              value_area: 1400,
            }
          },
          opacity: {
            value: 0.28,
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#000000"
            },
            polygon: {
              nb_sides: 5
            },
            image: {
              src: "img/github.svg",
              width: 100,
              height: 100
            }
          }


        },
        detectRetina: true,
      }}
    />
  );
};

export default Particle;
