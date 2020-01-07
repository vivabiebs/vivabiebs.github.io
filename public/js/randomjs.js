let submitBTN = document.getElementById("submitBTN");
let textInput = document.getElementById("textInput");
let addInputBTN = document.getElementById("addInputBTN");

var giftNums = 0;
i = 0;
var members = [];
function get(){
    members[i] = (document.getElementById("textInput").value);
    i++;
    for(let j=0;j<members.length;j++){
        console.log(members[j]);
    }
    textInput.value = '';

}

function addInput(){
    let inputStr = document.createElement("h2");
    let enter = document.createTextNode("Enter your name to JOIN THE PARTY");
    inputStr.setAttribute("style","font-family: 'Gochi Hand', cursive;")
    inputStr.appendChild(enter);
    
    let inputField = document.createElement("input");
    inputField.setAttribute("type","text");
    inputField.setAttribute("id","textInput");

    let submitBTN = document.createElement("button");
    let submit = document.createTextNode("submit");
    submitBTN.setAttribute("id","submitBTN");
    submitBTN.setAttribute("style","font-family: 'Gochi Hand', cursive;background-color: lightpink;color: black;");
    submitBTN.setAttribute("onclick","get()");
    submitBTN.addEventListener("click",get);
    submitBTN.appendChild(submit)

    let addBTN = document.createElement("button");
    let add = document.createTextNode("+");
    addBTN.setAttribute("id","addInputBTN");
    addBTN.setAttribute("style","font-family: 'Gochi Hand', cursive;background-color: lightpink;color: black;");
    addBTN.setAttribute("onclick","addInput()");
    addBTN.addEventListener("click",addInput);
    addBTN.appendChild(add)

    document.getElementById("inputForm").appendChild(inputStr);
    document.getElementById("inputForm").appendChild(inputField);
    document.getElementById("inputForm").appendChild(submitBTN);
    document.getElementById("inputForm").appendChild(addBTN);
}

function addNum(){
   giftNums = parseInt(document.getElementById("numInput").value);
   console.log(giftNums);
}

let numBuffer = [];
let luckyName = [];
let luckyLabel = document.getElementById("lucky");

function random(){
    numBuffer = [];
    luckyName = [];
    if (members.length == 0) {
        alert("No Participants");
    }
    if (document.getElementById("numInput").value == 0) {
        alert("Please input gifts number");
    }
    else {
        for (i = 0 ; i < document.getElementById("numInput").value ; i++) {
            if ( i == members.length) {
                break;
            }
            let temp = Math.floor(Math.random() * members.length);
            if (numBuffer.includes(temp)) {
                while (numBuffer.includes(temp)) {
                    temp = Math.floor(Math.random() * members.length);
                }
                numBuffer.push(temp);
                luckyName.push(members[temp]);
            }
            else {
                numBuffer.push(temp);
                luckyName.push(members[temp]);
            }
        }
        console.log(numBuffer);
        console.log(luckyName);
    }
    document.getElementById("luckyName").innerHTML = "";
    luckyName.forEach(printAllLuckyName);
}


function printAllLuckyName(item, index) {
    document.getElementById("luckyName").innerHTML += "gift no." + (index + 1) + " : " + item + "<br>";
}
