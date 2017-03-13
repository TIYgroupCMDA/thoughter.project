(function() {
 'use strict';

 window.nameSpace = window.nameSpace || {};
 let login = document.querySelector('.login')
   .addEventListener('blur', function log(event){
     console.log(event);
   });

}());
