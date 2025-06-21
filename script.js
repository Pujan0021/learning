const addChallenge = document.querySelector('.challenge');
const completedChallenge = document.querySelector('.complete');
const addTasks = document.querySelector('.addTasks');
const addItems = document.querySelector('.addItems');
const removeItems = document.querySelector('.remove');
const imageRemove = document.querySelector('.fittnessImage');
const imageRemoveAddContent = document.querySelector('.fittness3');
const navSlider = document.querySelector('.navSlide-items');
const menuIcon = document.querySelector('.icon');
const exitIcon = document.querySelector('.exit');
const switchMode = document.querySelector('.switch');
const lightMode = document.querySelector('.fa-moon');
const darkMode = document.querySelector('.fa-sun');
const sliderModeSwitch = document.querySelector('.sliderModeSwitch');
const sliderMoonSwitch = document.querySelector('.sliderMoon');
const sliderSunSwitch = document.querySelector('.sliderSun');



// modesSwitch
switchMode.addEventListener('click', () => {
  document.body.classList.toggle('theme');
  if (document.body.classList.contains('theme')) {
    lightMode.style.display = 'none';
    darkMode.style.display = 'block';
    console.log('buttonPressed')
  } else {
    lightMode.style.display = 'block';
    darkMode.style.display = 'none';
  }
})

sliderModeSwitch.addEventListener('click', () => {
  document.body.classList.toggle('theme');
  if (document.body.classList.contains('theme')) {
    sliderMoonSwitch.style.display = 'none';
    sliderSunSwitch.style.display = 'block';
    console.log('buttonPressed')
  } else {
    sliderMoonSwitch.style.display = 'block';
    sliderSunSwitch.style.display = 'none';
  }
})


//Nav bar

menuIcon.addEventListener('click', function () {
  navSlider.style.display = 'flex';
  console.log("buttonclicked")
})


exitIcon.addEventListener('click', function () {
  navSlider.style.display = 'none';
})




addChallenge.addEventListener('click', function () {
  if (addTasks.value != "") {
    let createNewLi = document.createElement('li');
    let createSpan = document.createElement("span");
    createSpan.textContent = addTasks.value;
    createSpan.classList.add('spanItem');
    createNewLi.classList.add('item');
    // let newContent=createNewLi;
    addItems.appendChild(createNewLi);
    createNewLi.appendChild(createSpan);
    // console.log(createNewLi);
    addTasks.value = "";

    // x button
    let createNewButton = document.createElement('button');
    createNewButton.innerText = 'X';
    createNewButton.classList.add('remove');//creates class;
    createNewLi.appendChild(createNewButton);
    // console.log(createNewButton)
    // Done button
    let createCompleteButton = document.createElement('button');
    createCompleteButton.innerText = 'Done';
    createCompleteButton.classList.add('done');//creates class;
    createNewLi.appendChild(createCompleteButton);
    // console.log(createCompleteButton)
  } else {
    alert("Challenge not added")
  }

});
//remove each item/ event delegation (for the elements that are created using js)
document.addEventListener('click', function (event) {
  if (event.target.matches('.remove')) {
    //   let item=document.querySelector('.item');
    event.target.closest('.item').remove();//delete's the closest parent-element through its class name

  }

})
document.addEventListener('click', function (event) {
  if (event.target.matches('.done')) {

    // let spanItemContent=document.querySelector('.spanItem').innerText;
    event.target.closest('.item').remove();

    // completeButton.addEventListener('click', function () {
    //   imageRemove.remove();
    //   const itemText = document.querySelector('.spanItem');
    //   if (itemText) {
    //     console.log(itemText);
    //     if (event.target.matches('.spanItem')) {
    //       let removeImageByButton = document.querySelector(".fittness3");
    //       let newContent = document.createElement('p');
    //       newContent.classList.add('UlOfCompletedTask')
    //       newContent.textContent = itemText;
    //       removeImageByButton.appendChild(newContent);
    //       completeButton.disabled = true;
    //     }

    //   }


    //   // completeButton.disabled = true;
    // })



    // console.log(spanItemContent)
    //delete's the closest parent-element through its class name
    // const removeImageOfCompletedItem=document.querySelector('.fittness3');
  }
})



const viewDetails = document.querySelector('.detailButton');
const removeImage = document.querySelector('.fitness2');
const container = document.querySelector('.imageOfFittness2');
const greeting = document.querySelector('.greeting');
let nameOfUser = localStorage.getItem('name');
greeting.innerHTML = "Hi" + ", " + nameOfUser;
viewDetails.addEventListener('click', function () {
  removeImage.remove();
  let createDiv = document.createElement('div');
  let name = localStorage.getItem('name');
  let age = localStorage.getItem('age');
  let email = localStorage.getItem('email');
  let profession = localStorage.getItem('profession');
  createDiv.innerHTML = `
  <p> Name: ${name}</p>
  <p> DOB: ${age}</p>
  <p> Email: ${email}</p>
  <p> Profession: ${profession}</p> `;
  createDiv.classList.add('detailsFromInput');
  container.appendChild(createDiv);
  viewDetails.disabled = true;

})





