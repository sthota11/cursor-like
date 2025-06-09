const form = document.getElementById("userForm");
const loading = document.getElementById("loading");
const success = document.getElementById("success");
form.addEventListener("submit", function(event) {
  event.preventDefault();
  loading.style.display = "block";
  success.style.display = "none";
  setTimeout(() => {
    loading.style.display = "none";
    success.style.display = "block";
  }, 2000);
});
form.addEventListener("reset", function() {
  loading.style.display = "none";
  success.style.display = "none";
});
