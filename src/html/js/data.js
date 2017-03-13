(function() {
 'use strict';

 window.nameSpace = window.nameSpace || {};
 let login = document.querySelector('.login')
   .addEventListener('blur', function log(event){
     console.log(event);
   });

}());

[1:34]
(function() {
 'use strict';
 window.nameSpace = window.nameSpace || {};
 window.nameSpace.loginFn = function loginFn(user) {


   let loginPromise = fetch(
     'https//thoughter.herokuapp.com/api/authors/login',
     {
       method: 'POST',
       headers: {
         Authorization: 'token '
       },
       body: {'username': 'jordan', 'password': 'foobar'}
     }
   );
   loginPromise.then(function checkResponse(responseObj){
     console.log(responseObj);
   }

 );
};

})();
