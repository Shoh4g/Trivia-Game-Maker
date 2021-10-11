//JavaScript
function quiz() {
	 var score=0; 
	 var totalQuestions=3; 
    alert("Welcome to my trivia game!");
    alert("Make sure you answer all the questions.");
    
      var q1= prompt("What's the capital of India?");     
	if(q1=="New Delhi"    ) {
		 score=score+1; 
		alert("Correct!");  

	} else {
		 alert("Incorrect!"); 

	}
    
       var q2= prompt("Are dinosaurs extinct?");     
	if(  q2=="Yes"  ) {
		 score=score+1; 
		 alert("Correct!"); 

	} else {
		 alert("Incorrect!"); 

	}
   
        var q3= prompt("Who is Russia's current president?");   
	if(  q3=="Putin"  ) {
		  score=score+1;
		alert("Correct!");  

	} else {
		 alert("Incorrect!"); 

	}

	alert("You got " + score + " questions out of " + totalQuestions + " correct.");  
}
              