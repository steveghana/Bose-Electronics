import React from 'react'
import {Circle, Square, Traingle} from '../Widgets/Icons'
function Banner() {
  return (
    <section className="banner__container">
    <div className="banner__text-container">
      Are you still. <br />
      wearing <br />
      <div >headphones?</div>
    </div>
    <div className="banner__triangle">
  <Traingle/>
  <Square/>
  <Circle/>
    </div>
    <div className="banner__wrapper"></div>
  </section>
  )
}

export default Banner