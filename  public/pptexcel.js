var model = {

};
var presenter = {
    logout : function(){
                    logout();
    },
    getCurrentUser : function(){
                     console.log('Current user is : '+getCurrentUser());
                     view.setHeaderEmail(getCurrentUser());
    },
    timestopped : function(){
      window.location ="main.html";
    }
};
var view = {
    init : function(){

      submitTestButton = document.getElementById("submitTest")
      headerUserElem = document.getElementById('user_email');
      logOutButton = document.getElementById('signout');
      logOutButton.addEventListener('click',function(){
                        presenter.logout();
      });
      presenter.getCurrentUser();

      submitTestButton.addEventListener('click',function(){
              view.endTest();
      });

      totalTime = 900;

     window.addEventListener('load', view.startTest, false );

                     $(document).ready(function() {

                       clock = $('.clock').FlipClock(totalTime, {
                             clockFace: 'MinuteCounter',
                             countdown: true,
                             autoStart: false,
                             callbacks: {
                               start: function() {
                                     submitTestButton.disabled = false;
                               },
                               stop: function(){
                                 submitTestButton.disabled = true;
                                 presenter.timestopped();
                               }
                             }
                         });
                     });
    },
    startTest : function(){
              clock.start();
    },
    endTest : function(){
              clock.stop();
    },
    resetTest : function(){
              clock.setTime(totalTime);
    },

    setHeaderEmail : function(email){
          headerUserElem.innerText = email;
    }
};
view.init();
