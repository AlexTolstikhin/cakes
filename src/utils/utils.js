import emailjs from 'emailjs-com';


/**
 * sendEmail uses emailjs lib to send emails
 * @param {Refactor to use object destructuring (don't forget to add additional info(cell phone, email) check if it's legal to store the data)} msgTxt 
 */
export const sendEmail = (msgTxt) => {
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