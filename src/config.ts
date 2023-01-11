import { GatewayIntentBits, Collection, ButtonStyle } from 'discord.js';
import GuildConfig from './types/GuildConfig';

export const internal = {
    token: 'MTA0NjM3ODA2MzI4NzU1NDA3MA.GIa9Qd.hATTrQThxwAEwUOUFJKRgsXMFHsn8UNwAzMBFM', // Токен бота (https://discord.com/developers/applications)
    mongoURL: 'mongodb+srv://Kazumi:198119@voicebot.inwjjdh.mongodb.net/Voice?retryWrites=true&w=majority' // Ссылка на базы данных MongoDB (https://www.mongodb.com/)
}

export const intents: GatewayIntentBits[] | number = 131071 // Все интенты

export const cooldownVoiceJoin: number = 0

export const guilds = new Collection<string, GuildConfig>()
.set(
    "1060384314027683883", // ID Сервера
    {
        defaultName: '⭐ {username}', // Дефолтное название комнаты (username это ник участника, можете убрать этот параметр, тогда будет просто ник участника)
        message: '1060385895125094470', // ID Сообщения (если сообщения нет, оставляете путсым, до заполнения)
        style: ButtonStyle.Secondary, // Стиль кнопок (выбирать из предложенных от класса)
        channels: {
            text: '1060384968632717353', // ID канала где расположится панель управления
            voice: '1060384314027683887', // ID голосового канала приваток
            category: '1060384314027683885' // ID категории где будут создаваться приватные комнаты
        },
        line: undefined, // Линия в панели управления (сейчас она не стоит, чтобы её поставить впишите "'https://...'" вместо "undefined")
        color: 0x2f3136, // Цвет embed'а сообщений
        dot: undefined, // Эмодзи перед эмодзи в панели комнаты (сейчас эмодзи не стоит, чтобы поставить впишите "'✏️'" вместо "undefined")
        buttons: { // Эмодзи и их описание :)
            'rename': {
                emoji: '✏️',
                title: 'Изменить название комнаты'
            },
            'limit': {
                emoji: '👥',
                title: 'Установить лимит пользователей'
            },
            'close': {
                emoji: '🔒',
                title: 'Закрыть/открыть доступ в комнату'
            },
            'hide': {
                emoji: '👁️',
                title: 'Скрыть/раскрыть комнату для всех'
            },
            'user': {
                emoji: '💋',
                title: 'Забрать/выдать доступ к комнате пользователю'
            },
            'speak': {
                emoji: '🔈',
                title: 'Забрать/выдать право говорить пользователю'
            },
            'kick': {
                emoji: '🤢',
                title: 'Выгнать пользователя из комнаты'
            },
            'reset': {
                emoji: '✂️',
                title: 'Сбросить права пользователю'
            },
            'owner': {
                emoji: '👑',
                title: 'Сделать пользователя новым владельцем'
            },
            'info': {
                emoji: '📔',
                title: 'Информация о комнате'
            }
        },
        placeholder: { // Заголовки у меню при выборе пользователя или канала
            user: '🔷 Выберите пользователя',
            channel: '🔷 Выберите приватную комнату'
        }
    }
)