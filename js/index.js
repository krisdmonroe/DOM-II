// Your code goes here
// Mouse Over.....................................................
document.querySelectorAll("a").forEach(elementA => {
    elementA.addEventListener("mouseover",() => {
      elementA.style.color= "green";
    })
  });

// Double Click.....................................................
document.querySelectorAll("h2").forEach(element => {
    element.addEventListener("dblclick",() => {
      element.style.color= "hotpink";
    })
  });
// Mouse Enter and Leave.....................................................
  const funbus = document.querySelector(".intro img");

  funbus.addEventListener("mouseenter", () => {
    funbus.style.transform = "scale(1.2)";
    funbus.style.transition = "transform 0.3s"
  });
  funbus.addEventListener("mouseleave", () => {
    funbus.style.transform = "scale(1)";
    funbus.style.transition = "transform 0.3s"
  });

const stopLink = document.querySelector(".nav-link");
stopLink.addEventListener("click", (event) => {
  event.preventDefault();
});
const prevent = document.querySelector(".intro h2");
prevent.addEventListener("keydown", (event1) => {
  event1.stopPropagation();
});
const prevent1 = document.querySelector(".nav:first-child ");
prevent1.addEventListener("mouseover", (event2) => {
  event2.stopPropagation();
});
// Resize.....................................................
window.addEventListener('resize', () => {
    funbus.src ="img/destination.jpg"
  });
// Scroll.....................................................
const footer = document.querySelector(".footer p")
document.addEventListener('scroll', ()  => {
  footer.style.color= "red";
});
//Drag and drop..............................
  let draggable = Draggable.create(".img-content img", {
    type:"x,y"
  });

  let draggable2 = Draggable.create(".intro img", {
    type:"x,y"
  });

  let draggable3 = Draggable.create(".content-destination img", {
    type:"x,y"
  });
// KeyDown.....................................................
const island = document.querySelector("*")
document.addEventListener('keydown', ()  => {
  island.style.color= "blue";
})
// Wheel.....................................................
document.querySelector(".intro img").addEventListener("wheel", myFunction);
function myFunction() {
    this.style.transform = "scale(3)";
};
// Select............Not Working.........................................
const welcomeTo = document.querySelector(".footer p");
object.addEventListener("select", () => {
    welcomeTo.style.color= "orange";
});
// Load.....................................................
const all = document.querySelector(".intro p")
document.addEventListener('keydown', ()  => {
  all.style.color= "red";
})
