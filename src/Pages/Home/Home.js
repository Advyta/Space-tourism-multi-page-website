import './Home.css';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main className='home-container'>
      <div className="row align-items-end">
        <div className="col-lg-7">
          <div className='text-content'>
            <h1 className="text-accent-custom fs-500 ff-sans-cond uppercase letter-spacing-1 heading-text">So, you want to travel to
              <span className="fs-900 ff-serif text-white-custom d-block space">Space</span>
            </h1>
            <p className='ff-sans-normal text-accent-custom fs-400'>
              Let’s face it; if you want to go to space, you might as well genuinely go to 
              outer space and not hover kind of on the edge of it. Well sit back, and relax 
              because we’ll give you a truly out of this world experience! 
            </p>
          </div>
        </div>
        <div className="col-lg-5 d-grid">
          <div className='col-md-6 offset-lg-6 d-grid explore'>
            <Link to = '/Destination' className='large-button uppercase ff-serif fs-600 text-dark bg-white explore'>Explore</Link>
          </div>
          
        </div>
      </div>
    </main>
  )
}
