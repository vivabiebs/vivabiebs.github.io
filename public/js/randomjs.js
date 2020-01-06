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
    inputField.setAttribute("id","Name");

    let submitBTN = document.createElement("button");
    let submit = document.createTextNode("submit");
    submitBTN.setAttribute("id","submitBTN");
    submitBTN.setAttribute("style","font-family: 'Gochi Hand', cursive;")
    submitBTN.setAttribute("onclick","get()");
    submitBTN.addEventListener("click",get);
    submitBTN.appendChild(submit)

    let addBTN = document.createElement("button");
    let add = document.createTextNode("+");
    submitBTN.setAttribute("id","addInputBTN");
    submitBTN.setAttribute("onclick","addInput()");
    addBTN.appendChild(add)
    addBTN.addEventListener("click",addInput);

    document.getElementById("inputForm").appendChild(inputStr);
    document.getElementById("inputForm").appendChild(inputField);
    document.getElementById("inputForm").appendChild(submitBTN);
    document.getElementById("inputForm").appendChild(addBTN);


}

function addNum(){
   giftNums = parseInt(document.getElementById("numInput").value);
   console.log(giftNums);
}
// numInput.addEventListener("click",addNum);


function random(){

}

function creatTable(){

}

// addInputBTN.addEventListener("click",addInput());