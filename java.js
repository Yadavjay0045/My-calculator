let display=' ';
function press(key) {
  display += key;
  document.querySelector("#display").value = display;
}
  document.querySelector("#display").value = display;
function reset()
{
    
  document.querySelector("#display").value = '';
  display='  ';
}
function result()
{
   let r=eval(display);
      document.querySelector("#display").value =r;
        display=r;

}
