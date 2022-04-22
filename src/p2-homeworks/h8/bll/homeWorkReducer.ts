import {actionType,  initialPeopleType, UserType} from "../HW8";

export const homeWorkReducer = (state: initialPeopleType, action: actionType) => {
    switch (action.type) {
        case 'sort': {
            switch (action.payload) {
                case 'up' : return [...state.sort((a, b) => a.age > b.age ? 1 : -1)]

                case 'down' : return [...state.sort((a,b) => a.age > b.age ? -1 : 1)]

                default: return state
            }
        }
        case 'check': {
            return state.filter((el: UserType) => el.age >= 18)
        }
        default: return state
    }
}
