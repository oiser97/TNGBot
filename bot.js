const TelegramBot = require('node-telegram-bot-api');
const cron = require('node-cron');

// Inserisci il token del tuo bot qui
const token = '7932678025:AAF28xsbuS-Yi1P5F1bwcwpKJW1VDHSxudc';
const chatId = '-4092818625'; // Sostituisci con l'ID del gruppo

const bot = new TelegramBot(token, { polling: true });

// Pianifica i messaggi
// Pianifica i messaggi per lunedì alle 10:00
cron.schedule('12 15 * * 2', () => {
    bot.sendMessage(chatId, 'Buongiorno! È lunedì alle 10:00.');
});

// Pianifica i messaggi per martedì alle 11:00
cron.schedule('13 15 * * 2', () => {
    bot.sendMessage(chatId, 'Buongiorno! È martedì alle 11:00.');
});

// Pianifica i messaggi per mercoledì alle 12:00
cron.schedule('06 15 * * 2', () => {
    bot.sendMessage(chatId, 'Buongiorno! È mercoledì alle 12:00.');
});

console.log('Bot in esecuzione...')

bot.on('message', (msg) => {
    // Controlla se il messaggio è un comando per ottenere l'ID del gruppo
    if (msg.text === '/getgroupid') {
        const chatId = msg.chat.id;
        bot.sendMessage(chatId, `L'ID di questo gruppo è: ${chatId}`);
        console.log(`L'ID del gruppo è: ${chatId}`);
    }
});