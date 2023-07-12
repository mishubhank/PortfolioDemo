import './index.scss'
import{useState,useEffect}from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { faAngular, faCss3, faGitAlt, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const About=()=>{ 
    const[letterClass,setLetterClass]=useState('text-animate') 
    useEffect(()=>{
        setTimeout(()=>{
        return   setLetterClass('text-animate-hover')},4000)},[])
    return (<div className='container about-page'>
        <div className='text-zone'>
            <h1>
                <AnimatedLetters 
             letterClass=  { letterClass}
                  strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']} 
                  idx={15}/>
            </h1>
            <p>You are not your job, you're not how much money you have in the bank. You are not the car you drive. You're not the contents of your wallet. You are not your fucking khakis. You are all singing, all dancing crap of the world.” </p>
            <p>There are no two words in the English language more harmful than "good job".</p>
            <p>Searching for meaning
But are we all lost stars
Trying to light up the dark?
Who are we?
Just a speck of dust within the galaxy</p>
        </div> 
        <div className ='stage-cube-cont'>
            <div className ='cubespinner'>
                <div className='face1'>
                    <FontAwesomeIcon icon={faAngular} color="#DD0031"/>
                </div>
                <div className='face2'>
                    <FontAwesomeIcon icon={faReact} color="#DD0031"/>
                </div>
                <div className='face3'>
                    <FontAwesomeIcon icon={faJsSquare} color="#DD0031"/>
                </div>
                <div className='face4'>
                    <FontAwesomeIcon icon={faGitAlt} color="#DD0031"/>
                </div>
                <div className='face5'>
                    <FontAwesomeIcon icon={faCss3} color="#DD0031"/>
                </div>
                <div className='face'>
                    <FontAwesomeIcon icon={faGitAlt} color="#DD0031"/>
                </div>
            </div>
        </div>
        <Loader type='pacman'/>
    </div>
)
}
export default About 