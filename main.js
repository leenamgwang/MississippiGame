function generate(){
    const level = document.getElementById("lv").value;
    console.log(level);
    let a = b = c = 0, res = "";
    a = Math.floor(Math.random() * level);
    b = Math.floor(Math.random() * level);
    c = Math.floor(Math.random() * level);
    console.log(a + ", " + b + ", " + c);
    res = "Mi";
    for (let i = 0; i < a; i++) {
        for (let j = 0; j < b; j++) {
            res += "s";
        }
        res += "i";
    }
    for (let i = 0; i < c; i++) {
        res += "p";
    }
    res += "i";
    return res;
}
function main(){
    const res = generate();
    const back = document.getElementById("back");
    back.innerText = res;
    const mes = document.getElementById("mes");
    if (res == "Mississippi") {
        back.style.color = "steelblue";
        mes.style.color = "steelblue";
        mes.innerText = "Congratulations! Your Mississippi was authentic!";
    } else {
        back.style.color = "tomato";
        mes.style.color = "tomato";
        mes.innerText = "Oops! Your Mississippi appeared to be a counterfeit.";
    }
    document.getElementById("retry").innerText="Retry!";
}
document.getElementById("retry").addEventListener("click", main);