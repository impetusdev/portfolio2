import './Section.scss';

function parseFileName(inputFileLoc) {
    const result = inputFileLoc.match(new RegExp(/(?<=\/static\/media\/)(.*?)(?=\.)/));
 
    return result[1];
}


export default function Section(props){
    function importAll(r) {
        return r.keys().map(r);
    }

    const databaseIcons = importAll(require.context('../icons/database', false, /\.(svg)$/)).map(image => {
        return {
            address: image,
            name: parseFileName(image)
        }
        
    })

    console.log('databaseIcons', databaseIcons);
    const frameworkIcons = importAll(require.context('../icons/framework', false, /\.(svg)$/)).map(image => {
        return {
            address: image,
            name: parseFileName(image)
        }
    })
    const languageIcons = importAll(require.context('../icons/language', false, /\.(svg)$/)).map(image => {
        return {
            address: image,
            name: parseFileName(image)
        }
    })
    
    return <div className='section'>
        <div className='container'>
            <h1 className='title'>Skills</h1>
            <h3>Languages</h3>
            <div className='skill'>
                {
                    languageIcons?.map(image => {
                        return <figure key={image.name}>
                            <img src={image.address} alt="asdfadsf" />
                            <figcaption>{image.name}</figcaption>
                        </figure>
                    })
                }
            </div>
            <h3>Frameworks</h3>
            <div className='skill'>
                {
                    frameworkIcons?.map(image => {
                        return <figure key={image.name}>
                            <img src={image.address} alt="asdfadsf" />
                            <figcaption>{image.name}</figcaption>
                        </figure>
                    })
                }
            </div>
            <h3>Databases</h3>
            <div className='skill'>
                {
                    databaseIcons?.map(image => {
                        return <figure key={image.name}>
                            <img src={image.address} alt="asdfadsf" />
                            <figcaption>{image.name}</figcaption>
                        </figure>
                    })
                }
            </div>
        </div>
    </div>
}