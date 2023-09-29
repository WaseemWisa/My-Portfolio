import { Fragment , useEffect, useState} from "react";
import {  useTypewriter , Cursor} from "react-simple-typewriter";
import '../Styles/components/hero.scss'
import Button from './Button'
function Hero() {
  const [text] = useTypewriter({
    words: ['Waseem Wisa' , 'Front End Developer'],
    loop: {}
  })
  return (
    <section id='hero'>
      <div className="container">
        <div className="daynamic-text">
          <h1>HEY, I'M <span>{text}<Cursor cursorStyle=">"/></span> </h1>
          
        </div>
        <p>
          A Frontend focused Web Developer building 
          the Frontend of Websites and Web Applications 
          that leads to the success of the overall product
        </p>
        <a href="#projects"><Button title={'projects'}/></a>
      </div>
      <div className="socail-icons">
        <a href="https://www.facebook.com/profile.php?id=100078110840927"><i class="bi bi-facebook"></i></a>
        <a href="https://twitter.com/Waseem91701711"><i class="bi bi-twitter-x"></i></a>
        <a href="https://github.com/WaseemWisa"><i class="bi bi-github"></i></a>
      </div>
      <a href='#about' className='arrow-i'><i class="bi bi-chevron-double-down"></i></a>
    </section>
  )
}

export default Hero