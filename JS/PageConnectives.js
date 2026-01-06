//JavaScript for Cortland Lehnen Portfolio Page
let ape = document.getElementById("ApeInSpace");
ape.onclick = pageChange("HTML/ApePage.html")
let fear = document.getElementById("BeatYourFears");
fear.onclick = pageChange("HTML/FearsPage.html");
let moose = document.getElementById("BeatAMoose");
moose.onclick = pageChange("HTML/MoosePage.html");

function pageChange(page)
{
    window.location.href = page
}