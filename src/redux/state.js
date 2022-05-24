import {renderEntireTree} from '../render'

let state = {
    admin: {
        login: 'admin',
        password: '123'
    },
    noticed: [
        {
            typography: 'zagolovok',
            text: 'text',
            counter: '0',
            date: '20.05.2022',
            id: '0'
        }
    ]
}

export const createN = () => {
    var newNoticed = {
        typography: state.newTypography,
        text: state.newText,
        counter: state.newCounter,
        date: state.newDate,
        id: state.newId
    }
    state.noticed.push(newNoticed)
    state.newTypography = ''
    state.newText = ''
    state.newCounter = ''
    state.newDate = ''
    state.newId = ''

    renderEntireTree(state)
}

export const updateStringTypography = (newText) => {
    state.newTypography = newText
    renderEntireTree(state)
}

export const updateStringText = (newText) => {
    state.newText = newText
    renderEntireTree(state)
}

export const updateStringCounter = (newText) => {
    state.newCounter = newText
    renderEntireTree(state)
}

export const updateStringDate = (newText) => {
    state.newDate = newText
    renderEntireTree(state)
}

export const updateStringId = (newText) => {
    state.newId = newText
    renderEntireTree(state)
}

export const deleteNoticed = (index) => {
    state.noticed.length === index ? state.noticed.pop() : state.noticed.splice(index, 1)
    renderEntireTree(state)
}

export default state