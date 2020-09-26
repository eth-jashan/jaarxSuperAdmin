export const CREATE_PROFLE = 'CREATE_PROFILE'

export const createProfile = (email, password) => {
    return async dispatch => {
        const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBxgxNjZ_oGFnI8muSwJZ6SjhheF846WUA',{
            method : 'POST',
            headers : {'Content-Type':'application/json'},
            body : JSON.stringify({
                email : email,
                password : password,
                returnSecureToken : true
            })
        })
        const resData = await response.json();
        console.log(resData)
        dispatch({type:CREATE_PROFLE, token:resData.idToken, userId: resData.localId})
    }
}