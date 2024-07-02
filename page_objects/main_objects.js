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
        pageTitle: "h1.text-4xl",


        //Notification 
        notification: ".Toastify__toast-body > div:nth-of-type(2)",

        //Sidebar Navigation
        testsPage: "a[href='/admin/tests']",
        assessmentsPage: "a[href='/admin/assessments']",
        candidatesPage: "a[href='/admin/candidates']",
        settingsPage: "a[href='/admin/settings']",
        logoutButton: "div.w-full.items-center.h-10.text-gray-70.rounded-r:nth-of-type(1) > .h-full.items-center.justify-start.w-full.pl-8.transition.ease-in-out > .ml-2",

    }
}