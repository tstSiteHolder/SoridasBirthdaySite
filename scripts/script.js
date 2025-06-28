function autoScrollPage(speed = 1000, delay = 5) {

      const scrollStep = speed;
      const scrollDelay = delay;
      var currScroll = scrollStep;

      document.getElementById("scrollBtn").classList.add("seeThrough");
    
      //scrolls down the screen
      const scrollInterval = setInterval(() => {
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        if (window.scrollY >= maxScroll) {
          clearInterval(scrollInterval);
        } else {
          window.scrollBy(0, scrollStep);

          //checks when to display the 1st image
          if(currScroll === 10000){

            document.getElementById("photo1").classList.remove("seeThrough");
            document.getElementById("photo1").classList.add("visible");

          }
          currScroll +=scrollStep;
        }
      }, scrollDelay);
    }

    //slideshow script
const photoArray = [

  "../images/Screenshot_20201025-190132_Instagram.jpg", //0
  "../images/IMG_20200402_172518_555.jpg", //1
  "../images/20230519_231909.jpg", //2
  "../images/20220212_172757.jpg", //3
  "../images/20211205_153706.jpg" //4

];

let currPic = "";
let index = 0;

function nextPhoto(){

  index++;
  displayPic(index);

}

function prevPhoto(){

  console.log(index);

index--;
displayPic(index);

}

function displayPic(){
 
  if(document.getElementById("polaroidPic").classList.contains("concert")){

    document.getElementById("polaroidPic").classList.remove("concert");

  }else{

    if(index === -1){

      index = 4;

    }else if(index === 2){

      document.getElementById("polaroidPic").classList.add("concert");
      

    }else if(index === 5){

      index = 0;

  }

}
  document.getElementById("polaroidPic").src=photoArray[index];
  console.log(document.getElementById("polaroidPic").offsetWidth);

}

    //listens for the button click and calls the correct func
    document.getElementById("scrollBtn").addEventListener("click", () => {
      autoScrollPage();
    });

    document.getElementById("nextBtn").addEventListener("click", () => {
      nextPhoto();
    });

    document.getElementById("prevBtn").addEventListener("click", () => {
      prevPhoto();
    });
