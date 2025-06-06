const root=document.getElementById("root");
  const mobileMenu=document.getElementById("sidebar");
function togglesidebar(){
  mobileMenu.classList.toggle("translate-x-full")
  sidebar.classList.toggle('translate-x-0');
}

function getdataMen(){
 const result = fetch("https://fakestoreapi.com/products/category/men's%20clothing")
.then(res => res.json())
.catch(err =>Toastify({
  text: "اطلاعات شما دارای خطا می باشد!",
  duration: 3000,
  // destination: "https://github.com/apvarun/toastify-js",
  // newWindow: true,
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
}).showToast());

return result;
}
async function handleGetMenpage(){
  const data= await getdataMen();
  renderbodypageman(data);
}
handleGetMenpage();

function getdataWomen(){
 const result = fetch("https://fakestoreapi.com/products/category/women's clothing")
  .then(res => res.json())
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
  }).showToast()});
  return result;
}
async function handleGetWomenpage(){
  const data= await getdataWomen();
  renderbodypagewoman(data);
}
handleGetWomenpage();

function getdatajewelery(){
  const result = fetch("https://fakestoreapi.com/products/category/jewelery")
  .then(res => res.json())
  .catch(err =>Toastify({
    text: "اطلاعات شما دارای خطا می باشد!",
    duration: 3000,
    // destination: "https://github.com/apvarun/toastify-js",
    // newWindow: true,
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
  }).showToast());
  
  return result;
}
async function handleGetjewelerypage(){
  const data= await getdatajewelery();
  renderbodypagejewelery(data);
}
handleGetjewelerypage();

function getdataelectronic(){
  const result = fetch("https://fakestoreapi.com/products/category/electronics")
  .then(res => res.json())
  .catch(err =>Toastify({
    text: "اطلاعات شما دارای خطا می باشد!",
    duration: 3000,
    // destination: "https://github.com/apvarun/toastify-js",
    // newWindow: true,
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
  }).showToast());
  
  return result;
}
async function handleGetelectronicpage(){
  const data= await getdataelectronic();
  renderbodypageelectronic(data);
}
handleGetelectronicpage();


function handleMenclick(evt){
  evt.preventDefault();
  
  const href=evt.target.getAttribute("href")
  
  history.pushState({},"",href);
  
  checkstate();
}

function handleWomenclick(evt){
  evt.preventDefault();
  
  const href=evt.target.getAttribute("href")
  
  history.pushState({},"",href);
  
  checkstate();
}

function handlejeweleryclick(evt){
  evt.preventDefault();
  
  const href=evt.target.getAttribute("href")
  
  history.pushState({},"",href);
  
  checkstate();
}

function handleelectronicclick(evt){
  evt.preventDefault();
  
  const href=evt.target.getAttribute("href")
  
  history.pushState({},"",href);
  
  checkstate();
}


