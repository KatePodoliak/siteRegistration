$('form#reg-form').submit(function(){
    var login = $('#login').val();
    var email = $('#email').val();
    var password = $('#password').val();
    $.post('/auth/reg', {
        login: login,
        email: email,
        password: password
    })
});
