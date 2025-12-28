const icon = document.getElementById("icon");
const score = document.getElementById("score");
const allCategoryNames = document.querySelectorAll(".category-name");
const summarySection = document.getElementById("summary-section");
const url = "./data.json";

let dataArr = [];

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    dataArr = data;
    newCategory(data);
  })
  .catch((err) => {
    console.error("There was a problem laoding the JSON: ", err);
  });

const newCategory = (arr) => {
  let newCategory = ``;
  arr.forEach(({ category, icon, score }) => {
    newCategory += `
      <div class="category">
        <p class="category-name">
          <img alt="i" class="icon" src="${icon}" width="24" height="24" />${category}
        </p>
        <p class="category-score"><span class="score">${score}</span> / 100</p>
      </div>
    `;
  });
  summarySection.innerHTML = newCategory;
};
