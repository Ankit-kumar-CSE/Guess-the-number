let guess_number=Math.ceil(Math.random()*100)+1;
function start(){
    const input_number=Number(document.getElementById("number").value);
    const ans=document.getElementById("ans"); 
    ans.textContent="";
    if (input_number===guess_number){
        // textContent="Your guess is correct";
        ans.textContent='🎉 Your guess is Correct'
    }else{
        // textContent="Your guess is wrong";
        ans.textContent='❌ Your guess is Wrong!'
    }
}
function answer(){
    ans.textContent=`✅ The correct Answer is ${guess_number}`
}