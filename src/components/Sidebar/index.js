import './index.scss'
import{Link,NavLink}from 'react-router-dom'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope,faHome,faUser}from '@fortawesome/free-solid-svg-icons'
import {
    faLinkedin,
    faGithub,
    faYoutube,
    faSkype,faFreeCodeCamp,faSpotify
    
  } from '@fortawesome/free-brands-svg-icons'

const Sidebar=()=>(
    <div className='nav-bar'>
        <Link className='logo'to ='/'> 
    <img src={LogoS} alt="logo"/>
    <img className="sub-logo" src={LogoSubtitle} alt="slobodan"/>
    </Link>
    <nav>
        <NavLink exact="true" activeclassname="active" to="/">
            <FontAwesomeIcon icon ={faHome}color="#4d4d4e"/>
        </NavLink>
        <NavLink 
          activeclassname="active"
          className ="about-link"
           to="/about">
            <FontAwesomeIcon icon ={faUser}color="#4d4d4e"/>
        </NavLink>
        <NavLink activeclassname="active" className ="contact-link " to="/contact">
            <FontAwesomeIcon icon ={faEnvelope   }color="#4d4d4e"/>
        </NavLink>
        
    </nav>
    <ul>
        <li>
            <a  target ="_blank" rel="noreferrer"
            href="http://linkedin.com/in/
            shubhank-mishra/
            
            ">
                <FontAwesomeIcon icon ={faLinkedin} color="#4d4d43" />
            </a>
        </li>
        <li>
            <a  target ="_blank" rel="noreferrer"
            href="https://github.com/s-101
            
            ">
                <FontAwesomeIcon icon ={faGithub} color="#4d4d43" />
            </a>
        </li>
        <li>
            <a  target ="_blank" rel="noreferrer"
            href="https://leetcode.com/supermoonpie/
            
            ">
                <FontAwesomeIcon icon ={faFreeCodeCamp} color="#4d4d43" />
            </a>
        </li>

        <li>
            <a  target ="_blank" rel="noreferrer"
            href="https://open.spotify.com/user/tbrh7mvgcec251pcdryu1vqgt?si=6e9e6cc3a67b44a9
            
            ">
                <FontAwesomeIcon icon ={faSpotify} color="#4d4d43" />
            </a>
        </li>



    </ul>
    </div>
)
export default Sidebar 