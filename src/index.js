// console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = 'https://dog.ceo/api/breeds/list/all';

document.addEventListener("DOMContentLoaded", () => {
    fetch(`${imgUrl}`)
    .then(response => response.json())
    .then(data => data.message.forEach(element => {
        let newImg = document.createElement("img");
        let imgContain = document.querySelector("#dog-image-container");
        newImg.src = `${element}`;
        imgContain.appendChild(newImg);
    }))

    fetch(`${breedUrl}`)
    .then(response => response.json())
    .then(data => {Object.entries(data.message).forEach(element => {
        let newLi = document.createElement("li");
        let breedUl = document.querySelector("#dog-breeds");
        newLi.innerHTML = `${element}`;
        breedUl.append(newLi)
        // let newUl = document.createElement("ul");
        // if (element[1].length !== 0) {
        //     console.log(element)
        //     newUl.innerHTML = `${element[1]}`
        //     console.log(newUl)
        //     newLi.innerHTML = `${element[0]} ${newUl}`
        //     breedUl.append(newLi)
        // }


        // newUl.innerHTML = `${element[0]}`;
        // subLi.innerHTML = `${element[1]}`;
        // breedUl.append(newUl);
        // newUl.append(subLi);
    })})


    let select = document.getElementById("breed-dropdown")
    select.onchange = function() {
        let dropdownValue = select.value;
        let lis = document.querySelectorAll("li");
        for (let i = 0; i < lis.length; i++){
            if (lis[i].innerHTML.startsWith(`${dropdownValue}`)) {
                lis[i].style.display = "block";
            } else {
                lis[i].style.display = "none";
            }
        }

    }
    

})