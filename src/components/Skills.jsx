import './Skills.scss';

function parseFileName(inputFileLoc) {
    const result = inputFileLoc.match(new RegExp(/(?<=\/)(.*?)(?=\.svg)/));
 
    return result[1];
}


export default function Skills(props){
    function importAll(r) {
        return r.keys().map( address => {
            console.log(`address:`, address)
            // console.log(`The file name after parsing is: ${parseFileName(address)}`)
            return {
                address,
                name: parseFileName(address),
            }
        });
    }

    const databaseIcons = importAll(require.context('../icons/database', false, /\.(svg)$/))
    const frameworkIcons = importAll(require.context('../icons/framework', false, /\.(svg)$/))
    const languageIcons = importAll(require.context('../icons/language', false, /\.(svg)$/))
    const learningIcons = importAll(require.context('../icons/learning', false, /\.(svg)$/))
    
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
            <h3>Learnings</h3>
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