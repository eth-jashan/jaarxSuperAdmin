
import { CREATE_PROFLE } from "../action/authOwner"

const initialState = {
    token : null,
    userId : null
}

export default (state = initialState , action) => {
    switch(action.type){
        case CREATE_PROFLE : 
            return{
                token : action.token,
                userId : action.userId
            }
        
        default :
            return state
    }
}