(function() {
  'use strict';
  // join or create namespace as necessary
  window.nameSpace = window.nameSpace || {};

  // new thoughts POST url
  let postURL = 'https://thoughter.herokuapp.com/api/Thoughts';

  //
  // NOTE test code
  //
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
        // console.log("Debug:  jsonObj contains: ");
        // console.log(jsonObj);

        loginToken = jsonObj.id;
        // console.log('Debug: loginToken contains: ', loginToken);

        authorId = jsonObj.userId;
        // console.log('Debug: authorId contains: ', authorId);
      });
    });
  };

  // function to submit a new thought
  window.nameSpace.newThoughtSubmit = function thoughtSubmit(bodyObj) {

    fetch(postURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bodyObj)
    }).then(function handleResponse(response){
      if (response.status > 199 && response.status < 300) {

        $('button').toggleClass('btn-success');

    //     .find('h1')
    // .css('color', 'green')
    // .after('<p>' + data.theText + '</p>');

      }

      // console.log('thoughtSubmit response object =');
      // console.log(response);
      console.log('thoughtSubmit response code was: ', response.status);
    });
  };


  //variable to store login response TODO:  get rid of this variable
  let response = {};

  // variable to store the user "content" for the new thought
  let content;

  // listen for a click event
  $('button').on('click', function sendData(eventObj){
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

  // NOTE testing
  $('button').toggleClass('btn-success');

  // .after('<button>' + success + '</button');

}());
