/*
//get width and height of viewport
let viewportHeight = window.innerHeight;
let viewportWidth = window.innerWidth;

//creates a sleep function to be used later
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

//auto scrolling function
async function autoScroll(){

  //declare and set variables
    const viewWidthDiff = viewportWidth / 4000;
    //gets the element being used
    const photoElem1 = document.getElementById("photo1");
    const photoElem2 = document.getElementById("photo2");
    const photoElem3 = document.getElementById("photo3");
    const photoElem4 = document.getElementById("photo4");
    const photoElem5 = document.getElementById("photo5");

    var scrollAmount = viewportHeight / 50;
    var currScroll = 0;

    //controls amt to scroll by
    for(currScroll; currScroll <= 12000; currScroll += 1.25){
 
      //animates the images coming out from the side
      //using switch case
      switch(currScroll){
        case 600:
          photoElem1.classList.add("visible");
          photoElem1.style.transform = "rotate(-50deg)";
          break;
        case 3000:

          //photoElem1.style.transform = "rotate(-50deg)";
          photoElem1.classList.remove("visible");
          photoElem1.classList.add("seeThrough");
          

          photoElem2.classList.add("visible");
          photoElem2.style.transform = "rotate(50deg)";

          break;
        case 4000:

          //photoElem2.style.transform = "rotate(50deg)";
          photoElem2.classList.remove("visible");
          photoElem2.classList.add("seeThrough");
          

          photoElem3.classList.add("visible");
          photoElem3.style.transform = "rotate(-50deg)";

          break;

        case 5000:

        //photoElem3.style.transform = "rotate(-50deg)";
        photoElem3.classList.remove("visible");
        photoElem3.classList.add("seeThrough");
        

        photoElem4.classList.add("visible");
        photoElem4.style.transform = "rotate(50deg)";
        break;

        case 6000:

          //photoElem4.style.transform = "rotate(50deg)";  
          photoElem4.classList.remove("visible");
          photoElem4.classList.add("seeThrough");

          photoElem5.classList.add("visible");
          photoElem5.style.transform = "rotate(-50deg)";

          break;

      };

      window.scrollBy(0, scrollAmount);
      await sleep(5);

      console.log(currScroll);

    }; 
 
};
*/

// Get width and height of viewport
let viewportHeight = window.innerHeight;
let viewportWidth = window.innerWidth;

// Sleep function
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Debounced image loading
function makeImageVisible(imgElem) {
  imgElem.style.transition = "opacity 1s ease-in-out";
  imgElem.style.opacity = 1;
  //imgElem.style.transform = `rotate(${rotation}deg)`;
}

function makeImageSeeThrough(imgElem, rotation) {
  imgElem.classList.remove("visible");
  imgElem.classList.add("seeThrough");
  imgElem.style.transform = `rotate(${rotation}deg)`;
}

/*async function autoScroll() {
  const photoElems = [
    document.getElementById("photo1"),
    document.getElementById("photo2"),
    document.getElementById("photo3"),
    document.getElementById("photo4"),
    document.getElementById("photo5")
  ]; 
  
  

  const scrollAmount = viewportHeight / 50;
  let currScroll = 0;

  while (currScroll <= 12000) {
    if (currScroll === 600) {
      photoElems[0].classList.add("visible");
      photoElems[0].style.transform = "rotate(-25deg)";
    } else if (currScroll === 3000) {
      photoElems[0].classList.remove("visible");
      photoElems[0].classList.add("seeThrough");

      photoElems[1].classList.add("visible");
      photoElems[1].style.transform = "rotate(25deg)";
    } else if (currScroll === 4000) {
      photoElems[1].classList.remove("visible");
      photoElems[1].classList.add("seeThrough");

      photoElems[2].classList.add("visible");
      photoElems[2].style.transform = "rotate(-25deg)";
    } else if (currScroll === 5000) {
      photoElems[2].classList.remove("visible");
      photoElems[2].classList.add("seeThrough");

      photoElems[3].classList.add("visible");
      photoElems[3].style.transform = "rotate(25deg)";
    } else if (currScroll === 6000) {
      photoElems[3].classList.remove("visible");
      photoElems[3].classList.add("seeThrough");

      photoElems[4].classList.add("visible");
      photoElems[4].style.transform = "rotate(-25deg)";
    }

    window.scrollBy(0, scrollAmount);
    await sleep(5);
    currScroll += 1.25;
  }
}
*/

function autoScrollPage(speed = 100, delay = 5) {
      //creates an array of the photo elements
      const photoElems = [
        document.getElementById("photo1"),
        document.getElementById("photo2"),
        document.getElementById("photo3"),
        document.getElementById("photo4"),
        document.getElementById("photo5")
      ];
      const scrollStep = speed;
      const scrollDelay = delay;
      var currScroll = scrollStep;
      const scrollInterval = setInterval(() => {
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        if (window.scrollY >= maxScroll) {
          clearInterval(scrollInterval);
        } else {
          window.scrollBy(0, scrollStep);
          if(currScroll === 200000){
            makeImageVisible(photoElems[0]);
          }else if(currScroll === 380000){
            makeImageVisible(photoElems[1]);
          }else if(currScroll === 8000){
            makeImageVisible(photoElems[2]);
          }else if(currScroll === 11000){
            makeImageVisible(photoElems[3]);
          }else if(currScroll === 14000){
            makeImageVisible(photoElems[4]);
          }
          console.log(currScroll);
          currScroll+=scrollStep;

        }
      }, scrollDelay);
    }

    document.getElementById("scrollBtn").addEventListener("click", () => {
      autoScrollPage();
    });
