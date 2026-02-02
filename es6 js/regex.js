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
    //password
    $('#password').keyup(function(){
        let password = $(this).val()
        let passwordreg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&-_])[A-Za-z\d@$!%*?&-_]{8,}$/
        if(!passwordreg.test(password)){
            $(this).next('span').show().text('Password must be 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character (@$!%*?&)').css('color' , 'red')
            $(this).css('border' , '2px solid red')
        }
        else{
            $(this).next('span').hide()
            $(this).css('border' , '2px solid green')
        }
    })
    //CNIC
    $('#CNIC').keyup(function(){
        let cnic = $(this).val()
        let cnicreg = /^\d{5}-\d{7}-\d{1}$/
        if(!cnicreg.test(cnic)){
            $(this).next('span').show().text('CNIC must be in the format XXXXX-XXXXXXX-X').css('color' , 'red')
            $(this).css('border' , '2px solid red')
        }
        else{
            $(this).next('span').hide()
            $(this).css('border' , '2px solid green')
        }
    })
    //Phone
    $('#phone').keyup(function(){
        let phone = $(this).val()
        let phonereg = /^\+92\d{10}$/
        if(!phonereg.test(phone)){
            $(this).next('span').show().text('Phone number must be in the format +92XXXXXXXXXX').css('color' , 'red')
            $(this).css('border' , '2px solid red')
        }
        else{
            $(this).next('span').hide()
            $(this).css('border' , '2px solid green')
        }
    })
})