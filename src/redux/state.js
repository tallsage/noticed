import {renderEntireTree} from '../render'

let state = {
    admin: {
        login: 'admin',
        password: '123'
    },
    noticed: [
        {
            typography: '1',
            text: '2',
            counter: '3',
            date: '4'
        }
    ]
}

export const createN = () => {
    var newNoticed = {
        typography: state.newTypography,
        text: state.newText,
        counter: state.newCounter,
        date: state.newDate
    }
    state.noticed.push(newNoticed)
    state.newTypography = ''
    state.newText = ''
    state.newCounter = ''
    state.newDate = ''

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

export const deleteNoticed = (index) => {
    state.noticed.splice(index, 1)
    renderEntireTree(state)
}

export default state