document.addEventListener("DOMContentLoaded", () => {
  const rows = document.querySelectorAll("table tr");
  rows.forEach((row) => {
    row.addEventListener("mouseover", () => {
      const editBtn = row.querySelector(".edit-btn");
      if (editBtn) {
        editBtn.style.display = "block";
      }
    });
    row.addEventListener("mouseout", () => {
      const editBtn = row.querySelector(".edit-btn");
      if (editBtn) {
        editBtn.style.display = "none";
      }
    });
  });
});
