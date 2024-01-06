import LogoTitle from '../../assets/images/logo-s.png';
import { Link } from 'react-router-dom';
import './index.scss'
import { useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect } from 'react';
import Logo from './Logo';
import Loader from 'react-loaders';




const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['R', 'e', 'b', 'a', 'a',]
  const jobArray = [
    'A',
    'y',
    'm',
    'e',
    'n',
    '',
    'A',
    'b',
    'o',
    'u',
    'b',
    'a',
    'k',
    'e',
    'r',
    ]
    useEffect(() => {
        const timeoutId = setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 4000);
      
        // Cleanup function to clear the timeout if the component unmounts
        return () => clearTimeout(timeoutId);
      
      }, []); // Empty dependency array means this effect runs once on mount
      
   
    
return(
    <>
    <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img
              src={LogoTitle}
              alt="JavaScript Developer Name, Web Developer Name"
            />
            
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={0}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={0}
            />
          </h1>
          <h2>Front End Developer / JavaScript Expert / Youtuber</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        
        
      </div> <Loader type='ball-rotate'/>
      </>
    
    


)


}

export default Home;