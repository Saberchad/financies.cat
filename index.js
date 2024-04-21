require('dotenv').config();
const { Bot, GrammyError, HttpError} = require('grammy');

const bot = new Bot(process.env.BOT_API_KEY)

bot.command('start', async(ctx) => {
    await ctx.reply('ам ам ам')
})

bot.command('help', async (ctx) => {
    await ctx.reply('сам разбирайся')
})


bot.api.setMyCommands([
    {
        command: 'start', description: 'запускай',
    },
    {
        command: 'add', description: 'добавляем бабки на счет (приход)',
    },
    {
        command: 'spend', description: 'а мог инвестировать! (расход)',
    },
    {
        command: 'balance', description: 'ну как там с деньгами?! (баланс)',
    },
    {
        command: 'help', description: 'сраные андроиды',
    },
])

bot.on('message:text', async (ctx) => {
    await ctx.reply('юзай кнопки челик')
})

bot.on('message:photo', async (ctx) => {
    await ctx.reply('скинь сиськи')
})

bot.on('message:voice', async (ctx) => {
    await ctx.reply('тише тише')
})

bot.on('message:video', async (ctx) => {
    await ctx.reply('nice boobs')
})

bot.catch((err) => {
    const ctx = err.ctx;
    console.error(`Error while handling update ${ctx.update.update_id}:`);
    const e = err.error;

    if (e instanceof GrammyError) {
        console.error('Error in request:', e.description);
    } else if (e instanceof HttpError) {
        console.error('Could not contact Telegram:', e);
    } else {
        console.error('Uknown error:', e);
    }
});

bot.start();