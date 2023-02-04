const form = document.querySelector("#contact-form");

form.addEventListener("submit", event => {
  event.preventDefault();

  const name = form.elements.name.value;
  const number = form.elements.number.value;

  const xhr = new XMLHttpRequest();
  xhr.open("POST", "save-data.php", true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function() {
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
      console.log("Data saved successfully");
    }
  };
  xhr.send(`name=${encodeURIComponent(name)}&number=${encodeURIComponent(number)}`);
});