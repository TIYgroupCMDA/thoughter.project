(function() {
  'use strict';
  window.nameSpace = window.nameSpace || {};

  window.loginInput.submitLogin = function loginInput('https://thoughter.herokuapp.com/api/Authors/login', userData) {

    fetch('https://thoughter.herokuapp.com/api/Authors/login',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })
    .then(function handleResponse(response) {
      response.status().then(function printResult(result) {
        console.log(status);
        if (responseObj.status > 199 && responseObj.status < 300) {
             $('.formSucess').append('btn btn-success');
            });

          });

        } else {
             $('.formSuccess').append('btn btn-primary');
        }


    };
})();
