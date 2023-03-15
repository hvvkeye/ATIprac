window.onload = function () {
  let todolist: Array<string> = [];
  todolist = checklocal("todolist");
  document.getElementById("clear")!.onclick = function () {
    localStorage.clear();
    location.reload();
  };
  document.getElementById("add")!.onclick = function () {
    let todotask: string = (<HTMLInputElement>document.getElementById("in"))
      .value;
    todolist.push(todotask);
    localStorage.setItem("todolist", JSON.stringify(todolist));
    showeachtask(todolist);
  };
  showeachtask(todolist);
};
const showeachtask = (todolist: Array<string>) => {
  var output = "";
  for (let i in todolist) {
    output =
      output +
      todolist[i] +
      '<button id="' +
      i +
      '" onclick="deletetask(this)">remove</button>' +
      "<br>" +
      "<hr>";
  }
  document.getElementById("out")!.innerHTML = output;
};
const deletetask = (button: any) => {
  let todolist: Array<string> = JSON.parse(
    localStorage.getItem("todolist") || ""
  );
  delete todolist[button.id];
  localStorage.setItem(
    "todolist",
    JSON.stringify(todolist.filter((task) => task !== null))
  );
  location.reload();
};
const checklocal = function (key: string): Array<string> {
  if (localStorage.getItem(key) !== null) {
    return JSON.parse(localStorage.getItem(key) || "");
  }
  return new Array<string>();
};
