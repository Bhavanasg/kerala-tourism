var mail = document.getElementById("email");
var pswd = document.getElementById("password");
function loginvalidate()
{
    var regmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var regpwd = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    

    if(regmail.test(mail.value)!="1")
    {
        window.alert("Email Is Invalid");
        return false;
    }
    else if(regpwd.test(pswd.value)!="1")
    {
        window.alert("Password Is Invalid, try again");
        window.alert("Password should be of minimum 8 characters, atleast one uppercase,one lower case,one character and must contain atleast one number");

        return false;
    }
    else
    {
        window.alert("validation Success");
        return true;
    }
    
};