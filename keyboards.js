import Markup from 'telegraf-markup4-ts'

export function getMainMenu() {
    return Markup.keyboard([
        ['Кнопка 1', 'Кнопка 2'],
        ['Кнопка 3']
    ]).resize().extra()
}

export function yesNoKeyboard() {
    return Markup.inlineKeyboard([
        Markup.callbackButton('Да', 'yes'),
        Markup.callbackButton('Нет', 'no')
    ], { columns: 2 }).extra()
}