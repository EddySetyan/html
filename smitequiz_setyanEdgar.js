var ans;
var correct;
var score = 0;
var user;
var i = 0 ; // question index

var answers =["D", "C", "B", "B", "A", "B", "A", "C", "B", "C", "A"]; //answer string
var questions =["Q1: Which of these is a Greek God?\na) Freya\nb) Rama\nc) Susano\nd) Apollo ",
"Q2: Which one of these is not Roman\na) Bacchus\nb) Vulcan\nc) Thor \nd) Mercury ",
"Q3: What is Ymirs ultimate called\na) Jordan's Mixtape\nb) Shards of Ice\nc) Absolute Zero\nd) Ice Ice Baby",
"Q4: What is the most expensive smite item\na) Rod of Power\nb) Rod of Tahuti\nc)Deathbringer\nd) Rage ",
"Q5: What class is Arachne, the weaver\na) Assasin\nb) Brawler\nc)Deathbringer\nd) Mage ",
"Q6: What is Poseidon's ult called\na) Release the Quacken\nb) Release the Kracken\nc) Balanced\nd) Where did you healthbar go? ",
"Q7: What is Jing Weis Passive Called\na) Rapid Reincarnation\nb) Fly\nc) Fly Faster\nd) Flap of the Gods ",
"Q8: What is Susanos Title\na) The Edge God\nb) God of the wrist-cutting\nc) God of the Summer Storms\nd)  God of Mobility ",
"Q9: What is Thanatos Ultimate Kill Threhold\na) 10%\nb) 20%\nc) 30%\nd) 40 % ",
"Q10:What is Sun Wukongs 3 Called\na) 69 Transformations\nb) 420 Transformations\nc) 72 Transformations\nd) 3 Transformations ",
"Q11:What Class is Chronos\na) Mage\nb)  Warlock\nc) Shaman\nd)  Blood Mage "]; 


function main(){  // main part of program
	document.getElementById("chooseanswer").style.display="none";	
	document.getElementById("next").style.display="none";	
}		

function startQz() {
	document.getElementById("chooseanswer").style.display="block";	
	document.getElementById("next").style.display="block";
	document.view.qnum.value=i+1;  // puts question # in text box
	document.view.question.value = questions[i];
	document.getElementById("start").style.display="none";
	document.getElementById("next").style.display="none";
	score = 0;
 }

function chooseAns(){
  	ans1 = prompt(i+1 +'.)    ENTER LETTER  a,b,c,d');
	ans = ans1.toUpperCase();	
    correct = answers[i];  // assigns the correct answer
	document.getElementById("submit").style.display="block";

	//if (ans=== "a" || "b" || "c" || "d" ){
		
	if (ans==="A" || ans==="B" || ans==="C" || ans==="D"){
		
        document.getElementById("question").value = "Are you sure?";
    }
    else if (ans===" "){
        document.getElementById("question").value ="You left the question blank? Are you sure";
    }
    else {
        document.getElementById("question").value ="invalid response";
    }
 }
function submitA(){
document.getElementById("submit").style.display="none";	
document.getElementById("chooseanswer").style.display="none";	
document.getElementById("next").style.display="block";
 
if (ans===correct){
	score=score + 1;
	document.view.question.value="Nice One! You got it right";
	document.view.score.value  = score;
}
else{ 
	//alert('Uh-Oh! You got it wrong');
	document.view.question.value="Uh-Oh! You got it wrong";
	
 }
}
function NextQ() {
	document.getElementById("next").style.display="none";
	document.getElementById("chooseanswer").style.display="block";	
	document.getElementById("submit").style.display="block";	
    i++ ;
 	document.view.qnum.value=i+1;  // puts question # in text box
	document.view.question.value = questions[i];
	document.getElementById("submit").style.display="none";
	if(i>=questions.length){
		document.getElementById("next").style.display="none";
		if(score >= 9) {
				document.view.question.value=("Well Done You passed the Smite Quiz! The Gods would be happy with your knowledge ");
				document.getElementById("reset").style.display="block";
				document.getElementById("chooseanswer").style.display="none";	
			}	
		else (score <9); {
				document.view.question.value=("You might wanna brush up your Smite skills! The Gods believe in you!");
				document.getElementById("reset").style.display="block";
				document.getElementById("chooseanswer").style.display="none";	
				
			}
	}
}

function resetQ() {
    i = 0;
    score = 0;
    ans = "";
	correct = "";
	user = "";
    main();
	document.getElementById("start").style.display="block";
    document.view.score.value  = "";
	document.view.qnum.value  = "";
	document.view.question.value  = "";
	document.getElementById("reset").style.display="none";
}