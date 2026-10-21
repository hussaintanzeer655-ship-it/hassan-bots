const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: { 
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    }
});

client.on('qr', qr => {
    console.log('Scan this QR with WhatsApp:');
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Hassan Bot is LIVE - Shah Alam');
});

client.on('message', async msg => {
    const body = msg.body.toLowerCase().trim();
    if (['yes', 'nak', 'ya', 'mau', 'yes boss'].includes(body)) {
        await msg.reply(
`Thank you boss! 🙏
Saya Hassan from Shah Alam.

We make website + Google Map for kedai.

Payment: https://toyyibpay.com/YOUR-LINK
RM150 only - Siap 2 hari

Reply OK to confirm.`
        );
    }
});

client.initialize();
