
var getCurrentUser = function(){
      console.log('currentUser :'+localStorage.getItem('email'));
      return localStorage.getItem('email');
}
var logout = function(){
    console.log('User : '+firebase.auth().currentUser.email);
    firebase.auth().signOut();
    console.log('Successfully logged out');
}


firebase.auth().onAuthStateChanged(function(user){
        if(user){
            //sessionStorage.email = user.email;
            console.log(user.email+' user logged in');
            window.location = 'testFinished.html';
        }
        else{
            console.log('Redirect user to login page');
            localStorage.removeItem('email');
            window.location = 'index.html';
        }
});
