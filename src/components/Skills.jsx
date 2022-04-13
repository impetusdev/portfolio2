import './Skills.scss';

function parseFileName(inputFileLoc) {
    const result = inputFileLoc.match(new RegExp(/(?<=\/static\/media\/)(.*?)(?=\.)/));
 
    return result[1];
}


export default function Skills(props){

    function importAll(r) {
        return r.keys().map(r);
    }

    const databaseIcons = importAll(require.context('../icons/Databases', false, /\.(svg)$/)).map(image => {
        return {
            address: image,
            name: parseFileName(image)
        }
        
    })

    console.log('databaseIcons:', databaseIcons);

    const frameworkIcons = importAll(require.context('../icons/Frameworks', false, /\.(svg)$/)).map(image => {
        return {
            address: image,
            name: parseFileName(image)
        }
    })
    const languageIcons = importAll(require.context('../icons/Languages', false, /\.(svg)$/)).map(image => {
        return {
            address: image,
            name: parseFileName(image)
        }
    })
    const learningIcons = importAll(require.context('../icons/Learning', false, /\.(svg)$/)).map(image => {
        return {
            address: image,
            name: parseFileName(image)
        }
    })
    
    return <div className='section' id='skills'>
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
            <h3>Learning</h3>
            <div className='skill'>
                {
                    learningIcons?.map(image => {
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