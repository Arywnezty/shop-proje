
  const mobileMenu=document.getElementById("sidebar");
function togglesidebar(){
  mobileMenu.classList.toggle("translate-x-full")
  sidebar.classList.toggle('translate-x-0');
}






fetch("https://fakestoreapi.com/products/category/men's clothing")
.then(res => res.json())
.then(json => renderbodypageman(json))
.catch(err =>{Toastify({
  text: "اطلاعات شما دارای خطا می باشد!",
  duration: 3000,
  destination: "https://github.com/apvarun/toastify-js",
  newWindow: true,
  close: true,
  gravity: "top", // `top` or `bottom`
  position: "center", // `left`, `center` or `right`
  stopOnFocus: true, // Prevents dismissing of toast on hover
  style: {
    background: "linear-gradient(to right, #ff5555, #ff0000)",
  },
  onClick: function(){
    location.reload()
  } // Callback after click
}).showToast();
});


function handleMenclick(evt){
  evt.preventDefault();

const href=evt.target.getAttribute("href")

 history.pushState({},"",href)
}



function renderbodypageman(items){
    const menClothes=document.getElementById("men-clothes");
const template=items.map(item=>{
return `
<div class="w-full max-w-[65rem] flex flex-col gap-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
  <img 
    src="${item.image}" 
    alt="${item.title}" 
    class="w-full h-48 object-contain"
  >
  <div class="p-4 flex flex-col gap-2">
  <p class="text-gray-400">${item.category}</p>
    <h2 class="text-lg font-medium text-gray-900 line-clamp-2">${item.title}</h2>
    <span class="text-lg font-bold text-indigo-600">${item.price} تومان$</span>
  </div>
</div>
`
}).join("");

menClothes.innerHTML=template;
Toastify({
    text: "به فروشگاه خود خوش آمدید!",
    duration: 3000,
    destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: false,
    gravity: "top", // `top` or `bottom`
    position: "center", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
    onClick: function(){} // Callback after click
  }).showToast();
}



fetch("https://fakestoreapi.com/products/category/women's clothing")
.then(res => res.json())
.then(json => renderbodypagewoman(json))
.catch(err =>{Toastify({
  text: "اطلاعات شما دارای خطا می باشد!",
  duration: 3000,
  destination: "https://github.com/apvarun/toastify-js",
  newWindow: true,
  close: true,
  gravity: "top", // `top` or `bottom`
  position: "center", // `left`, `center` or `right`
  stopOnFocus: true, // Prevents dismissing of toast on hover
  style: {
    background: "linear-gradient(to right, #ff5555, #ff0000)",
  },
  onClick: function(){
    location.reload()
  } // Callback after click
}).showToast();});


function renderbodypagewoman(items){
    const womenClothes=document.getElementById("women-clothes");
const template=items.map(item=>{
return `
<div class="w-full max-w-[65rem] flex flex-col gap-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
  <img 
    src="${item.image}" 
    alt="${item.title}" 
    class="w-full h-48 object-contain"
  >
  <div class="p-4 flex flex-col gap-2">
  <p class="text-gray-400">${item.category}</p>
    <h2 class="text-lg font-medium text-gray-900 line-clamp-2">${item.title}</h2>
    <span class="text-lg font-bold text-indigo-600">${item.price} تومان$</span>
  </div>
</div>
`
}).join("");

womenClothes.innerHTML=template;

}