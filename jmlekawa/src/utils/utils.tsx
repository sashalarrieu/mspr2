// // import './shim.js'
// const crypto = require('crypto')
// // import nodemailer from 'nodemailer'
// // import smtpTransport from 'nodemailer-smtp-transport'
// const QRCode = require('qrcode')
// import emailjs from '@emailjs/browser';

// // Fonction pour générer une clé d'authentification aléatoire
// const generateAuthKey = () => {
// 	const length = 20 // Longueur de la clé en octets
// 	return crypto.randomBytes(length).toString('base64')
// }

// export const generateQRCode = async (email: string) => {
// 	try {
// 		const authKey = generateAuthKey() // Remplacez cette fonction par votre génération de clé d'authentification
// 		const qrCodeData = { email, authKey }

// 		// Génération du QRCode
// 		return await QRCode.toDataURL(JSON.stringify(qrCodeData))
// 	} catch (error) {
// 		console.error('Erreur lors de la génération du QRCode :', error)
// 		throw error
// 	}
// }

// export const sendEmail = (form: any) => {
//     emailjs.sendForm('service_5vm7kit', 'template_hldbbeh', form, 'GNH7Ve1wgl0mVizo0')
//       .then((result) => {
//           console.log(result.text);
//       }, (error) => {
//           console.log(error.text);
//       });
//   };

// // // Configuration pour l'envoi d'e-mails via SMTP
// // const transporter = nodemailer.createTransport(
// // 	smtpTransport({
// // 		service: 'Gmail', // Remplacez par le service de messagerie de votre choix
// // 		auth: {
// // 			user: 'MSPR2PayeTonKawa@gmail.com',
// // 			pass: 'mspr2PayeTonKawa',
// // 		},
// // 	}),
// // )

// // // Fonction pour envoyer un e-mail avec le QRCode en tant que pièce jointe
// // export const sendEmail = async (to: string, qrCodeImage: any) => {
// // 	const mailOptions = {
// // 		from: 'MSPR2PayeTonKawa@gmail.com',
// // 		to: to,
// // 		subject: "Votre QRCode d'authentification",
// // 		html: "<p>Veuillez trouver ci-joint votre QRCode d'authentification.</p>",
// // 		attachments: [
// // 			{
// // 				filename: 'qrcode.png',
// // 				content: qrCodeImage.split('base64,')[1], // Supprimez le préfixe "data:image/png;base64,"
// // 				encoding: 'base64',
// // 			},
// // 		],
// // 	}

// // 	let result = true
// // 	transporter.sendMail(mailOptions, (error: any, info: any) => {
// // 		if (error) {
// // 			console.error("Erreur lors de l'envoi de l'e-mail:", error)
// // 			result = error
// // 		} else {
// // 			console.log('E-mail envoyé:', info.response)
// // 		}
// // 	})

// // 	return result
// // }
