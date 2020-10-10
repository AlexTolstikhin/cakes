import React, { useEffect, useState } from 'react';
// Add aliases for reusableParts, assets and utils

import ImageCarousel from './reusableParts/carousel/imageCarousel';
import { allCakes } from '../assets/images/cakes';
import Table from './reusableParts/table/table';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPhoneSquare } from '@fortawesome/free-solid-svg-icons';

import { sendEmail } from '../utils/utils';

import ReactTooltip from 'react-tooltip';

// Add text here
// dummy text
import { text1, text2 } from './dummyData';


//TODO:
// define viewPort ??
// define isSmallScreen ===> actually everything that is less 1200


// Future development plans:
// consider to switch HomePage to class component ==>
//  - adding router
//  - payment (future)

// Nice to have:
// Probably will be nice to implement EN/RU versions

const styles = {
    buttonStyles: {
        alignSelf: 'center',
        cursor: 'pointer',
        fontFamily: `'Raleway', sans-serif`,
        fontSize: '18px',
        margin: '30px',
        width: '200px'
    },
    contentWrapperStyles: {
        display: 'flex',
        flexBasis: '50%',
        justifyContent: 'center',
        padding: '40px'
    },
    mainSection: isSmallScreen => ({
        fontFamily: `'Raleway', sans-serif`,
        margin: '0 auto',
        opacity: 0.8,
        width: isSmallScreen ? '100%' : '80%'
    }),
    sectionWrapperStyles: (flexFlow = "row") => ({
        display: 'flex', 
        flexFlow: flexFlow,
        justifyContent: 'center'
    }),
    subtitleStyles: {
        fontSize: '24px',
        padding: '30px',
        textAlign: 'center'
    },
    tableBodyStyles: {
        fontSize: '18px'
    },
    tableDataStyles: {
        height: '40px',
        textAlign: 'center'
    },
    tableHeadStyles: {
        fontSize: '30px',
        textAlign: 'center'
    },
    textareaStyles: {
        fontSize: '20px',
        minHeight: '200px',
        height: '100%'
    },
    textHolderStyles: {
        margin: '20px',
        background: 'lightblue',
        padding: '23px',
        width: '80%',
        borderRadius: '0 40px'
    },
    tableStyles: {
        alignSelf: 'center',
    },

    // font size handling styles
    // find VW should be a number
    smallerFonts: {
        fontSize: `calc(14px + 0.4vw)`
    },

    smallFonts: {
        fontSize: `calc(16px + 0.4vw)`
    },

    mediumFonts: {
        fontSize: `calc(20px + 0.4vw)`
    },

    largeFonts: {
        fontFamily: 'Pacifico',
        fontSize: `calc(60px + 0.4vw)`
    }
}


const HomePage = () => {
    const [windowWidth, setWindowSize] = useState(undefined);

    useEffect(() => {
        function handleResize() {
            setWindowSize(window.innerWidth)
        }

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);


    const [ messageTxt, setMessageTxt ] = useState('');
    
    const {
        buttonStyles,
        contentWrapperStyles,
        largeFonts,
        mainSection,
        mediumFonts,
        sectionWrapperStyles,
        smallFonts,
        smallerFonts,
        subtitleStyles,
        tableBodyStyles,
        tableDataStyles,
        tableHeadStyles,
        tableStyles,
        textareaStyles,
        textHolderStyles,
    } = styles;
    const isSmallScreen = windowWidth < 1200;

    const flexFlow = isSmallScreen ? 'column' : 'row';
    return (
        <div className="container">
            <section className="row">
                <header className="col-lg" style={{...largeFonts, margin: '15px'}}>Homemade Honeycakes</header>
            </section>
            <section className="row">
                <div className={`${isSmallScreen ? `col-sm` : `col-6`} shadow p-3 mb-5 bg-white rounded`}>
                        <span style={{...smallFonts}}>
                            <span>I would love to make a cake for you, so you can enjoy the taste of the freshly cooked, homemade, delicious honeycake.</span>
                            <br />
                            <br />
                            <span>Let me share a few photos of the cakes I've made as well as prices and sizes available, and provide you with some contact information here.</span>
                        </span>
                </div>
            </section>
            <section className="row">
                <div className={`${isSmallScreen ? `col-sm` : `col-6 offset-6`} shadow p-3 mb-5 bg-white rounded`}>
                    <ImageCarousel images={allCakes.filter((d, i) => i >= 3)} />
                </div>
            </section>
            <section className="row justify-content-md-center">
                <div className={`${isSmallScreen ? `col-sm` : `col-4`} shadow p-3 mb-5 bg-white rounded`}>
                    <Table
                        colSpan={3}
                        subtitle="Prices"
                        tableBodyStyles={{...tableBodyStyles, ...smallerFonts}}
                        tableDataStyles={tableDataStyles}
                        tableHeadStyles={tableHeadStyles}
                        tableStyles={tableStyles}
                        rowsData={[
                            ['8 inches', "......................................", "60$"],
                            ['10 inches', "......................................", "70$"],
                            ['12 inches', "......................................", "80$"],
                        ]}
                    />
                </div>
            </section>
            <section className="row justify-content-center shadow p-3 mb-5 bg-white rounded">
                <a
                href='https://www.instagram.com/honeycake_sf/'
                target='_blank'
                rel="noopener noreferrer"
                >
                <FontAwesomeIcon icon={faInstagram} size="3x" style={{ cursor: "pointer", color: "black", marginRight: '10px' }} />
                </a>
                <a
                href="tel: +1 713 480 3016"
                >
                <FontAwesomeIcon data-tip="+1 713 480 3016" icon={faPhoneSquare} size="3x" style={{ cursor: "pointer", color: "black" }} />
                </a>
                <ReactTooltip />
            </section>
        </div>
    );
}

export default HomePage;