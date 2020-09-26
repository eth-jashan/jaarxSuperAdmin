export const SIGNIN_PROFILE = 'SIGNIN_PROFILE'

export const signinProfile = (email, password) => {
    return async dispatch => {
        const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC8S5GTxDaCuWk2kzuib_WP7Pl9O28-dUc',{
            method : 'POST',
            headers : {'Content-Type':'application/json'},
            body : JSON.stringify({
                email : email,
                password : password,
                returnSecureToken : true
            })
        })
        const resData = await response.json()
        console.log(resData)
        dispatch({type : SIGNIN_PROFILE, token:resData.idToken, userId:resData.localId})
    }
}