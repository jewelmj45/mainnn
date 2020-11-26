try {    
    let deptSelect = document.getElementById("deptSelect");
    let deptValue = deptSelect.value;
    deptSelect.addEventListener("onchange", loadtable);
    function loadtable() {
        let tbl1 = document.getElementById("tbl1")
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                let item = JSON.parse(this.responseText);       
                      
                deptValue = deptSelect.value;                
                let output = "<caption>Item List</caption><tr><th>Sl.No.</th><th>Name</th><th>Quantiy</th><th>Unit</th><th>Category</th><th>Details</th></tr>";
                for (let i = 0; i < item.length; i++) {
                   
                        output += "<li>";
                        output += "<li>" + item[i].userId + "</li>";
                        output += "<li>" + item[i].id + "</li>";"
                    
                

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