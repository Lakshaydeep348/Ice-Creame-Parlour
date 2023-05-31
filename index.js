const menuEl = document.getElementById("menuButton");
const cancelBtn = document.querySelectorAll("#cancel");
const canc = Array.prototype.slice.call(cancelBtn);
const listEl = document.querySelectorAll(".items");
const liquidEl = document.getElementById("liquid");
const holderEl = document.getElementById("holder");
const toppingsEl = document.getElementById("toppings");
const statusEl = document.getElementById("status");
const array = Array.prototype.slice.call(listEl);
const listEl2 = document.querySelectorAll(".items2");
const array2 = Array.prototype.slice.call(listEl2);
const listEl3 = document.querySelectorAll(".items3");
const array3 = Array.prototype.slice.call(listEl3);
const listEl4 = document.querySelectorAll(".items4");
const array4 = Array.prototype.slice.call(listEl4);
const divEl = document.querySelector(".status");
const statuslist = document.getElementById("statusList");
const slide = document.getElementById("slide");
let flavour = "";
let liquid = "";
let holder = "";
let toppings = "";



/**
 * !Check Store Timings
 **/
const date = new Date();
const timeEl = date.getHours();
let is_Shop_Open = true;
if (timeEl>=8 && timeEl<=20) {
  is_Shop_Open = true;

} else {
slide.innerText = `OOPS SORRY WE ARE CLOSED
 SHOP TIMINGS ARE 8:00 AM TO 8:00PM`;
is_Shop_Open = false;
}




/**
 * !Selection of items
 **/

array.map((items) => {
  items.addEventListener("click", () => {
    flavour = items.innerText;
    menu.style.display = "none";
    liquidEl.style.display = "block";
  });
});

array2.map((items) => {
  items.addEventListener("click", () => {
    liquid = items.innerText;
    liquidEl.style.display = "none";
    holderEl.style.display = "block";
  });
});
array3.map((items) => {
  items.addEventListener("click", () => {
    holder = items.innerText;
    holderEl.style.display = "none";
    toppingsEl.style.display = "block";
  });
});
array4.map((items) => {
  items.addEventListener("click", () => {
    toppings = items.innerText;
    toppingsEl.style.display = "none";
    statusEl.style.display = "flex";
    Status();
  });
});

menuEl.addEventListener("click", () => {
  menu.style.display = "block";
});

canc.map((items) => {
  items.addEventListener("click", () => {
    menu.style.display = "none";
    toppingsEl.style.display = "none";
    holderEl.style.display = "none";
    liquidEl.style.display = "none";
  });
});




/**
 * !Tracker update
 **/



function Status() {
  let order = (time, work) => {
    return new Promise((resolve, reject) => {
      if (is_Shop_Open) {
        setTimeout(() => {
          resolve(work());
        }, time);
      } else {
        reject();
      }
    });
  };

  order(1000, () => {
    let myLi = document.createElement("li");
    myLi.innerHTML = flavour + " WOW! great choice";
    statuslist.appendChild(myLi);
    myLi.classList.add("myLi");
  })
    .then(() => {
      return order(1000, () => {
        let myLi = document.createElement("li");
        myLi.innerHTML = "Your order is started to prepared";
        statuslist.appendChild(myLi);
        myLi.classList.add("myLi");
      });
    })
    .then(() => {
      return order(10000, () => {
        let myLi = document.createElement("li");
        myLi.innerHTML = "Fruits has been chopped";
        statuslist.appendChild(myLi);
        myLi.classList.add("myLi");
      });
    })
    .then(() => {
      return order(5000, () => {
        let myLi = document.createElement("li");
        myLi.innerHTML = liquid + " is added ";
        statuslist.appendChild(myLi);
        myLi.classList.add("myLi");
      });
    })
    .then(() => {
      return order(5000, () => {
        let myLi = document.createElement("li");
        myLi.innerHTML = "Machine is Started";
        statuslist.appendChild(myLi);
        myLi.classList.add("myLi");
      });
    })
    .then(() => {
      return order(5000, () => {
        let myLi = document.createElement("li");
        myLi.innerHTML = "Finally filler is ready lets make it more delicious";
        statuslist.appendChild(myLi);
        myLi.classList.add("myLi");
      });
    })
    .then(() => {
      return order(5000, () => {
        {
          let myLi = document.createElement("li");
          myLi.innerHTML = "Filler is filled inside the " + holder;
          statuslist.appendChild(myLi);
          myLi.classList.add("myLi");
        }
      });
    })
    .then(() => {
      return order(5000, () => {
        {
          let myLi = document.createElement("li");
          myLi.innerHTML = toppings + " is added to your Ice cream";
          statuslist.appendChild(myLi);
          myLi.classList.add("myLi");
        }
      });
    })
    .then(() => {
      return order(5000, () => {
        {
          statuslist.style.display = "none";
          const headingEl = document.createElement("h2");
          headingEl.innerHTML = "Please collect your Order";
          statusEl.appendChild(headingEl);
        }
      });
    })
    .catch(() => {
      
          statuslist.style.display = "none";
          const headingEl = document.createElement("h2");
          headingEl.innerHTML = "Oops we are closed";
          statusEl.appendChild(headingEl);
        
    })

    .finally(() => {
      console.log("DAY ENDED SHOP IS CLOSED");
    });
}
