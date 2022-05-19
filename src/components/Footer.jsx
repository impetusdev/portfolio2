import './Footer.scss';

export default function Footer(props){
    return <div className='footer' id='footer'>
        <h3>Connect With Me</h3>
        
        <div className='links'>
            <a className='Nav' href='https://github.com/impetusdev'><img src="reachout/Github.svg" alt="github" target="_blank"/></a>
            <a className='Nav' href='https://www.linkedin.com/in/laurence-qi-a4944513b/'><img src="reachout/LinkedIn.svg" alt="LinkedIn" target="_blank"/></a>
            <a className='Nav' href='https://twitter.com/life_is_a_model'><img src="reachout/Twitter.svg" alt="Twitter"target="_blank"/></a>
        </div>
    </div>
}

