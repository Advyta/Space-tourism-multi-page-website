import React, { useState } from 'react' 
import './Destination.css';
import moonImg from '../../assets/destination/image-moon.png';
import marsImg from '../../assets/destination/image-mars.png';
import titanImg from '../../assets/destination/image-titan.png';
import europaImg from '../../assets/destination/image-europa.png';

export default function Destination({data}) {
  // console.log(data);
  const [selectDestination, setSelectDestination] = useState(data[0]);
  const { name, description, distance, travel } = selectDestination;
  const [image, setImage] = useState();
  const [isActive, setIsActive] = useState(0);
  const defaultImage = moonImg; 
  const selectedImage = image || defaultImage;

  const handleClick = (event, index) => {
    event.preventDefault();
    setSelectDestination(data[index]);
    setIsActive(index);

    switch (index) {
      case 0:
        setImage(moonImg);
        break;

      case 1:
        setImage(marsImg);
        break;

      case 2:
        setImage(europaImg);
        break;

      case 3:
        setImage(titanImg);
        break;

      default:
        setImage(defaultImage);
        break;
    }
  }

  return (
    <main className='container destination-container pt-5'>
      <div className="row align-items-end justify-content-center">
        <div className="col-lg-6 d-grid image-heading">
          <h5 className='page-heading uppercase'><span className='page-num'>01</span>Pick your destination</h5>
          <img src={selectedImage} alt="destination" className='destination-image'/>
        </div>
        <div className="col-lg-6 destination-info">
          <div>
            <ul className="d-flex planetList">
              {data.map((planet, index) => {
                return(
                  <li className='underline-indicators-d' key={planet.name}>
                    <button className='planets uppercase' aria-pressed = {index === isActive ? "true" : "false"} onClick={(e) => handleClick(e, index)}>{planet.name}</button>
                  </li>
                )
              })}
            </ul>
          </div>
          <h1 className='planet-name uppercase'>{name}</h1>
          <p className='planet-discription'>{description}</p>
          <hr />
        <div className="row">
          <div className="col-sm-6 uppercase ">
            <h5 className='distance-title'>AVG. DISTANCE</h5>
            <h4 className='distance'>{distance}</h4>
          </div>
          <div className="col-sm-6 uppercase ">
            <h5 className='time-title'>Est. travel time</h5>
            <h4 className='time'>{travel}</h4>
          </div>
        </div>
        </div>
      </div>
    </main>
  )
}
