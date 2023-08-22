var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}


function select(){
    
    // var text=document.createTextNode(x);
    
   
    document.getElementById("written").style.display="flex";
    var li = document.createElement("li");
    var inputValue = document.getElementById("write-text").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      document.getElementById("myUL").appendChild(li);
    }

    document.getElementById("write-text").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("7:30am");
  span.className = "close";
  span.appendChild(txt);
  span.style.color="#ffffff99";
  span.style.marginLeft="30px";
  span.style.fontSize="12px";
  li.appendChild(span);

  
   
    

   

   
}


