import SectionHeading from './SectionHeading'
import '../Styles/components/about.scss'
import Button from './Button'
function About() {
  return (
    <section id="about">
      <div className="container">
        <SectionHeading title={'About Me'} desc={'Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology'}/>
        <div className="holder">
          <div className="l-side" data-aos="fade-right">
            <h4>Get to know me!</h4>
            <p>
              I'm a <strong>Frontend Web Developer</strong> building the Front-end of Websites and Web Applications that leads to the 
              success of the overall product.  Check out some of my work in the <a href="#projects">Projects section</a>.
            </p>
            <p>
              I'm open to Job opportunities where I can contribute, learn and grow. If you 
              have a good opportunity that matches my skills and experience then don't hesitate to <a href="#contact">contact</a> me.
            </p>
            <Button title={'Contact'}/>
          </div>
          <div className="r-side" data-aos="fade-left">
            <h4>My Skills</h4>
            <div className="tags-holder">
              <span>html</span>
              <span>css</span>
              <span>js</span>
              <span>react</span>
              <span>bootstrap</span>
              <span>tailwind</span>
              <span>git</span>
              <span>github</span>
              <span>sass</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About