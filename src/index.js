// VARIABLES //
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const imgSection = document.querySelector("#dog-image-container");
//
const breedUrl = "https://dog.ceo/api/breeds/list/all";
const breedList = document.querySelector("#dog-breeds");
//
const breedName = document.getElementsByClassName("breed_names");
//
const dropDown = document.querySelector("#breed-dropdown");
//
let breedsArray;

// CHALLENGE 1 // 🏁
function getDogPics() {
  fetch(imgUrl)
    .then((resp) => resp.json())
    .then((images) => {
      const dogImgs = images.message;

      let imgsArray = dogImgs.map((img) => {
        let i = `<img src=${img}>`;
        return i;
      });
      imgsArray.forEach((element) => {
        imgSection.innerHTML += element;
      });
    });
}
getDogPics();

// CHALLENGE 2 // 🏁
function getDogBreeds() {
  fetch(breedUrl)
    .then((resp) => resp.json())
    .then((breeds) => {
      const breedsArray = Object.keys(breeds.message)
      breedsArray.forEach((breed) => {
        const newBreed = document.createElement("li");
        newBreed.classList = "breed_names";
        newBreed.textContent = breed;
        breedList.append(newBreed);
      });
    });
}
getDogBreeds();

// CHALLENGE 3 // 🏁
function changeColors() {
  breedList.addEventListener("click", (e) => {
    // console.log('clicked')
    e.target.style.color = "purple";
  });
}
changeColors();

// CHALLENGE 4 //
function filterBreeds() {
  dropDown.addEventListener("change", (e) => {
    const letter = e.target.value;
    const allBreeds = document.getElementsByClassName(".breed_name")


    const filteredBreeds = allBreeds.filter((breed) =>
      breed.startsWith(letter)
    )
    breedList.innerHTML = ''
    breedList.append(filteredBreeds)

  });
}
filterBreeds();
