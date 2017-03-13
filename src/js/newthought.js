(function() {
  'use strict';
  // join or create namespace as necessary
  window.nameSpace = window.nameSpace || {};

  // new thoughts POST url
  let postURL = 'https://thoughter.herokuapp.com/api/Thoughts';

  // function to submit a new thought
  /**
   * [newThoughtSubmit description]
   * @param  {Javascript Object} bodyObj Object containing content for new thought
   * @return {void}                      Nothing is returned
   */
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
        let postFail = "Submission failed!";
        $('.btn-danger').toggleClass('formSuccess')
          .text(postFail);
      }
    });
  };

  // variable to store the user "content" for the new thought
  let content;

  // listen for a click event
  $('.btn-primary').on('click', function sendData(){
    // store the user content if there is a value
    if ($('input')[0].value) {
      content = $('input')[0].value;
    } else {
      let failText = "Please enter something!";
      $('.btn-danger').toggleClass('formSuccess')
        .text(failText);
      return;
    }

    // build body content
    let postBody = { content };

    // attempt to post the new thought, passing in the body content
    window.nameSpace.newThoughtSubmit(postBody);
  });
}());
