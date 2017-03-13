(function() {
  'use strict';

  let fetchURL = 'https://thoughter.herokuapp.com/api/Thoughts?filter={"limit":20}';
  window.nameSpace = window.nameSpace || {};
  window.nameSpace.getRecent = function getRecent() {
    fetch(
      fetchURL, {
        method: 'GET'
      }).then(function handleResponse(responseObj) {
        if (responseObj.status > 199 && responseObj.status < 300) {
          responseObj.json().then(function workOnJSON(jsonObj) {
            console.log("The response object converted to JSON looks like this:");
            console.log(jsonObj);
          });
        } else {
          // NOTE need error to be indicated on html in some fashion
          console.log("The fetch failed with response.status = ", responseObj.status);
        }

      });
    };

    window.nameSpace.getRecent();
  }());
