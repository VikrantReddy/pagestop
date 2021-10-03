function addOverlay() {
  document.getElementById("overlay").style.opacity = 1;
  document.getElementById("overlay").style.visibility = "visible";
  $("body").css({ position: "sticky", overflow: "hidden" });
}

function removeOverlay() {
  document.getElementById("overlay").style.opacity = 0;
  document.getElementById("overlay").style.visibility = "hidden";
}

document.getElementById("service-1").addEventListener("click", addOverlay);
document.getElementById("service-2").addEventListener("click", addOverlay);
document.getElementById("service-3").addEventListener("click", addOverlay);
document.getElementById("service-4").addEventListener("click", addOverlay);

document.getElementById("overlay").addEventListener("click", removeOverlay);
