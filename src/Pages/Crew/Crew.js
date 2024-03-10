import Carousel from 'react-bootstrap/Carousel';
import './Crew.css';
import DouglasImg from '../../assets/crew/image-douglas-hurley.png';
import MarkImg from '../../assets/crew/image-mark-shuttleworth.png';
import VictorImg from '../../assets/crew/image-victor-glover.png';
import AnoushehImg from '../../assets/crew/image-anousheh-ansari.png';
import { useState } from 'react';

export default function Crew({data}) {
  const [activeIndex, setActiveIndex] = useState(0);

  const crewImg = (index) => {
    switch (index) {
      case 0:
      return DouglasImg;
    case 1:
      return MarkImg;
    case 2:
      return VictorImg;
    case 3:
      return AnoushehImg;
    default:
      return DouglasImg;
    }
  }
  const handleSelect = (selectedIndex, e) => {
    setActiveIndex(selectedIndex);
  };

  return (
    <main className='crew-container container'>
      <Carousel interval={3000} activeIndex={activeIndex} onSelect={handleSelect}>
        {data.map((crewMember, index) => {
          return(
            <Carousel.Item key={crewMember.name}>
              <div className="row crew-info-container align-items-end">
                <div className="col-lg-6 crew-info">
                  <div className='d-grid'>
                    <p className='page-heading crew-heading-1 uppercase'><span className='page-num'>02</span>Meet your crew</p>
                    <h2 className='crew-role uppercase'>{crewMember.role}</h2>
                    <h1 className='crew-name uppercase'>{crewMember.name}</h1>
                    <p className='crew-bio'>{crewMember.bio}</p>
                  </div>
                  {/* Custom carousel-indicators */}
                  <div className='dot-indicators-section'>
                    <div className="carousel-indicators-custom dot-indicators d-flex">
                      {data.map((_, i) => (
                        // console.log(i, _),
                        <button key={i} aria-pressed = {i === activeIndex ? "true" : "false"} onClick={() => setActiveIndex(i)}></button>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 crew-img-container"> 
                <p className='page-heading crew-heading-2 uppercase'><span className='page-num'>02</span>Meet your crew</p>
                  <img src={crewImg(index)} alt={crewMember.name} className='img-fluid crew-img'/>
                  <hr className='crew-img-hr'/>
                </div>
              </div>
            </Carousel.Item>
          )
        })}
      </Carousel>
    </main>
  )
}
