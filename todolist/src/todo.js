window.onload = function() {
    let todolist = []
    if (JSON.parse(localStorage.getItem("todolist"))!== null) {
        todolist =JSON.parse(localStorage.getItem("todolist"))
        }
    document.getElementById("clear").onclick = function() {
        localStorage.clear()
        location.reload()
    }
    document.getElementById("add").onclick = function() {
        let todotask = document.getElementById("in").value
        todolist.push(todotask)
        localStorage.setItem('todolist',JSON.stringify(todolist))
        showeachtask(todolist)
        }
        showeachtask(todolist)
        }
const showeachtask = (todolist)=> {
    var output =''
    for (var i in todolist) {
    output = output + todolist[i] + '<button id="' + i +'" onclick="deletetask(this)">remove</button>' + "<br>" + "<hr>";
    }
    document.getElementById("out").innerHTML = output;
    }
 const deletetask = (btn)=> {
    let todolist = JSON.parse(localStorage.getItem('todolist'))
    delete todolist[btn.id]
    localStorage.setItem('todolist',JSON.stringify(todolist.filter(task=>task!==null)))
    location.reload()
 }

