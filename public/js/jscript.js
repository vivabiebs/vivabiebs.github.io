 
var members = ["ไข่เจียวหมูสับ","กุนเชียงทอด","ไข่ดาว","หมูชิ้นกระเทียม","ไก่กระเทียม",
"ไข่ต้ม","หมูยอทอด","หมูยอนึ่ง","ไก่ผัดพริกเผา","หมูผัดพริกเผา","ไช้โป๊วผัดไข่","หมูสับกระเทียม","กะเพราหมูสับ",
"กะเพราหมูชิ้น","กะเพราไก่","แกงจืด","สปาเกตตี้","ผัดผัก"];


function random(){
    var randomNumber = Math.floor(Math.random() * members.length);
    var randomNumber2 = Math.floor(Math.random() * members.length);
    if(randomNumber!=randomNumber2){
    document.getElementById("meals").innerHTML= members[randomNumber] + " " +members[randomNumber2];
    }
    document.getElementById("meals").setAttribute("style","color:white");
    console.log(randomNumber);
}


