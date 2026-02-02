$(document).ready(function(){

    // name
    $('#email').keyup(function(){
        let email = $(this).val()
        let emailreg = /^[a-z0-9\-\_\.]{5,}[@][a-z]{5}[.]{a-z}{3} $/
        if(!emailreg.test(email)){
            $(this).next('span').show().text('Incorrect email').css('color' , 'red')
            
        }
        else{
            $(this).next('span').hide()
            $(this).css('border' , '2px solid green')
        }
    })
})