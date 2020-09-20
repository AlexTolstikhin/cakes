import React, { useEffect, useState } from 'react';
// Add aliases for reusableParts, assets and utils

import SectionWrapper from './reusableParts/wrappers/sectionWrapper';
import ContentWrapper from './reusableParts/wrappers/contentWrapper';
import ImageCarousel from './reusableParts/carousel/imageCarousel';
import { allCakes } from '../assets/images/cakes';
import Table from './reusableParts/table/table';

import { sendEmail } from '../utils/utils';

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
        margin: '10px',
        textAlign: 'center'
    },
    textareaStyles: {
        fontSize: '20px',
        minHeight: '200px',
        width: '100%'
    },
    textHolderStyles: {
        fontSize: '18px'
    },
    tableStyles: {
        alignSelf: 'center'
    },

    // font size handling styles
    // find VW should be a number
    smallerFonts: vw => ({
        fontSize: `${12 + 6 * ((vw - 320) / 680)}px`
    }),

    smallFonts: vw => ({
        fontSize: `${16 + 6 * ((vw - 320) / 680)}px`
    }),

    mediumFonts: vw => ({
        fontSize: `${25 + 6 * ((vw - 320) / 680)}px`
    }),
    largeFonts: vw => ({
        fontFamily: 'Pacifico',
        fontSize: `${40 + 6 * ((vw - 320) / 680)}px`
    }),
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
                <header style={largeFonts(windowWidth)}>Homemade Honeycakes</header>
            </ContentWrapper>
            <SectionWrapper styles={sectionWrapperStyles(flexFlow)}>
                <ContentWrapper styles={contentWrapperStyles}>
                    <span style={{...textHolderStyles, ...smallFonts(windowWidth)}}>{text1}</span>
                </ContentWrapper>
                <ContentWrapper styles={contentWrapperStyles}>
                    <ImageCarousel images={isSmallScreen ? allCakes : allCakes.filter((d, i) => i < 3)} showThumbs={!isSmallScreen} />
                </ContentWrapper>
            </SectionWrapper>
            <SectionWrapper styles={sectionWrapperStyles(flexFlow)}>
                {!isSmallScreen && <ContentWrapper styles={contentWrapperStyles}>
                    <ImageCarousel images={allCakes.filter((d, i) => i >= 3)} />
                </ContentWrapper>}
                <ContentWrapper styles={contentWrapperStyles}>
                    <span style={{...textHolderStyles, ...smallFonts(windowWidth)}}>{text2}</span>
                </ContentWrapper>
            </SectionWrapper>
            <SectionWrapper styles={sectionWrapperStyles(flexFlow)}>
                <Table
                    colSpan={3}
                    subtitle="Prices"
                    tableBodyStyles={{...tableBodyStyles, ...smallerFonts(windowWidth)}}
                    tableDataStyles={tableDataStyles}
                    tableHeadStyles={tableHeadStyles}
                    tableStyles={tableStyles}
                    rowsData={[
                        ['8"', "-", "60$"],
                        ['10"', "-", "70$"],
                        ['12"', "-", "80$"],
                    ]}
                />
            </SectionWrapper>
            <SectionWrapper styles={sectionWrapperStyles(flexFlow)}>
                <ContentWrapper styles={{...contentWrapperStyles, flexFlow: 'column'}}>
                    {/* Move email us to a separate component, consider adding additional inputs for email(validation ==> utils) or phone number(validation ==> utils) */}
                    <span style={{...subtitleStyles, ...mediumFonts(windowWidth)}}>Email us</span>
                    <textarea
                        onChange={({ target: { value = '' } }) => setMessageTxt(value)}
                        placeholder="Please leave your contact information and some details about your order here and we'll contact you as soon as possible"
                        style={textareaStyles}
                    />
                    <button
                        disabled={!messageTxt}
                        onClick={() => messageTxt && sendEmail(messageTxt)}
                        style={{...buttonStyles, ...smallFonts(windowWidth)}}>
                            Send Email
                    </button>
                </ContentWrapper>
            </SectionWrapper>
            <SectionWrapper styles={sectionWrapperStyles(flexFlow)}>
                    <Table
                        colSpan={2}
                        subtitle="Contact information"
                        tableBodyStyles={{...tableBodyStyles, ...smallerFonts(windowWidth)}}
                        tableDataStyles={tableDataStyles}
                        tableHeadStyles={tableHeadStyles}
                        tableStyles={tableStyles}
                        rowsData={[
                            ["Phone: ", "555-**-**"],
                            ["Instagram", "<a href='https://www.instagram.com/p/B_GY234hIAh/?utm_source=ig_web_copy_link' target='_blank'>Click me</a>"],
                        ]}
                    />
            </SectionWrapper>
        </SectionWrapper>
    );
}

export default HomePage;