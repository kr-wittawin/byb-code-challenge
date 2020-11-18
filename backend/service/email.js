
// sendgrid creds
const sendgrid = require('@sendgrid/mail');
// [FOR BYB] change these
// sendgrid_apiKey - sendgrid API key
// verified_sender - your verified sender
const sendgrid_apiKey = "APIKEY";
const verified_sender = "test@email.com";

const sendgridEmail = (email) => {
    sendgrid.setApiKey(sendgrid_apiKey);

    let msg = {
        to: email,
        from: verified_sender, 
        subject: "Successfully signed up!",
        html: "Hi there, <br>Congrats, you have signed up to Gym Time."
    };

    return sendgrid.send(msg)
}

// mailgun wittawin creds
// [FOR BYB] change these
// mailgun_apiKey - mail private API key
// mailgun_domain - domain without the https://api.mailgun.net/v3/YOUR_DOMAIN
const mailgun_apiKey = "privateAPIKEY";
const mailgun_domain = "mailgun_domain";
const mailgun = require('mailgun-js')({
    apiKey: mailgun_apiKey,
    domain: mailgun_domain
});

const mailgunEmail = (email) => {

    let data = {
        from: verified_sender,
        to: email, 
        subject: "Successfully signed up!",
        text: "Hi there, Congrats, you have signed up to Gym Time.",
    };
    
    return mailgun.messages().send(data)
}

const sendEmailSafe = async (email) => {
    try {
        await sendgridEmail(email)
            .then((res) => {
                console.log("Sendgrid sent!")
            })
            .catch(async (err) => {
                console.log("Sedngrid error sending!")
                await mailgunEmail(email)
                    .then((res) => {
                        console.log("Mailgun sent!")
                    })
            });
        return true;
    }
    catch(e) {
        console.log("Email service errored");
        return false;
    }
}

module.exports = {
    sendEmailSafe
};