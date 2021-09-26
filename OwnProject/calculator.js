function calculate(){

    //this allows you to get value from textfield in this case the side1 textfield
    const side1 = parseFloat(document.querySelector('#side1').value);
    const side2 = parseFloat(document.querySelector('#side2').value);


    //does a check to make sure input is a number
    if(isNaN(side1)){
        alert("Make sure you have a number for side 1")
    }

    if(isNaN(side2)){
        alert("Make sure you have a number for side 2")
    }

   var squareTOtal =  Math.pow(side1, 2) + Math.pow(side2, 2);
    console.log(squareTOtal);
  var result = Math.sqrt(squareTOtal);
document.querySelector('#result').innerHTML = result;

}