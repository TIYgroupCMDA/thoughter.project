(function() {
  'use strict';
  // join or create namespace as necessary
  window.nameSpace = window.nameSpace || {};

  // new thoughts POST url
  let postURL = 'https://thoughter.herokuapp.com/api/Thoughts';

  let loginInfo = {
    'username': 'jordan',
    'password': 'foobar'
  }

  // store the login url NOTE test code
  let loginUrl = 'https://thoughter.herokuapp.com/api/Authors/login';

  // store the authorId NOTE test code
  let authorId;

  // test login to obtain info NOTE test code
  let loginToken; // store the token

  window.nameSpace.testLogin = function testLogin(input) {
    fetch(loginUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(input)
    })
    .then(function handleResponse(response) {
      response.json().then(function handleJSON(jsonObj){
        loginToken = jsonObj.id;
        authorId = jsonObj.userId;
      });
    });
  };

  // function to submit a new thought
  window.nameSpace.newThoughtSubmit = function newThoughtSubmit(bodyObj) {
    fetch(postURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bodyObj)
    }).then(function handleResponse(response){
      if (response.status > 199 && response.status < 300) {
        $('.btn-success').toggleClass('formSuccess');
      }
      else {
        $('.btn-danger').toggleClass('formSuccess');
      }
    });
  };

  //variable to store login response TODO:  get rid of this variable
  let response = {};

  // variable to store the user "content" for the new thought
  let content;

  // listen for a click event
  $('.btn-primary').on('click', function sendData(){
    // store the user content if there is a value
    if ($('input')[0].value) {
      content = $('input')[0].value;
    } else {
      console.log("Please enter something");
      return;
    }

    // attempt to login NOTE test code
    window.nameSpace.testLogin(loginInfo);

    // build body content
    let postBody = { content, authorId };

    // attempt to post the new thought, passing in the body content
    window.nameSpace.newThoughtSubmit(postBody);
  });
}());
