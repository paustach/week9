//Create a web page that asks a user how many subjects they take, and what marks they got in each subject. The application should then output their results
// Bonus: Tell the user their grade from A-F based on their results

function myGrades(){
	var numSubjects=0;
	numSubjects=prompt("Enter how many subjects you take", "Type the number of subjects"); 
	var marks=0; 
	var result=0;
	String grade="";
	
	for(i=0;i<=numSubjects-1;i=i+1){
		marks=marks+parseInt(prompt("Enter your marks (0-100) for subject number "+(i+1), "Type your marks")); 
	}
	result=marks/numSubjects; 
		
	//if statement for getting the grade
	if(result<=100 && result>90){
			grade="A";
	}
		else if(result<=89 && result>80){
				grade="B";
		}
		else if(result<=79 && result>70){
				grade="C";
		}
		else if(result<=65 && result>69){
				grade="D";
		}
		else if(result<=64 && result>0){
				grade="E/F";
		}
		else{
			System.out.println("Invalid entry");
		}
	//output after loop ends
	document.getElementById("grades").innerHTML+="Your number of subjects: "+numSubjects;
	document.getElementById("grades").innerHTML+="Your total marks: "+marks;
	document.getElementById("grades").innerHTML+="Your average result: "+result;
	document.getElementById("grades").innerHTML+="Your grade is: "+grade;
}