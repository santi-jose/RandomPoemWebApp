import { fetchData } from "/js/fetchData.js";
import { renderPage } from "/js/renderPage.js";

// render page data when DOM content is loaded
document.addEventListener("DOMContentLoaded", async ()=>{
    const poemData = await fetchData();
    renderPage(poemData);
})

// add event listener to GeneratePoem button
const generatePoem = document.getElementById("generate-poem");
generatePoem.addEventListener("click", async ()=>{
    const poemData = await fetchData();
    renderPage(poemData);
});