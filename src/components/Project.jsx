import './Project.scss';


export default function Project({title, imgSrc, description}){
      
    return <div className='project'>
        <h3>{title}</h3>
        <img  src={imgSrc} alt="" />
        <section>{description}</section>
    </div>
}