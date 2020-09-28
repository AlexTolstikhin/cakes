import React, { useEffect, useState } from 'react';
// Add aliases for reusableParts, assets and utils

import SectionWrapper from './reusableParts/wrappers/sectionWrapper';
import ContentWrapper from './reusableParts/wrappers/contentWrapper';
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
        backgroundColor: 'lightyellow',
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
        width: '100%'
    },
    tableStyles: {
        alignSelf: 'center'
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
        <SectionWrapper styles={mainSection(isSmallScreen)}>
            <ContentWrapper styles={contentWrapperStyles}>
                <header style={largeFonts}>Homemade Honeycakes</header>
            </ContentWrapper>
            <SectionWrapper styles={sectionWrapperStyles(flexFlow)}>
                <ContentWrapper styles={contentWrapperStyles}>
                    <span style={{...textHolderStyles, ...smallFonts}}>
                        <span>Hi my name is Eldana and I love baking!!!</span>
                        <br />
                        <br />
                        <span>I would love to make a cake for you, so you can enjoy the taste of the freshly cooked, homemade, delicious honeycake.</span>
                        <br />
                        <br />
                        <span>Let me share a few photos of the cakes I've made as well as prices and sizes available, and provide you with some contact information here.</span>
                    </span>
                </ContentWrapper>
                <ContentWrapper styles={contentWrapperStyles}>
                    <ImageCarousel images={isSmallScreen ? allCakes : allCakes.filter((d, i) => i < 5)} showThumbs={!isSmallScreen} />
                </ContentWrapper>
            </SectionWrapper>
            {false && <SectionWrapper styles={sectionWrapperStyles(flexFlow)}>
                {!isSmallScreen && <ContentWrapper styles={contentWrapperStyles}>
                    <ImageCarousel images={allCakes.filter((d, i) => i >= 3)} />
                </ContentWrapper>}
                <ContentWrapper styles={contentWrapperStyles}>
                    <span style={{...textHolderStyles, ...smallFonts}}>{text2}</span>
                </ContentWrapper>
            </SectionWrapper>}
            <SectionWrapper styles={sectionWrapperStyles(flexFlow)}>
                <Table
                    colSpan={3}
                    subtitle="Prices"
                    tableBodyStyles={{...tableBodyStyles, ...smallerFonts}}
                    tableDataStyles={tableDataStyles}
                    tableHeadStyles={tableHeadStyles}
                    tableStyles={tableStyles}
                    rowsData={[
                        ['8 inches', "............................................................................................", "60$"],
                        ['10 inches', "............................................................................................", "70$"],
                        ['12 inches', "............................................................................................", "80$"],
                    ]}
                />
            </SectionWrapper>
            <SectionWrapper styles={sectionWrapperStyles(flexFlow)}>
                    <ContentWrapper styles={{ ...contentWrapperStyles, flexFlow: 'column'}}>
                        <span style={{...subtitleStyles, ...mediumFonts}}>Delivery and ordering</span>
                        <span style={{...textHolderStyles, ...smallFonts}}>Please, order the cake 2 days prior to the delivery day. Delivery throughout Bay Area is availbale for the additional fee. Otherwise you can pick up cake in Berkely at a specified time.</span>
                    </ContentWrapper>
            </SectionWrapper>
            <SectionWrapper styles={sectionWrapperStyles(flexFlow)}>
                {false && <ContentWrapper styles={{...contentWrapperStyles, flexFlow: 'column'}}>
                    {/* Move email us to a separate component, consider adding additional inputs for email(validation ==> utils) or phone number(validation ==> utils) */}
                    <span style={{...subtitleStyles, ...mediumFonts}}>Email us</span>
                    <textarea
                        onChange={({ target: { value = '' } }) => setMessageTxt(value)}
                        placeholder="Please leave your contact information and some details about your order here and we'll contact you as soon as possible"
                        style={textareaStyles}
                    />
                    <button
                        disabled={!messageTxt}
                        onClick={() => messageTxt && sendEmail(messageTxt)}
                        style={{...buttonStyles, ...smallFonts}}>
                            Send Email
                    </button>
                </ContentWrapper>}
            </SectionWrapper>
            <SectionWrapper styles={sectionWrapperStyles(flexFlow)}>
                <ContentWrapper styles={{ ...contentWrapperStyles }}>
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
                </ContentWrapper>
            </SectionWrapper>
        </SectionWrapper>
    );
}

export default HomePage;