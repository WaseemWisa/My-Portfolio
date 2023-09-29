import SectionHeading from './SectionHeading'
import '../Styles/components/projects.scss'
import img from '../assets/img-1.jpg'
import Button from './Button';
import Data from '../Data/ProjectsData';
import { useState } from 'react';
function Projects() {
  const [data, setData] = useState(Data);
  return (
    <section id="projects">
      <div className="container">
        <SectionHeading title={'Projects'} desc={'Here you will find some of the personal and clients projects that I created with each project containing its own case study'}/>
        <div className="holder">
          {
            data.map((item , i) => {
              return  <div className="card" key={i}>
              <img src={item.img} data-aos="fade-right"/>
              <div className="info" data-aos="fade-left">
                <h5>{item.title}</h5>
                <p>
                {item.desc}
                </p>
                <span className='tecks'>Build With:</span>
                <ul>
                  {
                    item.tecks.map((item , i) => {
                      return <li key={i}>{item}</li>
                    })
                  }
                </ul>
                <a href={item.url} target='_blank'><Button title={'Live Demo'}/></a>
              </div>
            </div>
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Projects;