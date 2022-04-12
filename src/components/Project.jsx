import './Project.scss';


export default function Project({title, imgSrc, description, demo, repo}){
      
    return <div className='project'>
        <h3>{title}</h3>
        <img  src={imgSrc} alt="yo" />
        <section>{description}</section>
        <div className='links'>
            <a href={demo}>DEMO</a>
            <a href={repo}>REPO</a>
        </div>
    </div>
}