let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/sun.jpg') {
      myImage.setAttribute('src', 'images/moon.png');
    } else {
      myImage.setAttribute('src', 'images/sun.jpg');
    }
}
// let iceCream = 'chocolate';
// if (iceCream === 'chocolate') {
//   alert('我最喜欢巧克力冰激淋了。');
// } else {
//   alert('但是巧克力才是我的最爱呀……');
// }x
// document.querySelector("body").addEventListener("click",function(){
//     alert("别戳我，我怕疼。")
// });
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
  let myName = prompt('请输入你的名字。');
  if(!myName||myName==null){
    setUserName();
  }else{
    localStorage.setItem('name',myName);
    myHeading.innerHTML= 'welcome,' + myName;
  }
  
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'welcome,' + storedName;
}
myButton.onclick = function() {
  setUserName();
}
