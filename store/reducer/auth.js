import { SIGNIN_PROFILE } from "../action/auth"

const initialState = {
    token : null,
    userId : null
}

export default (state = initialState , action) => {
    switch(action.type){
        case SIGNIN_PROFILE : 
            return{
                token : action.token,
                userId : action.userId
            }
        
        default :
            return state
    }
}