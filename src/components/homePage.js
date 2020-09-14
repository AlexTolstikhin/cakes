import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import SectionWrapper from './sectionWrapper';
import ContentWrapper from './contentWrapper';
import ImageCarousel from './imageCarousel';
import CakeImage1 from '../assets/images/cakes/cake-1.jpg';
import CakeImage2 from '../assets/images/cakes/cake-2.jpg';
import CakeImage3 from '../assets/images/cakes/cake-3.jpg';
import CakeImage5 from '../assets/images/cakes/cake-5.jpg';
import CakeImage6 from '../assets/images/cakes/cake-6.jpg';
import CakeImage7 from '../assets/images/cakes/cake-7.jpg';


// dummy text
import { text1, text2 } from './dummyData';

const sendEmail = (msgTxt) => {
    const templateParams = {
        message: msgTxt
    };
    emailjs.send('cakes_service_1','template_msigw2h', templateParams, 'user_ozo319RzkjkCpaFmJnaYp')
        .then((response) => {
           console.log('SUCCESS!', response.status, response.text);
        }, (err) => {
           console.log('FAILED...', err);
        });

}


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
                    <ImageCarousel images={[CakeImage1, CakeImage2, CakeImage3]} />
                </ContentWrapper>
            </SectionWrapper>
            <SectionWrapper classes="section-wrapper">
                <ContentWrapper classes="content-wrapper">
                    <ImageCarousel images={[CakeImage5, CakeImage6, CakeImage7]} />
                </ContentWrapper>
                <ContentWrapper classes="content-wrapper">
                    <span className="text-holder">{text2}</span>
                </ContentWrapper>
            </SectionWrapper>
            <SectionWrapper classes="section-wrapper">
                <table className="info-table center">
                    <thead>
                        <tr>
                            <td className="subtitle" colSpan="3">Prices</td> 
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>8"</td>
                            <td>-</td>
                            <td>60$</td>
                        </tr>
                        <tr>
                            <td>10"</td>
                            <td>-</td>
                            <td>70$</td>
                        </tr>
                        <tr>
                            <td>12"</td>
                            <td>-</td>
                            <td>80$</td>
                        </tr>
                    </tbody>
                </table>
            </SectionWrapper>
            <SectionWrapper classes="section-wrapper">
                <div className="content-wrapper column">
                    <span className="subtitle">Email us</span>
                    <textarea onChange={({ target: { value = '' } }) => setMessageTxt(value)} placeholder="Please leave your contact information and some details about your order here and we'll contact you as soon as possible" />
                    <button disabled={!messageTxt} onClick={() => messageTxt && sendEmail(messageTxt)}>Send Email</button>
                </div>
            </SectionWrapper>
            <SectionWrapper classes="section-wrapper">
                <div className="content-wrapper column">
                    <table className="info-table">
                        <thead>
                            <tr>
                                <td className="subtitle" colSpan="2">Contact information</td> 
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{ display: 'none' }}>
                                <td>Call us: </td>
                                <td>555-55-55</td>
                            </tr>
                            <tr>
                                <td>Instagram: </td>
                                <td><a href="https://www.instagram.com/p/B_GY234hIAh/?utm_source=ig_web_copy_link" target="_blank">Click me</a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </SectionWrapper>
        </SectionWrapper>
    );
}

export default HomePage;