import { useState } from 'react'
import './Technology.css';
import launchVehicleP from '../../assets/technology/image-launch-vehicle-portrait.jpg';
import launchVehicleL from '../../assets/technology/image-launch-vehicle-landscape.jpg';
import spaceportP from '../../assets/technology/image-spaceport-portrait.jpg';
import spaceportL from '../../assets/technology/image-spaceport-landscape.jpg';
import spaceCapsuleP from '../../assets/technology/image-space-capsule-portrait.jpg';
import spaceCapsuleL from '../../assets/technology/image-space-capsule-landscape.jpg';

export default function Technology({data}) {

  const [selectTransport, setSelectTransport] = useState([data[0].name, data[0].description]);
  const [name, description] = selectTransport;
  const [isActive, setIsActive] = useState(0);
  const [vehicleImg, setVehicleImg] = useState([launchVehicleL, launchVehicleP]);

  const handleClick = (event, index) => {
    event.preventDefault();
    setIsActive(index);
    setSelectTransport([data[index].name, data[index].description]);

    switch (index) {
      case 0:
        setVehicleImg([launchVehicleL, launchVehicleP]);
        break;
      case 1:
        setVehicleImg([spaceportL, spaceportP]);
        break;
      case 2:
        setVehicleImg([spaceCapsuleL, spaceCapsuleP]);
        break;
    
      default:
        setVehicleImg([launchVehicleL, launchVehicleP]);
        break;
    }
  }

  return (
    <main className='container tech-container'>
      <div className="row mt-5 heading-container">
        <p className='page-heading uppercase heading-content'><span className='page-num'>03</span>SPACE LAUNCH 101</p>
      </div>
      <div className="row travel-container">
        <div className="col-lg-6 tech-info"> 
          <div className="col-2 num-indicators-container" >
            <div className='num-indicators'>
              {data.map((tech, index) => {
                console.log(tech);
                return(
                  <button aria-pressed = {index === isActive ? "true" : "false"} onClick={(e) => handleClick(e, index)} key={index}>{index +1}</button>
                )
              })}   
            </div>
          </div> 
          <div className="col-10 tech-content">
            <h3>THE TERMINOLOGY…</h3>
            <h1 className='uppercase'>{name}</h1>
            <p>{description}</p>
          </div>
        </div>
        <div className="col-lg-6 tech-pic">
          <picture>
            <source srcSet={vehicleImg[0]} media="(max-width: 996px)"/>
            <img src={vehicleImg[1]} alt={name}  />
          </picture>
        </div>
      </div>
    </main>
  )
}
