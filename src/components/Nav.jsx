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

    

    
    //TODO: make these links the ones for the actual sections. 
    return <div>
        <ul className={offset > window.innerHeight ? 'sticky' : ''}>
            <li><a className='navLink' href='https://www.linkedin.com/in/laurence-qi-a4944513b/'>About Me</a></li>
            <li><a className='navLink' href='https://github.com/impetusdev'>Skills</a></li>
            <li><a className='navLink' href='https://twitter.com/life_is_a_model'>Projects</a></li>
        </ul>
        <ul className={offset > window.innerHeight ? 'empty' : ''}><li></li></ul>
    </div>
}
