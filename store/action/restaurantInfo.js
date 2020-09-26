export const ADD_PROFILE = 'ADD_PROFILE'

export const addProfile = (propertyName, city, locality, registeredMail, contactName, contactNumber, contactMail) => {
    return async (dispatch, getState) => {

        const token = getState().auth.token
        const resId = getState().owner.userId
        const breakerId = getState().auth.userId

        const response = await fetch(`https://super-admin-21800.firebaseio.com/resInfo.json?auth=${token}`,{
            method : 'POST',
            headers : {'Content-Type':'application/json'},
            body : JSON.stringify({
                propertyName : propertyName,
                city : city,
                locality : locality,
                registeredMail : registeredMail,
                contactName : contactName,
                contactNumber : contactNumber,
                contactMail : contactMail,
                breakerName : breakerId,
                resId : resId
            })
        })
        const resData = await response.json()
        console.log(resData)
        
        dispatch({type : ADD_PROFILE, info:{id : resData.name, propertyName : propertyName, city : city, locality : locality,
            registeredMail : registeredMail, contactName : contactName, contactNumber : contactNumber,
            contactMail : contactMail, breakerName : breakerId, resId : resId}})
    }
}