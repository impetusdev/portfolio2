import './Banner.scss';

export default function Banner(props) {
    return <div className='Banner'>
        <img id='profile' src='profile.png' alt='photo of Laurence Qi'/>
        <h1 id='name'>Laurence Qi</h1>
        <h2 id='sub-heading'>Junior Back-end Developer</h2>
    </div>
}