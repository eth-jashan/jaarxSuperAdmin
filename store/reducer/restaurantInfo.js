import { ADD_PROFILE } from "../action/restaurantInfo"
import Info from '../../model/info'
const initialState = {
    list : [],
    personalList : []
}

export default (state = initialState, action) => {
    switch(action.type){
        case ADD_PROFILE : 
            
        const newRes = new Info(action.info.id, action.info.propertyName, action.info.city, action.info.locality, action.info.registeredMail, action.info.contactName,
        action.info.contactNumber, action.info.contactMail, action.info.breakerName, action.info.resId)

        const list = [...state.list]

            return{
                ...state,
                list : list.concat(newRes),
                personalList : state.personalList.concat(newRes)
            }
        
        default :
            return state
    }
}