function myFun(){
    var sk = document.getElementById("Navi");
    if(sk.style.display ==="none"){
        sk.style.display = "block";
        document.getElementById("icon").style.display = "none";
        document.getElementById("icon1").style.display = "block";
    }
    else{
        sk.style.display = "none";
        document.getElementById("icon").style.display = "block";
        document.getElementById("icon1").style.display = "none";
        }
}