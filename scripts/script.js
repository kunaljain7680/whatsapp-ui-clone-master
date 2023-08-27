var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("7:30am");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}


function select(){
    
    // var text=document.createTextNode(x);
    
   
    document.getElementById("written").style.display="flex";
    var li = document.createElement("li");
    li.classList.add("text-list");
    var inputValue = document.getElementById("write-text").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      document.getElementById("myUL").appendChild(li);
    }

    document.getElementById("write-text").value = "";
    document.querySelector("#oggy").style.display="inline-block";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("7:30am");

  span.className = "close";

  span.appendChild(txt);
  span.style.color="#ffffff99";
  span.style.marginLeft="30px";
  span.style.fontSize="12px";
  li.appendChild(span);

  
   
    

   

   
}

let custom=document.querySelector(".chat-message2");


function deletes(event){
  const clicked=event.target;
  console.log(clicked);
  if(clicked.matches(".chat-message2") == true){
    // const parent = clicked.parentElement;
      
    for (i=0;i<clicked.children.length;i++){
      const ele=clicked.children[i];

    ele.style.display="none";
    document.querySelector("#oggy").style.display="none";
    }
    
  }
}

custom.addEventListener("click",deletes);


// let chatAll=document.querySelector("#full-clear");

// chatAll

function clearAll(){
  document.querySelector(".chat-message-group").style.display="none";
  document.querySelector("#chat-message-group1").style.display="none";
}