import './Section.scss';
// import { ReactComponent as YourSvg } from 'public/skills/c-sharp.svg';
// import { ReactComponent as IconMenu } from '/c-sharp.svg'

export default function Section(props){
    function importAll(r) {
        return r.keys().map(r);
    }

    const databaseIcons = importAll(require.context('../icons/database', false, /\.(svg)$/)).map(image => {
        console.log(image);
        return {
            address: image,
            name: ''
        }
    })

    console.log('databaseIcons', databaseIcons);
    const frameworkIcons = importAll(require.context('../icons/framework', false, /\.(svg)$/)).map(image => {
        return {
            address: image,
            name: ''
        }
    })
    const languageIcons = importAll(require.context('../icons/language', false, /\.(svg)$/)).map(image => {
        return {
            address: image,
            name: ''
        }
    })
    
    return <div className='section'>
        <div className='container'>
            <h1 className='title'>Skills</h1>
            <h3>Languages</h3>
            <div className='skill'>
                {
                    languageIcons?.map(image => {
                        return <img src={image.address} alt="" />
                    })
                }
            </div>
            <h3>Frameworks</h3>
            <div className='skill'>
                {
                    frameworkIcons?.map(image => {
                        return <img src={image.address} alt="" />
                    })
                }
            </div>
            <h3>Databases</h3>
            <div className='skill'>
                {
                    databaseIcons?.map(image => {
                        return <img src={image.address} alt="" />
                    })
                }
            </div>
        </div>
    </div>
}