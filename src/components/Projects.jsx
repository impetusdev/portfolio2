import Project from './Project';
import './Section.scss';
import './Projects.scss';

export default function Projects(props){
    return <div className='projects'>
        <div className='container'>
            <h1 className='title'>Projects</h1>
            <Project title='Metaverse Fighting Champioship' imgSrc='projects/mfc.png' description='A dog walking application that serves as a marketplace for both walkers and dog owners to connect and track their locations. Capable of using both real time & mocking the walker’s location data.'></Project>
            <Project title='Unleashed' imgSrc='projects/unleashed.png' description =''></Project>
            <Project title='Rental-Assessor' imgSrc='' description ='An apartment valuation app that allows the user to calculate their weekly travel time and location safety.'></Project>
        </div>
    </div>
}