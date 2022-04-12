import { useEffect, useState } from 'react';
import './Nav.scss';

export default function Banner(props) {
    // whenever the user scrolls evaluate if the window Y position > nav bar position, if so change the nav to sticky. 
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);


    //TODO: attach a scrolling funciton to each of these links
    const scroll = (target) => {
        let element = document.getElementById(target);
        element && element.scrollIntoView({ behavior: "smooth", block: "start"});
    }
    

    
    //TODO: make these links the ones for the actual sections. 
    return <div>
        <ul className={offset > window.innerHeight ? 'sticky' : ''}>
            <li onClick={scroll('aboutMe')} className='navLink'>About Me</li>
            <li onClick={scroll('skills')} className='navLink'>Skills</li>
            <li  onClick={scroll('skills')} className='navLink'>Projects</li>
        </ul>
        <ul className={offset > window.innerHeight ? 'empty' : ''}><li></li></ul>
    </div>
}
