import Project from './Project';
import './Skills.scss';
import './Projects.scss';

export default function Projects(props){
    return <div className='section' id='projects'>
        <div className='container'>
            <h1 className='title'>Projects</h1>
            <Project title='Metaverse Fighting Champioship' imgSrc='projects/mfc.png' demo='https://metaverse-fc.netlify.app/' repo='https://github.com/thelorddoyle/mfc-front-end' description='A full stack NFT fighting group project, that allows users to mint unique fighters that participate in tournaments to win prizes. '></Project>
            <Project title='Unleashed' imgSrc='projects/unleashed.png' demo='https://unleashed-client.netlify.app/' repo='https://github.com/Jesus-fhz/unleashed-client' description ='A dog walking application that serves as a marketplace for both walkers and dog owners to connect and track their locations. Capable of using both real time & mocking the walker’s location data. '></Project>
            {/* <Project title='Rental-Assessor' imgSrc='' description ='An apartment valuation app that allows the user to calculate their weekly travel time and location safety.'></Project> */}
        </div>
    </div>
}