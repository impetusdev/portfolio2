import './Footer.scss';

export default function Footer(props){
    return <div className='footer' id='projects'>
        <h3>Get In Touch</h3>
        
        <div className='links'>
            <a className='Nav' href='https://www.linkedin.com/in/laurence-qi-a4944513b/'><img src="reachout/Github.svg" alt="github" /></a>
            <a className='Nav' href='https://github.com/impetusdev'><img src="reachout/LinkedIn.svg" alt="LinkedIn" /></a>
            <a className='Nav' href='https://twitter.com/life_is_a_model'><img src="reachout/Twitter.svg" alt="Twitter" /></a>
        </div>
    </div>
}

