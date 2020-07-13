window.onscroll = function () {

  myFunc();
};

function myFunc() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
    
  } else {
    document.getElementById("navbar").style.top = "-60px";
  }

}
