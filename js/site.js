// Get the string from the page.
// Controller f.
function getValue() 
{
    document.getElementById("alertBlock").classList.add("invisible");
    let userString = document.getElementById("userString").value;
    let revString = reverseString(userString);
    displayString(revString);
}

//Reverse the string. 
// Logic f
function reverseString(userString)
{
    let revString = [];
    //reverse string using a for loop
    //last pos in an array name.length - 1

    for (let index = userString.length - 1; index >= 0; index--) 
    {
        revString += userString[index];
    }

    return revString;

}

//Display the reversed string to the user. 
// View f.
function displayString(revString) 
{
    //write to the page
    document.getElementById("msg").innerHTML = `The revered text is: ${revString}`;
    //turn alert box on (from invisible)
    document.getElementById("alertBlock").classList.remove("invisible");
}