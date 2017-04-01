/**
 * Created by User on 001 01.04.17.
 */
function authenticate (login, password) {
    if (login === 'login' && password === 'password') {
        return 'You were logged in';
    } else {
        return 'Login is incorrect';
    }
}