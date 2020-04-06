var c = document.getElementById('button');

if(c){
    c.addEventListener('click' , function(){
        var fullname = document.getElementById('full-name').value;
        var email = document.getElementById('email').value;
        var message = document.getElementById('message').value;

        if(fullname.length && email.length != 0){
            Swal.fire(
                'Well done',
                "Your information is sent! Now you can check the console",
                'success'
              )
            
            console.log("Full Name = " + fullname);
            console.log("Email = " + email);
            console.log("Message = " + message);
    
        }
        else{
            Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'Please fill all the required fields.',
              })
        }
        
    });
}