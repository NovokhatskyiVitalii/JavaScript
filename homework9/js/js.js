async function getResponse() {
  let response = await fetch(
    "https://api.punkapi.com/v2/beers?brewed_before=11-2017&abv_gt=6"
  );
  let content = await response.json();
  let key;
  let list = document.querySelector(".posts");
  for (key in content) {
    let data = content[key];
    list.innerHTML += `
        <li class="post" data-id="${data.id}" id="card-${data.id}">
        <img src="${data.image_url}" width="100">
        <h1>${data.description}</h1>
        </li>`;
  }

  let posts = document.querySelectorAll(".post");
  posts.forEach((el) => {
    el.addEventListener("click", () => {
      window.localStorage.setItem("selectedId", el.dataset.id);
    });
  });
}

getResponse();
