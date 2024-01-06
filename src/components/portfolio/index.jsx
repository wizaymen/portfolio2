import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';


const Portfolio =()=>{
    const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  
    // Cleanup function to clear the timeout if the component unmounts
    return () => clearTimeout(timeoutId);
  
  }, []); 
    return(
        <>
        <div className='container about-page'>
        <div className="text-zone">
        <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['M', 'y', 'P', 'r', 'o', ' j', 'e', 'c','t','s']}
              idx={15}
            />
          </h1>
        </div>
        </div>
        
        <div className="four-sections">
      {/* Section 1 */}
      <div className="section">
        <h1>Maze Mouse</h1>
        <p>The theme of this lab is that we'll be writing a page with a simple "maze" that the user
must navigate with the mouse.
<a href="/" ><FontAwesomeIcon icon={faGithub}/></a></p>
      </div>

      {/* Section 2 */}
      <div className="section">
        <h1>Task List</h1>
        <p>The aim of this lab is to create a Tasklist application that allows users to view, add, modify,
and delete tasks.<a href="/" ><FontAwesomeIcon icon={faGithub}/></a></p>
      </div>

      {/* Section 3 */}
      <div className="section">
        <h1>Tic-tac game</h1>
        <p>Deux joueurs posent tour à tour un rond, pour l'un, une croix, pour l'autre, dans une grille de 3 cases par 3. Le but du jeu est d'obtenir un alignement (en ligne, colonne ou diagonale) de ses trois signes.<a href="/" ><FontAwesomeIcon icon={faGithub}/></a></p>
      </div>

     
    </div>
    <Loader type="ball-rotate"/>
    
       
    
        
        </>
    )
}

export default Portfolio;