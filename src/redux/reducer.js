const initialState = {
    username:'',
    id:0,
    profile_pic:''
};

const ADD_USER = 'ADD_USER'

export function addUser(id,username,profile_pic){
    return{
        type:ADD_USER,
        payload:{id,username,profile_pic}
    }
}



export default function reducer(state = initialState, action){
    switch(action.type){
        case ADD_USER:
            const myObj = Object.assign({}, state, {username:action.payload.username, id: action.payload.id, profile_pic:action.payload.profile_pic})
            return myObj
        default:
            return state
    }
}