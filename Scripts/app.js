/*Script goes here */
// IIFE - Immediately Invoked Function Expression
(function(){


    "use strict";
    // code here
   var paragraphOne = document.getElementById("paragraphOne");
   var paragraphTwo = document.getElementById("paragraphTwo");
   var paragraphThree = document.getElementById("paragraphThree");
   
   //check to see i paragrapgh one exits
   if(paragraphOne)
   {
     console.log("Paragraph One exist")
   }
   if(paragraphTwo)
   {
      console.log("Paragraph Two exist")
   }

   if(paragraphThree)
   {
      console.log("Paragraph Three exist")
   }
})();