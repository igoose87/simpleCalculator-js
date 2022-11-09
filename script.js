function insert(num) {
    document.form.textview.value += num;
}
 
function clearAll() {
    document.form.textview.value = "";
}
 
function clearLastSymbol() {
    let str = document.form.textview.value;
    document.form.textview.value = str.substring(0, str.length - 1)
}
 
function equal() {
    let str = document.form.textview.value;
    if (str)
        document.form.textview.value = eval(str);
}
