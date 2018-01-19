/*Script goes here */
// IIFE - Immediately Invoked Function Expression
(function(){


    "use strict";

    // define an array for html elements
    var paragraphElements = [];
    // code here
    paragraphElements[0] = document.getElementById("paragraphOne");
    paragraphElements[1] = document.getElementById("paragraphTwo");
    paragraphElements[2] = document.getElementById("paragraphThree");
   
   // define your pargarph array
   var paragraphs = [];

   // data for my pages
   paragraphs[0] = "This is my first paragraph.Its visible on first Page";
   paragraphs[1] = "This is my second paragraph.Its visible on second Page";
   paragraphs[2] = "This is my third paragraph.Its visible on third Page";
   // second way to define an array
  // var paragraphs = new Array();

   //check to see i paragrapgh one exits

   for(var index=0;index<paragraphElements.length;index++)
   {
      if(paragraphElements[index])
      {
        paragraphElements[index].textContent = paragraphs[index];
      }
   }
   /*
   if(paragraphElements[0])
   {
     //console.log("Paragraph One exist")
     paragraphElements[0].textContent = paragraphs[0];
   }
   if(paragraphElements[1])
   {
     // console.log("Paragraph Two exist")
     paragraphElements[1].textContent = paragraphs[1];     
   }

   if(paragraphElements[2])
   {
     //console.log("Paragraph Three exist")
     paragraphElements[2].textContent = paragraphs[2];     
   }
   */
})();