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
            <li><a href='https://www.linkedin.com/in/laurence-qi-a4944513b/'>LinkedIn</a></li>
            <li><a href='https://github.com/impetusdev'>GitHub</a></li>
            <li><a href='https://twitter.com/life_is_a_model'>Twitter</a></li>
        </ul>
        <ul className={offset > window.innerHeight ? 'empty' : ''}><li></li></ul>
    </div>
}
