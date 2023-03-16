window.onload = function () {
    var todolist = [];
    todolist = checklocal("todolist");
    document.getElementById("clear").onclick = function () {
        localStorage.clear();
        location.reload();
    };
    document.getElementById("add").onclick = function () {
        var todotask = document.getElementById("in")
            .value;
        todolist.push(todotask);
        localStorage.setItem("todolist", JSON.stringify(todolist));
        showeachtask(todolist);
    };
    showeachtask(todolist);
};
var deletetask = function (button) {
    var todolist = JSON.parse(localStorage.getItem("todolist") || "");
    delete todolist[button.id];
    localStorage.setItem("todolist", JSON.stringify(todolist.filter(function (task) { return task !== null; })));
    location.reload();
};
var showeachtask = function (todolist) {
    var output = "";
    for (var item in todolist) {
        output =
            output +
                todolist[item] +
                '<button id="' +
                item +
                '" onclick="deletetask(this)">remove</button>' +
                "<br>" +
                "<hr>";
    }
    document.getElementById("out").innerHTML = output;
};
var checklocal = function (key) {
    if (localStorage.getItem(key) !== null) {
        return JSON.parse(localStorage.getItem(key) || "");
    }
    return new Array();
};
