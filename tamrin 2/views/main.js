$(document).ready(function() {
    $('body').on('click', '.login', function() {
        let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        let email = $('.email').val()
        let pass = $('.pass').val()

        if (email.match(mailformat) && email !== "" && pass !== "") {
            $.post('/loggin', { 'email': email, 'password': pass }, function(response) {
                console.log(response);
                if (response.username !== "wrong email or password") {
                    window.location = `/loggin/found/${response.username}`;

                } else {
                    alert(response.username)

                }
            })
        } else {
            alert('wrong email format or fields are empty')
        }

    })
    $('body').on('click', '.signUp', function() {
        window.location = `/signUp`;
    })
});