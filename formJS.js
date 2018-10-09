//------------------------------- Object containing onblurEvent functions for all formFields ---------------//
    validateName: function(name){
        var regex = /^[a-zA-Z ]{2,30}$/;
        if(!name.match(regex)){
            document.getElementById('name').style.border = '2px solid red';
        }
        if(name.match(regex)){
            document.getElementById('name').style.border = '';
        }
    },
    validateEmail:  function(email){
        var regex = /^[\w\-\.\+]+\@[a-zA-Z0-9\. \-]+\.[a-zA-z0-9]{2,4}$/;
        if(!email.match(regex)){
            document.getElementById('email').style.border = '2px solid red';
        }
        if(email.match(regex)){
            document.getElementById('email').style.border = '';
        }
    },
    validatePass: function(pswd){
        var regex = /^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
        if(!pswd.match(regex)){
            document.getElementById('pswd').style.border = '2px solid red';
        }
        if(pswd.match(regex)){
            document.getElementById('pswd').style.border = '';
        }
    },
    validateCity: function(city){
        var regex = /^[A-Za-z ]{4,30}$/;
        if(!city.match(regex)){
            document.getElementById('city').style.border = '2px solid red';
        }
        if(city.match(regex)){
            document.getElementById('city').style.border = '';
        }
    },
    selectState: function(state){
        if(state.selectedIndex === 0){
            document.getElementById('state').style.border = '2px solid red';
        }
        else{
            document.getElementById('state').style.border = '';
        }
   },
    validateZip:  function(zip){
        var regex = /^[0-9]{5}/;
        if(!zip.match(regex)){
            document.getElementById('zip').style.border = '2px solid red';
        }
        if(zip.match(regex)){
            document.getElementById('zip').style.border = '';
        }
    },
 
};                                //---------------Ends onblurEvent functions----------------//

//----------------- Object containig onfocusEvent functions for all formFields ---------------//
var fieldsFocus = {
    Name: function(name){
        document.getElementById('name').style.border = '';
    },
    Email: function(email){
        document.getElementById('email').style.border = '';
    },
    Password: function(pswd){
        document.getElementById('pswd').style.border = '';
    },
    State: function(state){
        document.getElementById('state').style.border = '';
    },
    City: function(city){
        document.getElementById('city').style.border = '';
    },
    Zip: function(zip){
        document.getElementById('zip').style.border = '';
    }
};              //--------------------- Ends onfocusEvent functions ------------------------//