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
        color: 'white',
        fontFamily: 'Pacifico',
        fontSize: `calc(60px + 1.5vw)`
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
        largeFonts,
        smallFonts,
        smallerFonts,
        tableBodyStyles,
        tableDataStyles,
        tableHeadStyles,
        tableStyles,
    } = styles;
    const isSmallScreen = windowWidth < 800;

    return (
        <div className="container">
            <section className="row">
                <header className="col-lg" style={{...largeFonts, margin: '15px'}}>Homemade Cakes</header>
            </section>
            <section className="row">
                <div className={`${isSmallScreen ? `col-md` : `col-5`}  p-3 mb-5 shadow bg-white rounded text-center`}>
                        <span style={{...smallFonts}}>
                            <span>Sweet, fresh, homemade cakes with delivery around Bay Area.</span>
                            <br />
                            <br />
                            <span>We'll bake an amazing honeycake, chocolate cake or cheescake for you.</span>
                        </span>
                </div>
                <div className={`${isSmallScreen ? `col-md` : `col-6 offset-1`} shadow p-3 mb-5 bg-white rounded`}>
                    <ImageCarousel images={allCakes.filter((d, i) => i >= 3)} />
                </div>
            </section>
            <section className="row justify-content-sm-center">
                <div className={`col-sm-auto shadow p-3 mb-5 bg-white rounded align-items-center`}>
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
            <section className="row justify-content-center">
                <div className={`text-center col-sm-auto shadow p-3 mb-5 bg-white rounded`}>
                <span>
                    <a
                        href='https://www.instagram.com/honeycake_sf/'
                        target='_blank'
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon icon={faInstagram} size="3x" style={{ cursor: "pointer", color: "black", marginRight: '10px' }} />
                    </a>
                    <a href="tel: +1 713 480 3016">
                        <FontAwesomeIcon data-tip="+1 713 480 3016" icon={faPhoneSquare} size="3x" style={{ cursor: "pointer", color: "black" }} />
                    </a>
                    <ReactTooltip />
                </span>
                
                </div>    
            </section>
        </div>
    );
}

export default HomePage;