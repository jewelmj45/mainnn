try {    
   
    function loadtable() {
        let tbl1 = document.getElementById("myUL")
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
				let item = JSON.parse(this.responseText);         
			    
        
				let output = "<li></li>";
				
                for (let i = 0; i < item.length; i++) {
                  
                   
                        output += "<li>" + item[i].title + "</li>";
                  

                }

                tbl1.innerHTML = output;
            }
        }
        xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
        xhttp.send();
    }
}
catch (e) {
    document.getElementById("listdiv").innerHTML = e;
}

// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}


let x=0;
// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
    x=x+1;
    if(x==5){
        alert("You have succesfully Completed Five Tasks!");
    }
  }
}, false);



// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}


function validate(){  
	let name=document.myform.email.value;  
	let pwd=document.myform.pwd.value;  



	if (name=="admin" && pwd=="12345"){  
		
		return true;
	
	}

	  else{
		alert("Incorrect Username or Password!");
		return false;
	  } 
	
	
	}
	

