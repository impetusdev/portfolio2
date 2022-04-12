import { useEffect, useState } from 'react';
import './Nav.scss';

export default function Banner(props) {
    const [offset, setOffset] = useState(0);
    
    // whenever the user scrolls evaluate if the window Y position > nav bar position, if so change the nav to sticky. 
    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);
    
    return <div>
        <ul className={offset > window.innerHeight ? 'sticky' : ''}>
            <a href='#aboutMe' className='navLink'>About Me</a>
            <a href='#skills' className='navLink'>Skills</a>
            <a href='#projects' className='navLink'>Projects</a>
            <a href='#footer' className='navLink' id='contactMe'>Contact Me</a>
        </ul>
        <ul className={offset > window.innerHeight ? 'empty' : ''}><li></li></ul>
    </div>
}
