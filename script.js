let currTime = new Date().toLocaleTimeString();
console.log(currTime);

var chatBox = document.getElementById('chatBox');
console.log(chatBox);
function sendMessage(event) {
    let a= document.getElementById("send");
    console.log(a.value);
    let div = document.createElement("div");
    div.classList.add("message");
    div.classList.add("my_message");
    let p = document.createElement("p")
    let span = document.createElement("span");
    span.classList.add("sendTime");
    p.classList.add("sendPara")
    span.innerHTML=currTime;
    p.innerHTML=a.value;
    p.appendChild(span);
    div.appendChild(p);
    chatBox.appendChild(div);
    a.value="";

}


function settingmenu() {


    var menuBox = document.getElementById('settingmenu1');
    if (menuBox.style.display == "block") {
        menuBox.style.display = "none";
    } else {
        menuBox.style.display = "block";

    }
}



function setting() {


    var menuBox = document.getElementById('setting');
    if (menuBox.style.display == "block") {
        menuBox.style.display = "none";
    } else {
        menuBox.style.display = "block";

    }
}


