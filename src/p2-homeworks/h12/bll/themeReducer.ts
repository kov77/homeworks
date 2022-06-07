const initState = {
    theme : 'some'
};

export type themeStateType = {theme: string}


export const themeReducer = (state = initState, action: {type: string}): themeStateType => {
    switch (action.type) {
        case "RED-INPUT": {
            return {...state, theme: 'red'};
        }
        case "DARK-INPUT": {
            return {...state, theme: 'dark'};
        }
        case "SOME-INPUT": {
            return {...state, theme: 'some'};
        }
        default: return state;
    }
};

