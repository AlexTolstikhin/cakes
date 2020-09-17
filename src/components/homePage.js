import React, { useState } from 'react';
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
    contentWrapperStyles: (flexFlow = "row") => ({
        display: 'flex',
        flexBasis: '50%',
        flexFlow: flexFlow,
        justifyContent: 'center',
        padding: '40px'
    }),
    mainSection: isSmallScreen => ({
        backgroundColor: lightyellow,
        fontFamily: `'Raleway', sans-serif`,
        margin: '0 auto',
        opacity: 0.8,
        width: isSmallScreen ? '100%' : '80%'
    }),
    sectionWrapperStyles: {
        display: 'flex', 
        justifyContent: 'center'
    },
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
        textAlign: 'center',
        width: '50px'
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
    smallFonts: vw => ({
        fontSize: `${16 + 6 * ((vw - 320) / 680)}px`
    }),

    mediumFonts: vw => ({
        fontSize: `${25 + 6 * ((vw - 320) / 680)}px`
    }),
    largeFonts: vw => ({
        fontSize: `${40 + 6 * ((vw - 320) / 680)}px`
    }),
}


const HomePage = () => {
    const [ messageTxt, setMessageTxt ] = useState('');
    const {
        buttonStyles,
        contentWrapperStyles,
        mainSection,
        sectionWrapperStyles,
        subtitleStyles,
        tableBodyStyles,
        tableDataStyles,
        tableHeadStyles,
        tableStyles,
        textareaStyles,
        textHolderStyles,
        titleStyles,
    } = styles;

 
    const contentWrapperFlexFlow = isSmallScreen ? 'column' : 'row';


    return (
        <SectionWrapper styles={mainSection(isSmallScreen)}>
            <ContentWrapper styles={contentWrapperStyles(contentWrapperFlexFlow)}>
                <header styles={{...titleStyles, ...largeFonts(viewPort)}}>Homemade Honeycakes</header>
            </ContentWrapper>
            <SectionWrapper styles={sectionWrapperStyles}>
                <ContentWrapper styles={contentWrapperStyles(contentWrapperFlexFlow)}>
                    <span styles={{...textHolderStyles, ...smallFonts(viewPort)}}>{text1}</span>
                </ContentWrapper>
                <ContentWrapper styles={contentWrapperStyles(contentWrapperFlexFlow)}>
                    <ImageCarousel images={allCakes.filter((d, i) => i < 3)} />
                </ContentWrapper>
            </SectionWrapper>
            <SectionWrapper styles={sectionWrapperStyles}>
                <ContentWrapper styles={contentWrapperStyles(contentWrapperFlexFlow)}>
                    <ImageCarousel images={allCakes.filter((d, i) => i >= 3)} />
                </ContentWrapper>
                <ContentWrapper styles={contentWrapperStyles(contentWrapperFlexFlow)}>
                    <span styles={{...textHolderStyles, ...smallFonts(viewPort)}}>{text2}</span>
                </ContentWrapper>
            </SectionWrapper>
            <SectionWrapper styles={sectionWrapperStyles}>
                <Table
                    colSpan={3}
                    subtitle="Prices"
                    tableBodyStyles={{...tableBodyStyles, ...smallFonts(viewPort)}}
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
            <SectionWrapper styles={sectionWrapperStyles}>
                <ContentWrapper styles={contentWrapperStyles('column')}>
                    {/* Move email us to a separate component, consider adding additional inputs for email(validation ==> utils) or phone number(validation ==> utils) */}
                    <span styles={{...subtitleStyles, ...mediumFonts(viewPort)}}>Email us</span>
                    <textarea
                        onChange={({ target: { value = '' } }) => setMessageTxt(value)}
                        placeholder="Please leave your contact information and some details about your order here and we'll contact you as soon as possible"
                        styles={textareaStyles}
                    />
                    <button
                        disabled={!messageTxt}
                        onClick={() => messageTxt && sendEmail(messageTxt)}
                        styles={{...buttonStyles, ...smallFonts(viewPort)}}>
                            Send Email
                    </button>
                </ContentWrapper>
            </SectionWrapper>
            <SectionWrapper styles={sectionWrapperStyles}>
                <ContentWrapper styles={contentWrapperStyles('column')}>
                    <Table
                        colSpan={2}
                        subtitle="Contact information"
                        tableBodyStyles={{...tableBodyStyles, ...smallFonts(viewPort)}}
                        tableDataStyles={tableDataStyles}
                        tableHeadStyles={tableHeadStyles}
                        tableStyles={tableStyles}
                        rowsData={[
                            ["Phone: ", "555-**-**"],
                            ["Instagram", "<a href='https://www.instagram.com/p/B_GY234hIAh/?utm_source=ig_web_copy_link' target='_blank'>Click me</a>"],
                        ]}
                    />
                </ContentWrapper>
            </SectionWrapper>
        </SectionWrapper>
    );
}

export default HomePage;