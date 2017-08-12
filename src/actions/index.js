export const updateSearchInput = text =>{
    return {
        type: 'UPDATE_SEARCH_INPUT',
        text
    }
}

export const toggleCardDetailExpand = cardIndex => {
    return {
        type: 'TOGGLE_EXPAND_CARD_DETAIL',
        cardIndex
    }
}

export const toggleDisplayConfirmQueue = cardIndex => {
    return {
        type: 'TOGGLE_DISPLAY_CONFIRM_QUEUE',
        cardIndex
    }
}

export const queueCard = cardIndex => {
    return {
        type: 'QUEUE_CARD',
        cardIndex
    }
}