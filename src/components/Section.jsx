import './Section.scss';
// import { ReactComponent as YourSvg } from 'public/skills/c-sharp.svg';
// import { ReactComponent as IconMenu } from '/c-sharp.svg'

export default function Section(props){
    function importAll(r) {
        return r.keys().map(r);
    }
      
    const databaseIcons = importAll(require.context('../icons/database', false, /\.(png|jpe?g|svg)$/))
    const frameworkIcons = importAll(require.context('../icons/framework', false, /\.(png|jpe?g|svg)$/))
    const languageIcons = importAll(require.context('../icons/language', false, /\.(png|jpe?g|svg)$/))
    
    return <div className='section'>
        <div className='container'>
            <h1 className='title'>Skills</h1>
            <h3>Languages</h3>
            <div>
                {
                    languageIcons?.map(image => {
                        return <img className='skill' src={image} alt="" />
                    })
                }
            </div>
            <h3>Frameworks</h3>
            <div>
                {
                    frameworkIcons?.map(image => {
                        return <img className='skill' src={image} alt="" />
                    })
                }
            </div>
            <h3>Databases</h3>
            <div>
                {
                    databaseIcons?.map(image => {
                        return <img className='skill' src={image} alt="" />
                    })
                }
            </div>
        </div>
    </div>
}