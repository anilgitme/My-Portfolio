import React from 'react';

const About = () => {
    return(
        <div className='about'>
            <h2>Anil Ramcharran</h2>
            <img className='profile-image' src={require('../images/me.jpg')} alt='Anil'/>
            <span></span>
            <p className='about-text'>I'm a self taught, newly graduated full stack web developer looking
                for my next opportunity to collab with a team. My understanding of 
                frameworks like React, Redux, advanced css, Javascript,
                and back-end frameworks like Node.js will be beneficial working with
                any team.</p>
        </div>
    )
}

export default About;