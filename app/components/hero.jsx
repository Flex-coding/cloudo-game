import React from 'react'
import GameSlider from './gameSlider'
import FadeInSlider from './heroSlider'

function Hero() {
  return (
    <div className='flex-col w-full h-dvh'>

      <div className='relative flex max-h-[300px] container-layer overflow-hidden bg-[#021726]'>
        <div className='hero-title w-full object-cover'>
          <p className='featured-games-text font-bold z-11 text-[#2A54A9] shadow-2xs'>Featured</p>
          <h1 className='hero-backwall text-6xl pl-40'>YOUR <span>GAME</span><br/> FOUND ITS<br/> PLACE<br/> <span>HERE</span>!</h1>
        </div>

        <div className='relative w-full flex hero-game-slider featured-games-layer object-cover'>
          <FadeInSlider />
        </div>
      </div>

      <div>
        <GameSlider />
      </div>
    </div>
  )
}

export default Hero
