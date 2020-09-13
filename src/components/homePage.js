import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import SectionWrapper from './sectionWrapper';
import ContentWrapper from './contentWrapper';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CakeImage1 from '../assets/images/cakes/cake-1.jpg';
import CakeImage2 from '../assets/images/cakes/cake-2.jpg';
import CakeImage3 from '../assets/images/cakes/cake-3.jpg';
import CakeImage4 from '../assets/images/cakes/cake-4.jpg';
import CakeImage5 from '../assets/images/cakes/cake-5.jpg';
import CakeImage6 from '../assets/images/cakes/cake-6.jpg';
import CakeImage7 from '../assets/images/cakes/cake-7.jpg';


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
                    <span className="text-holder">Everything started from cooking cakes for myself</span>
                </ContentWrapper>
                <ContentWrapper classes="content-wrapper">
                    <Carousel>
                        <div>
                            <img src={CakeImage1} alt="cake" />
                        </div>
                        <div>
                            <img src={CakeImage2} alt="cake" />
                        </div>
                        <div>
                            <img src={CakeImage3} alt="cake" />
                        </div>
                    </Carousel>
                </ContentWrapper>
            </SectionWrapper>
            <SectionWrapper classes="section-wrapper">
                <ContentWrapper classes="content-wrapper">
                    <Carousel>
                            <div>
                                <img src={CakeImage5} alt="cake" />
                            </div>
                            <div>
                                <img src={CakeImage6} alt="cake" />
                            </div>
                            <div>
                                <img src={CakeImage7} alt="cake" />
                            </div>
                    </Carousel>
                </ContentWrapper>
                <ContentWrapper classes="content-wrapper">
                    <span className="text-holder">I want to share them with you</span>
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