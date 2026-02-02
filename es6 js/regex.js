$(document).ready(function(){
     // name
    $('#name').keyup(function(){
        let name = $(this).val()
        let namereg = /^[a-zA-Z\s]{2,50}$/
        if(!namereg.test(name)){
            $(this).next('span').show().text('Only letters and spaces are allowed').css('color' , 'red')
            $(this).css('border' , '2px solid red')
        }
        else{
            $(this).next('span').hide()
            $(this).css('border' , '2px solid green')
        }
    })

    // email
    $('#email').keyup(function(){
        let email = $(this).val()
        let emailreg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
        if(!emailreg.test(email)){
            $(this).next('span').show().text('Email must have @gmail.com').css('color' , 'red')
            $(this).css('border' , '2px solid red')
        }
        else{
            $(this).next('span').hide()
            $(this).css('border' , '2px solid green')
        }
    })
})