function renderbodypageman(items){
  let menClothes=document.getElementById("men-clothes");
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

function renderbodypagejewelery(items){
  const jewelery=document.getElementById("jewelery");
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
  
  jewelery.innerHTML=template;
}

function renderbodypageelectronic(items){
  const electronic=document.getElementById("electronic");
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
  
  electronic.innerHTML=template;
}

function rendermenpage(){
root.innerHTML=`
<div class="grid grid-cols-1 gap-4 md:grid-cols-4 px-4 rounded-md mt-5">
<div class="w-full h-96 p-1 bg-slate-200 animate-pulse">
   <div class="w-full bg-slate-300 h-64">
   </div>
   <div class="w-1/5 h-6 rounded-lg bg-slate-300 mt-4"></div>
   <div class="w-1/7 h-6 rounded-lg bg-slate-300 mt-4"></div>
   <div class="w-1/3 h-6 rounded-lg bg-slate-300 mt-4"></div>
</div>
<div class="w-full h-96 p-1 bg-slate-200 animate-pulse">
 <div class="w-full bg-slate-300 h-64">
 </div>
 <div class="w-1/5 h-6 rounded-lg bg-slate-300 mt-4"></div>
 <div class="w-1/7 h-6 rounded-lg bg-slate-300 mt-4"></div>
 <div class="w-1/3 h-6 rounded-lg bg-slate-300 mt-4"></div>
</div>
<div class="w-full h-96 p-1 bg-slate-200 animate-pulse">
<div class="w-full bg-slate-300 h-64">
</div>
<div class="w-1/5 h-6 rounded-lg bg-slate-300 mt-4"></div>
<div class="w-1/7 h-6 rounded-lg bg-slate-300 mt-4"></div>
<div class="w-1/3 h-6 rounded-lg bg-slate-300 mt-4"></div>
</div>
<div class="w-full h-96 p-1 bg-slate-200 animate-pulse">
<div class="w-full bg-slate-300 h-64">
</div>
<div class="w-1/5 h-6 rounded-lg bg-slate-300 mt-4"></div>
<div class="w-1/7 h-6 rounded-lg bg-slate-300 mt-4"></div>
<div class="w-1/3 h-6 rounded-lg bg-slate-300 mt-4"></div>
</div>
</div>
`
fetch("https://fakestoreapi.com/products/category/men's%20clothing")
.then(res=>res.json())
.then(json=>renderMendata(json))
.catch(err=> Toastify({
  text: "اطلاعات شما دارای خطا می باشد!",
  duration: 3000,
  // destination: "https://github.com/apvarun/toastify-js",
  // newWindow: true,
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
}).showToast());

function renderMendata(data){
const template=data.map(item =>{
  return`
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

const container=`<div class="grid grid-cols-1 md:grid-cols-4 gap-4 container mt-5">${template}</div>`
root.innerHTML=container;
}
}

function renderwomenpage(){
  root.innerHTML=`
<div class="grid grid-cols-1 gap-4 md:grid-cols-4 px-4 rounded-md mt-5">
<div class="w-full h-96 p-1 bg-slate-200 animate-pulse">
   <div class="w-full bg-slate-300 h-64">
   </div>
   <div class="w-1/5 h-6 rounded-lg bg-slate-300 mt-4"></div>
   <div class="w-1/7 h-6 rounded-lg bg-slate-300 mt-4"></div>
   <div class="w-1/3 h-6 rounded-lg bg-slate-300 mt-4"></div>
</div>
<div class="w-full h-96 p-1 bg-slate-200 animate-pulse">
 <div class="w-full bg-slate-300 h-64">
 </div>
 <div class="w-1/5 h-6 rounded-lg bg-slate-300 mt-4"></div>
 <div class="w-1/7 h-6 rounded-lg bg-slate-300 mt-4"></div>
 <div class="w-1/3 h-6 rounded-lg bg-slate-300 mt-4"></div>
</div>
<div class="w-full h-96 p-1 bg-slate-200 animate-pulse">
<div class="w-full bg-slate-300 h-64">
</div>
<div class="w-1/5 h-6 rounded-lg bg-slate-300 mt-4"></div>
<div class="w-1/7 h-6 rounded-lg bg-slate-300 mt-4"></div>
<div class="w-1/3 h-6 rounded-lg bg-slate-300 mt-4"></div>
</div>
<div class="w-full h-96 p-1 bg-slate-200 animate-pulse">
<div class="w-full bg-slate-300 h-64">
</div>
<div class="w-1/5 h-6 rounded-lg bg-slate-300 mt-4"></div>
<div class="w-1/7 h-6 rounded-lg bg-slate-300 mt-4"></div>
<div class="w-1/3 h-6 rounded-lg bg-slate-300 mt-4"></div>
</div>
</div>
`
fetch("https://fakestoreapi.com/products/category/women's clothing")
  .then(res => res.json())
  .then(json=>renderWomendata(json))
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
  }).showToast()});
  function renderWomendata(data){
    const template=data.map(item =>{
      return`
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
    
    const container=`<div class="grid grid-cols-1 md:grid-cols-4 gap-4 container mt-5">${template}</div>`
    root.innerHTML=container;
  }
}

function renderjewelerypage(){
  root.innerHTML=`
  <div class="grid grid-cols-1 gap-4 md:grid-cols-4 px-4 rounded-md mt-5">
  <div class="w-full h-96 p-1 bg-slate-200 animate-pulse">
     <div class="w-full bg-slate-300 h-64">
     </div>
     <div class="w-1/5 h-6 rounded-lg bg-slate-300 mt-4"></div>
     <div class="w-1/7 h-6 rounded-lg bg-slate-300 mt-4"></div>
     <div class="w-1/3 h-6 rounded-lg bg-slate-300 mt-4"></div>
  </div>
  <div class="w-full h-96 p-1 bg-slate-200 animate-pulse">
   <div class="w-full bg-slate-300 h-64">
   </div>
   <div class="w-1/5 h-6 rounded-lg bg-slate-300 mt-4"></div>
   <div class="w-1/7 h-6 rounded-lg bg-slate-300 mt-4"></div>
   <div class="w-1/3 h-6 rounded-lg bg-slate-300 mt-4"></div>
  </div>
  <div class="w-full h-96 p-1 bg-slate-200 animate-pulse">
  <div class="w-full bg-slate-300 h-64">
  </div>
  <div class="w-1/5 h-6 rounded-lg bg-slate-300 mt-4"></div>
  <div class="w-1/7 h-6 rounded-lg bg-slate-300 mt-4"></div>
  <div class="w-1/3 h-6 rounded-lg bg-slate-300 mt-4"></div>
  </div>
  <div class="w-full h-96 p-1 bg-slate-200 animate-pulse">
  <div class="w-full bg-slate-300 h-64">
  </div>
  <div class="w-1/5 h-6 rounded-lg bg-slate-300 mt-4"></div>
  <div class="w-1/7 h-6 rounded-lg bg-slate-300 mt-4"></div>
  <div class="w-1/3 h-6 rounded-lg bg-slate-300 mt-4"></div>
  </div>
  </div>
  `
  fetch("https://fakestoreapi.com/products/category/jewelery")
  .then(res => res.json())
  .then(json=>renderjewelerydata(json))
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
  }).showToast()});
  function renderjewelerydata(data){
    const template=data.map(item =>{
      return`
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
    
    const container=`<div class="grid grid-cols-1 md:grid-cols-4 gap-4 container mt-5">${template}</div>`
    root.innerHTML=container;
  }
}

function renderelectronicpage(){
  root.innerHTML=`
  <div class="grid grid-cols-1 gap-4 md:grid-cols-4 px-4 rounded-md mt-5">
  <div class="w-full h-96 p-1 bg-slate-200 animate-pulse">
     <div class="w-full bg-slate-300 h-64">
     </div>
     <div class="w-1/5 h-6 rounded-lg bg-slate-300 mt-4"></div>
     <div class="w-1/7 h-6 rounded-lg bg-slate-300 mt-4"></div>
     <div class="w-1/3 h-6 rounded-lg bg-slate-300 mt-4"></div>
  </div>
  <div class="w-full h-96 p-1 bg-slate-200 animate-pulse">
   <div class="w-full bg-slate-300 h-64">
   </div>
   <div class="w-1/5 h-6 rounded-lg bg-slate-300 mt-4"></div>
   <div class="w-1/7 h-6 rounded-lg bg-slate-300 mt-4"></div>
   <div class="w-1/3 h-6 rounded-lg bg-slate-300 mt-4"></div>
  </div>
  <div class="w-full h-96 p-1 bg-slate-200 animate-pulse">
  <div class="w-full bg-slate-300 h-64">
  </div>
  <div class="w-1/5 h-6 rounded-lg bg-slate-300 mt-4"></div>
  <div class="w-1/7 h-6 rounded-lg bg-slate-300 mt-4"></div>
  <div class="w-1/3 h-6 rounded-lg bg-slate-300 mt-4"></div>
  </div>
  <div class="w-full h-96 p-1 bg-slate-200 animate-pulse">
  <div class="w-full bg-slate-300 h-64">
  </div>
  <div class="w-1/5 h-6 rounded-lg bg-slate-300 mt-4"></div>
  <div class="w-1/7 h-6 rounded-lg bg-slate-300 mt-4"></div>
  <div class="w-1/3 h-6 rounded-lg bg-slate-300 mt-4"></div>
  </div>
  </div>
  `
  fetch("https://fakestoreapi.com/products/category/electronics")
  .then(res => res.json())
  .then(json=>renderelectronicdata(json))
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
  }).showToast()});
  function renderelectronicdata(data){
    const template=data.map(item =>{
      return`
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
    
    const container=`<div class="grid grid-cols-1 md:grid-cols-4 gap-4 container mt-5">${template}</div>`
    root.innerHTML=container;
  }
}
async function renderMainpage(){
  const Template= ` 
  <div class="container-lg hidden lg:block">
      <img src="./assets/images/header.jpg" alt="هدر دسکتاپ" class="w-full h-auto">
  </div>

  <div class="hidden lg:flex justify-center items-center gap-8 container py-12">
      <!-- اسلاید اول -->
      <div class="border border-gray-200 rounded-lg p-6 text-center w-full max-w-xs hover:shadow-lg hover:border-gray-500 transition-all duration-300 group">
          <div class="flex justify-center">
              <img src="./assets/svg/new-document-svgrepo-com.svg" alt="تازه ترین پوشاک" class="w-16 h-16 group-hover:scale-110 transition-transform duration-300">
          </div>
          <span class="block py-4 text-lg font-bold">تازه ترین پوشاک</span>
          <div class="border-t border-red-500 w-16 mx-auto my-4 group-hover:w-24 transition-all duration-300"></div>
          <p class="text-gray-600">تمامی گل‌های ارائه شده به صورت روزانه تهیه می‌شوند و مطابق با تصاویر درج شده در سایت خواهند بود.</p>
      </div>
  
      <!-- اسلاید دوم -->
      <div class="border border-gray-200 rounded-lg p-6 text-center w-full max-w-xs hover:shadow-lg hover:border-gray-500 transition-all duration-300 group">
          <div class="flex justify-center">
              <img src="./assets/svg/car-round-650-svgrepo-com.svg" alt="تحویل رایگان" class="w-16 h-16 group-hover:scale-110 transition-transform duration-300">
          </div>
          <span class="block py-4 text-lg font-bold">تحویل رایگان</span>
          <div class="border-t border-red-500 w-16 mx-auto my-4 group-hover:w-24 transition-all duration-300"></div>
          <p class="text-gray-600">در صورتی که محل دریافت سفارش شما تهران است، این مجموعه هزینه‌ای جهت ارسال محصول از شما دریافت نمی‌کند.</p>
      </div>
  
      <!-- اسلاید سوم -->
      <div class="border border-gray-200 rounded-lg p-6 text-center w-full max-w-xs hover:shadow-lg hover:border-gray-500 transition-all duration-300 group">
          <div class="flex justify-center">
              <img src="./assets/svg/phone-signal-svgrepo-com.svg" alt="پشتیبانی" class="w-16 h-16 group-hover:scale-110 transition-transform duration-300">
          </div>
          <span class="block py-4 text-lg font-bold">پشتیبانی همه روزه</span>
          <div class="border-t border-red-500 w-16 mx-auto my-4 group-hover:w-24 transition-all duration-300"></div>
          <p class="text-blue-700">02186046127</p>
          <p class="text-blue-700">09034644222</p>
          <p class="text-blue-700">02188713245</p>
      </div>
  </div>

  <div class="container-md flex flex-col p-4 gap-4 md:grid grid-cols-4">
      <div class="relative group">
          <img class="w-full h-auto rounded-lg shadow aspect-square object-contain transition-all duration-300" 
               src="./assets/images/1.jpg" alt="لباس مردانه">
          <div class="absolute inset-0 bg-black bg-opacity-0 rounded-lg transition-all duration-300 
                      group-hover:bg-opacity-30"></div>
          <span class="absolute bottom-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-transparent font-bold text-xl z-10 
                      transition-all duration-300 group-hover:text-white whitespace-nowrap">
             لوازم الکترونیکی
          </span>
      </div>
      <div class="relative group">
          <img class="w-full h-auto rounded-lg shadow aspect-square object-contain transition-all duration-300" 
               src="./assets/images/2_.jpg" alt="لباس مردانه">
          <div class="absolute inset-0 bg-black bg-opacity-0 rounded-lg transition-all duration-300 
                      group-hover:bg-opacity-30"></div>
          <span class="absolute bottom-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-transparent font-bold text-xl z-10 
                      transition-all duration-300 group-hover:text-white whitespace-nowrap">
             لوازم الکترونیکی
          </span>
      </div>
      <div class="relative group">
          <img class="w-full h-auto rounded-lg shadow aspect-square object-contain transition-all duration-300" 
               src="./assets/images/3_.jpg" alt="لباس مردانه">
          <div class="absolute inset-0 bg-black bg-opacity-0 rounded-lg transition-all duration-300 
                      group-hover:bg-opacity-30"></div>
          <span class="absolute bottom-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-transparent font-bold text-xl z-10 
                      transition-all duration-300 group-hover:text-white">
             جواهرات
          </span>
      </div>
      <div class="relative group">
          <img class="w-full h-auto rounded-lg shadow aspect-square object-contain transition-all duration-300" 
               src="./assets/images/4_.jpg" alt="لباس مردانه">
          <div class="absolute inset-0 bg-black bg-opacity-0 rounded-lg transition-all duration-300 
                      group-hover:bg-opacity-30"></div>
          <span class="absolute bottom-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-transparent font-bold text-xl z-10 
                      transition-all duration-300 group-hover:text-white">
             جواهرات
          </span>
      </div>
      <div class="relative group">
          <img class="w-full h-auto rounded-lg shadow aspect-square object-contain transition-all duration-300" 
               src="./assets/images/5_.jpg" alt="لباس مردانه">
          <div class="absolute inset-0 bg-black bg-opacity-0 rounded-lg transition-all duration-300 
                      group-hover:bg-opacity-30"></div>
          <span class="absolute bottom-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-transparent font-bold text-xl z-10 
                      transition-all duration-300 group-hover:text-white">
            لباس مردانه
          </span>
      </div>
      <div class="relative group">
          <img class="w-full h-auto rounded-lg shadow aspect-square object-contain transition-all duration-300" 
               src="./assets/images/6_.jpg" alt="لباس مردانه">
          <div class="absolute inset-0 bg-black bg-opacity-0 rounded-lg transition-all duration-300 
                      group-hover:bg-opacity-30"></div>
          <span class="absolute bottom-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-transparent font-bold text-xl z-10 
                      transition-all duration-300 group-hover:text-white">
            لباس مردانه
          </span>
      </div>
      <div class="relative group">
          <img class="w-full h-auto rounded-lg shadow aspect-square object-contain transition-all duration-300" 
               src="./assets/images/7.jpg" alt="لباس مردانه">
          <div class="absolute inset-0 bg-black bg-opacity-0 rounded-lg transition-all duration-300 
                      group-hover:bg-opacity-30"></div>
          <span class="absolute bottom-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-transparent font-bold text-xl z-10 
                      transition-all duration-300 group-hover:text-white">
            لباس زنانه
          </span>
      </div>
      <div class="relative group">
          <img class="w-full h-auto rounded-lg shadow aspect-square object-contain transition-all duration-300" 
               src="./assets/images/8.jpg" alt="لباس مردانه">
          <div class="absolute inset-0 bg-black bg-opacity-0 rounded-lg transition-all duration-300 
                      group-hover:bg-opacity-30"></div>
          <span class="absolute bottom-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-transparent font-bold text-xl z-10 
                      transition-all duration-300 group-hover:text-white">
            لباس زنانه
          </span>
      </div>
    </div>

    <div class="container-lg mt-16 mb-16 ">
      <h1 class="font-bold text-center mb-24 text-2xl pb-4 border-b-2 border-yellow-600 w-fit mx-auto">
          پوشاک ویژه مردانه
      </h1>

<div id="men-clothes" class=" flex flex-col gap-3 container-lg md:flex-row gap-3 px-3">
</div>
    </div>

    <div class="container-lg mt-16 mb-16 ">
      <h1 class="font-bold text-center mb-24 text-2xl pb-4 border-b-2 border-yellow-600 w-fit mx-auto">
          پوشاک ویژه زنانه
      </h1>

<div id="women-clothes" class=" flex flex-col gap-3 container-lg  gap-3 px-3 md:grid md:grid-cols-4">
</div>
    </div>

    <div class="container-lg mt24 bg-blue-600 mb-20">
        <a href="#">
        <h1 class="font-bold text-center py-16 text-white text-2xl">محصولات فروشی آنلاین Vip برای خرید پوشاک وجواهرات و لوارم جانبی و سفارش آنلاین</h1>
      </a>
    </div>
  `
  root.innerHTML = Template;

const mendata = await getdataMen();
renderbodypageman(mendata);

const Womendata = await getdataWomen();
renderbodypagewoman(Womendata);

const jewelerydata = await getdatajewelery();
renderbodypagejewelery(jewelerydata);

const electronicdata = await getdataelectronic();
renderbodypageelectronic(electronicdata);
}



function checkstate(){
const url=location.pathname;

switch (url) {
  case "/men":
    rendermenpage();
    break;
    case "/women":
      renderwomenpage();
      break;
      case "/jewelery":
      renderjewelerypage();
      break;
      case "/electronic":
      renderelectronicpage();
      break;
  default:renderMainpage();
    break;
}
}

window.addEventListener("popstate",checkstate)