const wrapper = document.querySelector(".sliderwrapper")

console.log(wrapper);

//  wrapper.style.backgroundColor="pink"

// wrapper.style.transform="translateX(-100vw)"

const menuitems =document.querySelectorAll(".menuitem")

const products = [
    {
      id: 1,
      title: "Air Force",
      price: 119,
      colors: [
        {
          code: "black",
          img: "./img/air.png",
        },
        {
          code: "darkblue",
          img: "./img/air2.png",
        },
      ],
    },
    {
      id: 2,
      title: "Air Jordan",
      price: 149,
      colors: [
        {
          code: "lightgray",
          img: "./img/jordan.png",
        },
        {
          code: "green",
          img: "./img/jordan2.png",
        },
      ],
    },
    {
      id: 3,
      title: "Blazer",
      price: 109,
      colors: [
        {
          code: "lightgray",
          img: "./img/blazer.png",
        },
        {
          code: "green",
          img: "./img/blazer2.png",
        },
      ],
    },
    {
      id: 4,
      title: "Crater",
      price: 129,
      colors: [
        {
          code: "black",
          img: "./img/crater.png",
        },
        {
          code: "lightgray",
          img: "./img/crater2.png",
        },
      ],
    },
    {
      id: 5,
      title: "Hippie",
      price: 99,
      colors: [
        {
          code: "gray",
          img: "./img/hippie.png",
        },
        {
          code: "black",
          img: "./img/hippie2.png",
        },
      ],
    },
  ];
// new code


  let choosenroduct=products[0]
 
  const currentBG=document.querySelectorAll(".slider");
  const currentProductImg=document.querySelector(".productImg");
  const currentProductTitle=document.querySelector(".productTitle");
  const currentProductPrice=document.querySelector(".productPrice");
  const currentProductColors=document.querySelectorAll(".color");
  const currentProductsizes=document.querySelectorAll(".size");
    

menuitems.forEach((item,index)=>{
    // new code
    



    
    // new code

    item.addEventListener("click", () => {
        

      // item.classList.add(`bg-url-${index % 4}`);

        //change the current slide
        wrapper.style.transform=`translateX(${-100 * index}vw)`;
        console.log("you clicked"+index);
        
        //change the choosen product
        choosenroduct=products[index];
    
       currentProductTitle.textContent =choosenroduct.title;
       currentProductPrice.textContent=choosenroduct.price;
       currentProductImg.src= choosenroduct.colors[0].img;
       
      
       currentProductColors.forEach((color, index)=>{
        
        console.log("you clicked"+index);
        color.style.backgroundColor = choosenroduct.colors[index].code;
       } );
    });
});

currentProductColors.forEach((color,index)=>{


  color.addEventListener("click",()=>{
    currentProductImg.src= choosenroduct.colors[index].img
  })

})

currentProductsizes.forEach((size) => {

  size.addEventListener("click",() => {

    currentProductsizes.forEach((size) => {

      size.style.backgroundColor="white";
      size.style.color="black";
    });

    size.style.backgroundColor="black";
    size.style.color="white";
  });
  });

  const productButton = document.querySelector(".productButton");
  const payment = document.querySelector(".payment");
  const close = document.querySelector(".close");
  
  productButton.addEventListener("click",()=>{
    payment.style.display="flex"
  })

  close.addEventListener("click",()=>{
    payment.style.display="none"
  })
