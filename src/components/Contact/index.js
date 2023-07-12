import { useState,useEffect ,useRef } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import Loader from 'react-loaders'
import emailjs from '@emailjs/browser'
const Contact=()=>{ const[letterClass,setLetterClass]=useState('text-animate') 
const refForm  =useRef ()
useEffect(()=>{
    setTimeout(()=>{
    return   setLetterClass('text-animate-hover')},3000)},[])
const sendEmail=(e)=>{
    e.preventDefault()
emailjs 
.sendForm (
   'service_d0ynnwx',
   'template_jcnx57v',
   e.target, 
   '9CJ3zF5-GW9HlNWvg'
)
.then(
()=>{alert('Message sent')
window.location.reload(false)},
()=>{
    alert('failed to send')
}
    )

}

    return (<>
    <div className="container contact-page">
    <div className ="text-zone">
        <h1>
            <AnimatedLetters 
            letterClass={letterClass}
            strArray={['C','o','n','t','a','c','t',' ','m','e']}
            idx={15}/>
            

            
        </h1>
    <p> तू किसी रेल सी गुज़रती है
तू किसी रेल सी गुज़रती है
मैं किसी पुल सा थरथराता हूँ
तू भले रत्ती भर ना सुनती हो
मैं तेरा नाम बुदबुदाता हूँ
किसी लम्बे सफर की रातों में
तुझे अलाव सा जलाता हूँ
        </p>
        <div className='contact-form'>
            <form ref={refForm} onSubmit={sendEmail}>
                <ul>
                    <li className='half'>
                    <input placeholder="Name" type="text" name="name" required />
                    </li>
                    <li className='half'>
                    <input placeholder="Email" type="email" name="email" required />
                    </li>
                    <li>
                        <input placeholder='Subject' type="text" name='subject' required/>                   </li>
                        <li>
                            <textarea placeholder='Message' name='message' required></textarea>
                        </li>
                        <li>
                            <input type ="submit" className='flat-button'/>
                        </li>
                </ul>
            </form>
        </div>
    
        </div>
    </div>
    <Loader type="pacman"/>
    </>)
}
export default Contact