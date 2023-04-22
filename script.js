//your JS code here. If required.
const colorSelect = document.getElementById("colorSelect");
const removeColorBtn = document.getElementById("removeColorBtn");

removeColorBtn.addEventListener("click", function() {
  const selectedColor = colorSelect.value;
  const options = colorSelect.options;
  for (let i = 0; i < options.length; i++) {
    if (options[i].value === selectedColor) {
      colorSelect.removeChild(options[i]);
      break;
    }
  }
});
