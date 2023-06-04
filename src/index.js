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
  const data = document.getElementById("text-area");

  addButton.addEventListener("click",function() {
    const li = document.createElement("li");
    li.textContent = data.value;
    
    dataList.appendChild(li);
  })
}
