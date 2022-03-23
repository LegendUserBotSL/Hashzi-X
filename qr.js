/* Copyright (C) 2020 Sadew.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

WhatsLegend - Sadew
*/

const chalk = require('chalk');
const { WAConnection, MessageType } = require('@adiwajshing/baileys');
const fs = require('fs');

async function whatsAsena() {
	const conn = new WAConnection();
	conn.logger.level = 'warn';
	conn.version = [3, 3234, 9]

	conn.on('connecting', async () => {
		console.log(`${chalk.green.bold('Whats')}${chalk.blue.bold('Legend')}
${chalk.white.italic('LegendString Kodu Alıcı')}
${chalk.blue.italic('ℹ️  Connecting to Whatsapp... Please wait.')}`);
	});

	conn.on('open', async () => {
		console.log(
			chalk.green.bold('Legend QR Code: '),
			'SADEW;;;' +
				Buffer.from(JSON.stringify(conn.base64EncodedAuthInfo())).toString(
					'base64'
				)
		);
		await conn.sendMessage(
			conn.user.jid,
			'SADEW;;;' +
				Buffer.from(JSON.stringify(conn.base64EncodedAuthInfo())).toString(
					'base64'
				),
			MessageType.text
		);
		if (conn.user.jid.startsWith('90')) {
			await conn.sendMessage(
				conn.user.jid,
				'*⚠️ කරුණාකර මෙම කේතය කිසිවෙකු සමඟ බෙදා නොගන්න ' + conn.user.name + '* ⚠️',
				MessageType.text
			);
		} else {
			await conn.sendMessage(
				conn.user.jid,
				'*⚠️ Please Do Not Share This Code With Anyone ' +
					conn.user.name +
					'* ⚠️',
				MessageType.text
			);
		}
		console.log(
			chalk.green.bold(
				"ඔබට පණිවිඩය පිටපත් කිරීමට නොහැකි නම්, කරුණාකර WHATSAPP පරීක්ෂා කරන්න.  QR කේතය ඔබේම අංකයට යවන ලදි!\n"
			),
			chalk.green.bold(
				'IF YOU CANNOT COPY THE MESSAGE, PLEASE CHECK WHATSAPP. QR CODE SENT TO YOUR OWN NUMBER!'
			)
		);
		process.exit(0);
	});

	await conn.connect();
}

whatsAsena();
