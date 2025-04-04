import nodemailer from 'nodemailer';

export default async function handler(req, res){
    if (req.method !=='POST'){
        return res.status(405).json({error: 'Method not allowed'})
    }

    try{
        const{
            firstName,
            lastName,
            email,
            company,
            role,
            interest,
            jobTitle,
            message,
            consent
        } = req.body;

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: process.env.SMTP_SECURE === 'true',
            auth: {
              user: process.env.SMTP_USER,
              pass: process.env.SMTP_PASSWORD,
            },
        })

        const emailContent = `
            New Contact Form Submission:

            Name: ${firstName} ${lastName}
            Email: ${email}
            Company: ${company}
            Role: ${role}
            Interest: ${interest}
            Job Title: ${jobTitle}
        
            Message: ${message || `No message provided`}

            Marketing Consent: ${ consent ? `Yes` : `No`}

            Submitted on: ${new Date().toLocaleString()}

        `;

        await transporter.sendMail({
            from: process.env.EMAIL_FROM,
            to: process.env.EMAIL_TO,
            subject: 'New Contact Form Submission',
            text: emailContent,
        });
    
        return res.status(200).json({success: true});
    }
    
    catch(error){
        console.error('Error sending email:', error);
        return res.status(500).json({error: 'Error sending email'});
    }

}