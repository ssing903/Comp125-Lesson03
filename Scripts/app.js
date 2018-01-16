/*Script goes here */
// global scope
//var sukh ="Sukh"; 0 eating my zombie
// IIFE - Immediately Invoked Function Expression
(function(){


    "use strict";
    // code here
   var firstPTag = document.getElementById("firstParagraph");

   // event listener for click
   firstPTag.addEventListener("click",firstParagraphClicked);
    
    // event listener for hover
    firstPTag.addEventListener("mouseover",firstParagraphHover);
    
    var firstParagraphIsClicked = false;
    var firstParagraphWasHover = false;
    console.log("App started");

    var myFirstParagraph = "This is my first pargraph. I am writing it for demonstartion";
    /*
    // declare named function
    function writeToFirstParagraph()  {
      // debugging only
       console.log("Executing the writeToParagraph");
       //create an reference to p element with an id of the first paragraph
        var firstParagraph = document.getElementById("firstParagraph");
        firstParagraph.textContent = "It's alive!!!";
       // console.log(sukh);

    }
    */ 

    // declare a variable that point to anonomaus function
    var writeToFirstParagraph = function()
    {
        // debugging only
       console.log("Executing the writeToParagraph");
       //create an reference to p element with an id of the first paragraph
        
        firstPTag.textContent = myFirstParagraph;
       // console.log(sukh);
      // alert("This is an alert");
      //document.write("My document will be destroyed");
     }    

   // var alias = writeToFirstParagraph;
    // execute function
    writeToFirstParagraph();

    // event handdler
    function firstParagraphClicked()
    {
        if(firstParagraphIsClicked)
        {
            firstPTag.style.color = "#000000"; 
            firstParagraphIsClicked = false;       
        }
        else
        {
            firstPTag.style.color = "green";
            firstParagraphIsClicked = true;
        }
    }

    function firstParagraphHover()
    {
        if(firstParagraphWasHover)
        {
            firstPTag.style.color = "#000000"; 
            firstParagraphWasHover = false;       
        }
        else
        {
            firstPTag.style.color = "#FF0000";
            firstParagraphWasHover = true;
        }
    }
    //console.log(firstPTag);
})();