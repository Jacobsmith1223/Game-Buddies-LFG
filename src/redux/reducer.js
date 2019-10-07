const initialState = {
    username:'',
    id:0,
    profile_pic:'',
    slide: false
};

const ADD_USER = 'ADD_USER'
const SLIDE_NAV = 'SLIDE_NAV'

export function addUser(id,username,profile_pic){
    return{
        type:ADD_USER,
        payload:{id,username,profile_pic}
    }
}

export function slideNav(slide){
    return{
        type: SLIDE_NAV,
        payload: {slide}
    }
}



export default function reducer(state = initialState, action){
    switch(action.type){
        case ADD_USER:
            const myObj = Object.assign({}, state, {username:action.payload.username, id: action.payload.id, profile_pic:action.payload.profile_pic})
            return myObj
        case SLIDE_NAV:
            return Object.assign({}, state, {slide: !action.payload.slide})
        default:
            return state
    }
}