import React from 'react'
import '../styles/Footer.css'
import brandLogo from '../assets/icon.svg'
import appStore from '../assets/appStore.svg'
import { useNavigate } from 'react-router-dom'
function Footer() {
    const navigate = useNavigate();
  return (
    <div className='footer'>
        <div className='footer-left' onClick={() => navigate('/')}>
            <div className='footer-brand'>
                <img className='navbar-icon-brand'src={brandLogo} alt="brand" />
                <h1 className='navbar-brand-Name'>EatMania</h1>
            </div>
            <div className='footer-app'>
                <img className='footer-appStore'src={appStore} alt="appStore" />
                <p className='footer-appStore-text'>Company # 490039-445, Registered withHouse of companies</p>                                
            </div>
            
        </div>
        <div className='footer-middle'>
            <h4>Get Exclusive Deals in your Inbox</h4>
            <div className="footer-subscribe">
                <input
                    type="text"
                    placeholder="Enter your Email..."
                    className="subscribe-input"
                />
                <button className="subscribe-button">Subscribe</button>
            </div>  
            <p>we wont spam, read our <span className="underline-text">email policy</span></p>      
            

        </div>
        <div className='footer-right'>
            <div className='footer-right-left'>
                <h3>Legal Pages</h3>
                <p onClick={()=>{navigate('/termsandconditions')}} >Terms and Condition</p>
                <p onClick={()=>{navigate('/privacypolicy')}}>Privacy</p>
                <p onClick={()=>{navigate('/cookiespolicy')}}>Cookies</p>
            </div>
            <div className='footer-right-right'>
                <h3>Important Links</h3>
                <p onClick={()=>{navigate('gethelp')}}>Get Help</p>
                <p onClick={()=>{navigate('privacypolicy')}}>Add Your Restaurant</p>
                <p onClick={()=>{navigate('signuptodeliver')}}>Sign Up to deliver</p>
            </div>

        </div>
    </div>
  )
}

export default Footer
