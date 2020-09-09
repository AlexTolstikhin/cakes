import React from 'react';
import { cake1 } from '../assets/images/cakes';

const HomePage = (props) => {
    return (
        <section className="main-section">
            <div className="content-wrapper">
                <header className="title">Homemade Honeycakes</header>
            </div>
        <section className="section-wrapper">
            <div className="content-wrapper">
                <span className="text-holder">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </span>
            </div>
            <div className="content-wrapper">
                <img className="item-image" src={cake1} alt="cake" />
            </div>
        </section>
        <section className="section-wrapper">
            <div className="content-wrapper">
                <img className="item-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR8e9oEoAdgmE5VbiTf_FTklhWZe5oNDI_rBg&usqp=CAU" alt="cake" />
            </div>
            <div className="content-wrapper">
                <span className="text-holder">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </span>
            </div>
        </section>
        <section className="section-wrapper">
            <table className="info-table">
                <thead>
                    <tr>
                        <td colSpan="3">Prices</td> 
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
        </section>
        <section className="section-wrapper">
            <div className="content-wrapper column">
                <span className="title-txt">Email us</span>
                <textarea placeholder="Please leave add some information about your order here and we'll contact you as soon as possible" />
                <button>Send Email</button>
            </div>
        </section>
        <section className="section-wrapper">
            <div className="content-wrapper column">
                <table className="info-table">
                    <thead>
                        <tr>
                            <td colSpan="2">Contact information</td> 
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Email us at:</td>
                            <td>60$</td>
                        </tr>
                        <tr>
                            <td>Call us at:</td>
                            <td>555-55-55</td>
                        </tr>
                        <tr>
                            <td>Our Instagram</td>
                            <td><a href="https://www.instagram.com/p/B_GY234hIAh/?utm_source=ig_web_copy_link">Click me</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
        
    </section>
    )
}

export default HomePage;