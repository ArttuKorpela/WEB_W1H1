import "./styles.css";

if (document.readyState !== "loading") {
  console.log("document is ready");
  initializeCode();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    console.log("Document is ready soon.");
    initializeCode();
  });
}

function initializeCode() {
  const firstButton = document.getElementById("my-button");
  const title = document.getElementById("title");

  firstButton.addEventListener("click", function () {
    console.log("Hello World!");
    title.innerText = "My notebook"; 
  });
  
  const addButton = document.getElementById("add-data");
  const dataList = document.getElementById("data-list");
  
  addButton.addEventListener("click",function() {
    const li = document.createElement("li");
    li.textContent = "Arbitrary text";
    
    dataList.appendChild(li);
  })
}
