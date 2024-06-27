

//whenever the click on the button will be detected then event e will be passed which will pass the value of the button clicked in the string
let input = document.getElementById('input-box');
let buttons = document.querySelectorAll('button');
let string =""; //empty string will store the result
let arr =Array.from(buttons); //arr will create the array of a button
arr.forEach(button => {
    button.addEventListener('click',(e) =>{
        if(e.target.innerHTML == '='){
            string = eval(string); //it will evaluate the string 
            input.value = string;
        }
        else if(e.target.innerHTML == 'AC'){
            string = "";//if we will click AC then it will return an empty string 
            input.value = string;
        }
        else if(e.target.innerHTML == 'C'){
            string = string.substring(0,string.length-1); //if we will click C then it will return the string by removing the number at last position
            input.value = string;

        }
        else{
            string += e.target.innerHTML;
            input.value = string; //if we donot click the = button then all the numbers we are clicking will be added in string 
        }
    })
})