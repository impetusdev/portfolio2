import './Footer.scss';

export default function Footer(props){
    return <div className='footer' id='footer'>
        <h3>Connect With Me</h3>
        
        <div className='links'>
            <a className='Nav' href='https://github.com/impetusdev' target="_blank"><img src="reachout/Github.svg" alt="github" /></a>
            <a className='Nav' href='https://www.linkedin.com/in/laurence-qi-a4944513b/' target="_blank"><img src="reachout/LinkedIn.svg" alt="LinkedIn" /></a>
            <a className='Nav' href='https://twitter.com/life_is_a_model' target="_blank"><img src="reachout/Twitter.svg" alt="Twitter"/></a>
        </div>
    </div>
}

