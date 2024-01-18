import React, { useEffect, useRef } from 'react';
import Matter from 'matter-js';

const FluidSimulation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const Engine = Matter.Engine;
    const Render = Matter.Render;
    const World = Matter.World;
    const Bodies = Matter.Bodies;

    const engine = Engine.create();
    const render = Render.create({
      canvas: canvasRef.current,
      engine: engine,
    });

    const fluidParticles = [];
    const fluidDensity = 0.0005;

    for (let i = 0; i < 500; i++) {
      fluidParticles.push(Bodies.circle(Math.random() * 800, Math.random() * 600, 5));
    }

    World.add(engine.world, [
      Bodies.rectangle(400, 0, 800, 50, { isStatic: true }),
      Bodies.rectangle(400, 600, 800, 50, { isStatic: true }),
      Bodies.rectangle(800, 300, 50, 600, { isStatic: true }),
      Bodies.rectangle(0, 300, 50, 600, { isStatic: true }),
      ...fluidParticles,
    ]);

    Engine.run(engine);
    Render.run(render);

    return () => {
      Matter.Render.stop(render);
      Matter.Engine.clear(engine);
    };
  }, []);

  return <canvas ref={canvasRef} width={800} height={600} />;
};

const App = () => {
  return (
    <div className="App">
      <FluidSimulation />
    </div>
  );
};

export default App;
