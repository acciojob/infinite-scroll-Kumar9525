//your code here!
document.addEventListener("DOMContentLoaded", function () {
  const infiList = document.getElementById("infi-list");
  let itemCounter = 10;

  // Function to add list items
  function addItems() {
    for (let i = 0; i < 2; i++) {
      const li = document.createElement("li");
      li.textContent = "List Item " + (itemCounter + i + 1);
      infiList.appendChild(li);
    }
    itemCounter += 2;
  }

  // Function to check if user has scrolled to the bottom of the page
  function isAtBottom() {
    return window.innerHeight + window.scrollY >= document.body.offsetHeight;
  }

  // Add initial list items
  for (let i = 0; i < 10; i++) {
    const li = document.createElement("li");
    li.textContent = "List Item " + (i + 1);
    infiList.appendChild(li);
  }

  // Add event listener for scroll event
  window.addEventListener("scroll", function () {
    if (isAtBottom()) {
      addItems();
    }
  });
});

