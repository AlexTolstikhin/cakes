import React, { useState } from 'react';


// Add aliases for reusableParts, assets and utils

import SectionWrapper from './reusableParts/carousel/sectionWrapper';
import ContentWrapper from './contentWrapper';
import ImageCarousel from './reusableParts/wrappers/imageCarousel';
import { allCakes } from '../assets/images/cakes';
import Table from './reusableParts/table/table';

import { sendEmail } from '../utils/utils';

// Add text here
// dummy text
import { text1, text2 } from './dummyData';

// consider to switch HomePage to class component ==>
//  - adding router
//  - payment (future)


// Probably will be nice to implement EN/RU versions


const HomePage = () => {
    const [ messageTxt, setMessageTxt ] = useState('');

    return (
        <SectionWrapper classes="main-section">
            <ContentWrapper classes="content-wrapper">
                <header className="title">Homemade Honeycakes</header>
            </ContentWrapper>
            <SectionWrapper classes="section-wrapper">
                <ContentWrapper classes="content-wrapper">
                    <span className="text-holder">{text1}</span>
                </ContentWrapper>
                <ContentWrapper classes="content-wrapper">
                    <ImageCarousel images={allCakes.filter((d, i) => i < 3)} />
                </ContentWrapper>
            </SectionWrapper>
            <SectionWrapper classes="section-wrapper">
                <ContentWrapper classes="content-wrapper">
                    <ImageCarousel images={allCakes.filter((d, i) => i >= 3)} />
                </ContentWrapper>
                <ContentWrapper classes="content-wrapper">
                    <span className="text-holder">{text2}</span>
                </ContentWrapper>
            </SectionWrapper>
            <SectionWrapper classes="section-wrapper">
                <Table
                    classes="info-table"
                    colSpan={3}
                    subtitle="Prices"
                    rowsData={[
                        ['8"', "-", "60$"],
                        ['10"', "-", "70$"],
                        ['12"', "-", "80$"],
                    ]}
                />
            </SectionWrapper>
            <SectionWrapper classes="section-wrapper">
                <ContentWrapper classes="content-wrapper column">
                    {/* Move email us to a separate component, consider adding additional inputs for email(validation ==> utils) or phone number(validation ==> utils) */}
                    <span className="subtitle">Email us</span>
                    <textarea onChange={({ target: { value = '' } }) => setMessageTxt(value)} placeholder="Please leave your contact information and some details about your order here and we'll contact you as soon as possible" />
                    <button disabled={!messageTxt} onClick={() => messageTxt && sendEmail(messageTxt)}>Send Email</button>
                </ContentWrapper>
            </SectionWrapper>
            <SectionWrapper classes="section-wrapper">
                <ContentWrapper classes="content-wrapper column">
                    <Table
                        colSpan={2}
                        subtitle="Contact information"
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