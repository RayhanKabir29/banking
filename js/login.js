//login and re-direct to banking page
document.getElementById('login').addEventListener('click', function(){
    const emailField = document.getElementById('userEmail');
    const email = emailField.value;
    //user password
    const passwordField = document.getElementById('userPassword');
    const password = passwordField.value;
    if(email == 'sontan@bap.com' && password == '1234'){
     window.location.href = 'banking.html';
    }
 });