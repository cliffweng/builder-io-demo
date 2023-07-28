import { Builder } from '@builder.io/react'
import { useState } from 'react'

// A more complex component example. You can use any component
// in Builder, including those using third party libraries, state,
// API data, context, or whatever else.
// https://www.builder.io/c/docs/custom-components-intro
export default function Hero(props) {
  // Simple example showing components can be interactive,
  // not just simply presentational
  const [count, setCount] = useState(0)

  return (
    <div className="hero" onClick={() => setCount(count + 1)}>
      <HeroBackdropTop />
      <div className="hero-main">
        <div className="text-center">
          <h1 className="hero-title">
            {props.title}
          </h1>
          <p className="hero-subtitle">
            You have clicked me {count} times
          </p>
          <div className="hero-button-wrap">
            <a href={props.buttonLink} className="hero-button">
              {props.buttonText}
            </a>
          </div>
        </div>
      </div>
      <HeroBackdropBottom />
    </div>
  )
}

// Register this component for use in the visual editor
// https://www.builder.io/c/docs/custom-components-setup
Builder.registerComponent(Hero, {
  name: 'Hero',
  image: 'https://tabler-icons.io/static/tabler-icons/icons-png/section.png',
  inputs: [
    { name: 'title', type: 'string', defaultValue: 'I am a React component from that code on the left!' },
    { name: 'buttonText', type: 'string', defaultValue: 'Click me' },
    { name: 'buttonLink', type: 'string', defaultValue: 'https://builder.io' },
  ]
})

const HeroBackdropTop = () => (
  <div className="hero-bg-1" aria-hidden="true">
    <div 
      className="hero-bg-1-inner" 
      style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }} 
    />
  </div>
)

const HeroBackdropBottom = () => (
  <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
    <div 
      className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" 
      style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}>
    </div>
  </div>
)