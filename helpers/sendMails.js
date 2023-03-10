const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
    },
});

module.exports = {
    confirmRegister: async (data) => {
        const { name, email, token } = data;

        try {
            await transport.sendMail({
                from: "Project Manager <info@projectmanager.com>",
                to: email,
                subject: "Confirmá tu Cuenta!",
                text: "Confirmá tu cuenta en Project Manager",
                html: `
                <p>Hola ${name}, para confirmar tu cuenta hacé click en el siguiente enlace:</p>
                <a href="${process.env.URL_FRONTEND}/confirm/${token}">Confirmar Cuenta</a>`,
            });
        } catch (error) {
            console.log(error);
        }
    },

    forgetPassword: async (data) => {
        const { name, email, token } = data;

        try {
            const infoMail = await transport.sendMail({
                from: "Project Manager <info@projectmanager.com>",
                to: email,
                subject: "Restablecé tu Contraseña",
                text: "Restablecé tu contraseña en Project Manager",
                html: `
                <p>Hola ${name}, restablecé tu contraseña haciendo click en el siguiente enlace:</p>
                <a href="${process.env.URL_FRONTEND}/recover-password/${token}">Restablecer Contraseña</a>`,
            });
            console.log(infoMail);
        } catch (error) {
            console.log(error);
        }
    },
};
