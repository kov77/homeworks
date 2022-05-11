
const initState = {
    isLoading: false
}

export const loadingReducer = (state = initState, action: loadingActionType): typeof initState=> { // fix any
    switch (action.type) {
        case 'SET-LOADING': {
            return {...state, isLoading: action.isLoading}
        }
        default: return state
    }
}

type loadingActionType = {
    type: 'SET-LOADING'
    isLoading: boolean
}

export const loadingAC = (isLoading: boolean): loadingActionType => {
    return ({
        type: 'SET-LOADING',
        isLoading
    }) as const
} // fix any
