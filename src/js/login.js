(function() {
  'use strict';
  window.nameSpace = window.nameSpace || {};
  * [This function fetches login data from the api]
* @param  {[url]} https   [api url]
* @param  {[json]} headers [content type of the data's header]
* @param  {[json-stringify]} body    [turns the body into stringified JSON data]
* @return {[promise]}         [handles response objects status]
*/

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
