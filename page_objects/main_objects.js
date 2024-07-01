module.exports = {
    url: 'https://www.nimiq.com',
    commands: [],
    elements: {
       
        //Website Upper Navigation

        usernameField: "input[name='email']",
        passwordField: "input[name='password']",
        rememberMeCheckbox: "input[name='remember']",
        loginButton: "button[type='submit']",
        forgotPasswordLink: "a[href='/auth/forgot-password']",
        forgotPasswordEmailField: "input[name='email']",
        sendForgotPasswordRequest: "button[type='submit']",

        //Errors
        loginFormError: "#undefined-error",

        //Dashboard
        profileNameSideBar: "h1.mb-2",
        profileNameHome: "h1.text-4xl",


        //Notification 
        notification: ".Toastify__toast-body > div:nth-of-type(2)",

    }
}