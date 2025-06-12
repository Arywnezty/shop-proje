const root=document.getElementById("root");
  const mobileMenu=document.getElementById("sidebar");
  document.getElementById('userAccountBtn').addEventListener('click', function() {
    history.pushState({}, "", "/Login");
    checkstate(); 
});

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
<div class="grid grid-cols-1 gap-4 md:grid-cols-4 px-4 rounded-md mt-5 mb-9">
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
  <div class="w-full mb-9 max-w-[65rem] flex flex-col gap-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
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
<div class="grid grid-cols-1 gap-4 md:grid-cols-4 px-4 rounded-md mt-5 mb-9">
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
      <div class="w-full mb-9 max-w-[65rem] flex flex-col gap-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
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
  <div class="grid grid-cols-1 gap-4 md:grid-cols-4 px-4 rounded-md mt-5 mb-9">
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
      <div class="w-full mb-9 max-w-[65rem] flex flex-col gap-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
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
  <div class="grid grid-cols-1 gap-4 md:grid-cols-4 px-4 rounded-md mt-5 mb-9">
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
      <div class="w-full mb-9 max-w-[65rem] flex flex-col gap-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
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
    <!-- text card -->
    <div class="container px-4 py-12">
    <div class="text-center mb-[20%] text-5xl font-bold text-red-500 md:mb-[4%]">
    <h1>آنلاین شاپ!</h1>
       </div>
  <!-- پوشاک مردانه -->
  <div class="mb-16">
    <h2 class="text-3xl font-bold mb-8 text-dark border-b-4 border-gray-600 pb-2 inline-block">پوشاک های مردانه</h2>
    <p class="text-lg mb-6 text-gray-700">ظرفیت و قدرت در هر دوخت</p>
    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <!-- کت و شلوار رسمی -->
        <div class="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
            <div class="h-48 bg-gray-200 overflow-hidden">
                <img src="./assets/images/1.jpeg" 
                     alt="کت و شلوار مردانه رسمی"
                     class="w-full h-full object-cover">
            </div>
            <div class="p-6">
                <h3 class="text-xl font-semibold mb-3 text-gray-600">کت و شلوارهای رسمی</h3>
                <p class="text-gray-600 mb-4">مناسب برای مهمانی‌ها و جلسات کاری با پارچه‌های درجه یک</p>
                <button onclick="handleMenclick(event)" href="/men" class="bg-gray-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors w-full">
                    مشاهده محصولات
                </button>
            </div>
        </div>

        <!-- لباس اسپرت -->
        <div class="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
            <div class="h-48 bg-gray-200 overflow-hidden">
                <img src="./assets/images/9.jpg" 
                     alt="لباس اسپرت مردانه"
                     class="w-full h-full object-cover">
            </div>
            <div class="p-6">
                <h3 class="text-xl font-semibold mb-3 text-gray-600">لباس‌های اسپرت</h3>
                <p class="text-gray-600 mb-4">تیشرت‌های نخی با طرح‌های متنوع تا هودی‌های راحت</p>
                <button onclick="handleMenclick(event)" href="/men" class="bg-gray-500  text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors w-full">
                    مشاهده محصولات
                </button>
            </div>
        </div>

        <!-- لباس فصلی -->
        <div class="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
            <div class="h-48 bg-gray-200 overflow-hidden">
                <img src="./assets/images/10_.jpg" 
                     alt="پالتوی مردانه زمستانی"
                     class="w-full h-full object-cover">
            </div>
            <div class="p-6">
                <h3 class="text-xl font-semibold mb-3 text-gray-600">لباس‌های فصلی</h3>
                <p class="text-gray-600 mb-4">کت‌های زمستانی گرم و پالتوهای شیک</p>
                <button onclick="handleMenclick(event)" href="/men" class="bg-gray-500 bg-primary text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors w-full">
                    مشاهده محصولات
                </button>
            </div>
        </div>

        <!--  اکسسوری مردانه -->
        <div class="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
            <div class="h-48 bg-gray-200 overflow-hidden">
                <img src="./assets/images/11.jpg" 
                     alt="اکسسوری مردانه"
                     class="w-full h-full object-cover">
            </div>
            <div class="p-6">
                <h3 class="text-xl font-semibold mb-3 text-gray-600">اکسسوری‌های مردانه</h3>
                <p class="text-gray-600 mb-4">کراوات، دستمال جیبی، کمربند و کیف‌های چرمی لوکس</p>
                <button onclick="handleMenclick(event)" href="/men" class="bg-gray-500  text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors w-full">
                    مشاهده محصولات
                </button>
            </div>
        </div>
    </div>
</div>
  <!-- پوشاک زنانه -->
  <div class="mb-16">
      <h2 class="text-3xl font-bold mb-8 text-dark border-b-4 border-blue-400 pb-2 inline-block">پوشاک های زنانه</h2>
      <p class="text-lg mb-6 text-gray-700">زیبایی و اصالت در هر استایل</p>
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
         <!-- لباس های مجلسی -->   
          <div class="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
            <div class="h-48 bg-gray-200 overflow-hidden">
              <img src="./assets/images/13.jpg" 
                   alt="کت و شلوار مردانه رسمی"
                   class="w-full h-full object-cover">
              </div> 
              <div class="p-6">
              <h3 class="text-xl font-semibold mb-3 text-blue-400">لباس‌های مجلسی</h3>
              <p class="text-gray-600 mb-4">طراحی‌های خاص برای مهمانی‌های خاص</p>
              <button onclick="handleWomenclick(event)" href="/women" class="bg-gray-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors w-full">
                مشاهده محصولات
            </button>
          </div>
          </div>
           <!-- لباس های روزمره -->
          <div class="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
            <div class="h-48 bg-gray-200 overflow-hidden">
              <img src="./assets/images/14.jpg" 
                   alt="کت و شلوار مردانه رسمی"
                   class="w-full h-full object-cover">
              </div> 
              <div class="p-6">
              <h3 class="text-xl font-semibold mb-3 text-blue-400">لباس‌های روزمره</h3>
              <p class="text-gray-600 mb-4">از بلوزهای ساده تا شلوارهای جین طراحی شده</p>
              <button onclick="handleWomenclick(event)" href="/women" class="bg-gray-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors w-full">
                مشاهده محصولات
            </button>
          </div>
          </div>
           <!-- لباس های سنتی -->
          <div class="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
            <div class="h-48 bg-gray-200 overflow-hidden">
              <img src="./assets/images/15.jpg" 
                   alt="کت و شلوار مردانه رسمی"
                   class="w-full h-full object-cover">
              </div> 
              <div class="p-6">
              <h3 class="text-xl font-semibold mb-3 text-blue-400">لباس‌های سنتی</h3>
              <p class="text-gray-600 mb-4">با طرح‌های اصیل ایرانی و مدرن که به محصولاتمون اضافه شده</p>
              <button onclick="handleWomenclick(event)" href="/women" class="bg-gray-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors w-full">
                مشاهده محصولات
            </button>
          </div>
          </div>
           <!-- اکسسوری زنانه -->
          <div class="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
            <div class="h-48 bg-gray-200 overflow-hidden">
              <img src="./assets/images/12.jpg" 
                   alt="کت و شلوار مردانه رسمی"
                   class="w-full h-full object-cover">
              </div> 
              <div class="p-6">
              <h3 class="text-xl font-semibold mb-3 text-blue-400">اکسسوری‌های زنانه</h3>
              <p class="text-gray-600 mb-4">شال، روسری، کیف و کفش‌های هماهنگ با هر استایل</p>
              <button onclick="handleWomenclick(event)" href="/women" class="bg-gray-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors w-full">
                مشاهده محصولات
            </button>
          </div>
          </div>
      </div>
  </div>

  <!-- جواهرات -->
  <div class="mb-16">
      <h2 class="text-3xl font-bold mb-8 text-dark border-b-4 border-yellow-500 pb-2 inline-block">جواهرات</h2>
      <p class="text-lg mb-6 text-gray-700">درخشش منحصر به فرد شما</p>
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
         <!-- دستبند و گردنبند -->
          <div class="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
            <div class="h-48 bg-gray-200 overflow-hidden">
              <img src="./assets/images/16.jpg" 
                   alt="کت و شلوار مردانه رسمی"
                   class="w-full h-full object-cover">
              </div> 
              <div class="p-6">
              <h3 class="text-xl font-semibold mb-3 text-yellow-500">دستبند و گردنبند</h3>
              <p class="text-gray-600 mb-4">از طرح‌ مینیمال تا تکه‌های پرزرق و برق</p>
              <button onclick="handlejeweleryclick(event)" href="/jewelery" class="bg-gray-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors w-full">
                مشاهده محصولات
            </button>
          </div>
        </div>
         <!-- انگشتر های طلاو نقره -->
          <div class="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
            <div class="h-48 bg-gray-200 overflow-hidden">
              <img src="./assets/images/17.jpg" 
                   alt="کت و شلوار مردانه رسمی"
                   class="w-full h-full object-cover">
              </div> 
              <div class="p-6">
              <h3 class="text-xl font-semibold mb-3 text-yellow-500">انگشترهای طلا و نقره</h3>
              <p class="text-gray-600 mb-4">با سنگ‌های قیمتی و نیمه قیمتی</p>
              <button onclick="handlejeweleryclick(event)" href="/jewelery" class="bg-gray-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors w-full">
                مشاهده محصولات
            </button>
          </div>
        </div>
         <!-- گوشواره های طراحی شده -->
          <div class="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
            <div class="h-48 bg-gray-200 overflow-hidden">
              <img src="./assets/images/18.jpg" 
                   alt="کت و شلوار مردانه رسمی"
                   class="w-full h-full object-cover">
              </div> 
              <div class="p-6">
              <h3 class="text-xl font-semibold mb-3 text-yellow-500">گوشواره‌های طراحی شده</h3>
              <p class="text-gray-600 mb-4">برای هر سلیقه و هر فرم صورت</p>
              <button onclick="handlejeweleryclick(event)" href="/jewelery" class="bg-gray-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors w-full">
                مشاهده محصولات
            </button>
          </div>
        </div>
         <!-- ساعت های لوکس -->
          <div class="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
            <div class="h-48 bg-gray-200 overflow-hidden">
              <img src="./assets/images/19.jpg" 
                   alt="کت و شلوار مردانه رسمی"
                   class="w-full h-full object-cover">
              </div> 
              <div class="p-6">
              <h3 class="text-xl font-semibold mb-3 text-yellow-500">ساعت‌های لوکس</h3>
              <p class="text-gray-600 mb-4">از برندهای معتبر بین‌المللی</p>
              <button onclick="handlejeweleryclick(event)" href="/jewelery" class="bg-gray-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors w-full">
                مشاهده محصولات
            </button>
          </div>
        </div>
      </div>
  </div>

  <!--لوازم الکترونیکی -->
  <div class="mb-16">
      <h2 class="text-3xl font-bold mb-8 text-black border-b-4 border-green-500 pb-2 inline-block">لوازم الکترونیکی</h2>
      <p class="text-lg mb-6 text-gray-700">تکنولوژی در خدمت زندگی بهتر</p>
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <!-- گوشی های هوشمند -->
          <div class="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
            <div class="h-48 bg-gray-200 overflow-hidden">
              <img src="./assets/images/20.jpg" 
                   alt="کت و شلوار مردانه رسمی"
                   class="w-full h-full object-cover">
              </div> 
              <div class="p-6">
              <h3 class="text-xl font-semibold mb-3 text-green-600">گوشی‌های هوشمند</h3>
              <p class="text-gray-600 mb-4">آخرین مدل‌ها از برندهای معتبر</p>
              <button onclick="handleelectronicclick(event)" href="/electronic" class="bg-gray-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors w-full">
                مشاهده محصولات
            </button>
              </div>
          </div>
          <!-- لپتاپ و تپلت -->
          <div class="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
            <div class="h-48 bg-gray-200 overflow-hidden">
              <img src="./assets/images/21.jpg" 
                   alt="کت و شلوار مردانه رسمی"
                   class="w-full h-full object-cover">
              </div> 
              <div class="p-6">
              <h3 class="text-xl font-semibold mb-3 text-green-600">لپ‌تاپ و تبلت</h3>
              <p class="text-gray-600 mb-4">برای کار و تفریح</p>
              <button onclick="handleelectronicclick(event)" href="/electronic" class="bg-gray-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors w-full">
                مشاهده محصولات
            </button>
              </div>
          </div>
          <!-- لوازم جانبی -->
          <div class="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
            <div class="h-48 bg-gray-200 overflow-hidden">
              <img src="./assets/images/22.jpg" 
                   alt="کت و شلوار مردانه رسمی"
                   class="w-full h-full object-cover">
              </div> 
              <div class="p-6">
              <h3 class="text-xl font-semibold mb-3 text-green-600">لوازم جانبی</h3>
              <p class="text-gray-600 mb-4">از پاوربانک تا هدست‌های گیمینگ</p>
              <button onclick="handleelectronicclick(event)" href="/electronic" class="bg-gray-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors w-full">
                مشاهده محصولات
            </button>
              </div>
          </div>
          <!-- خانه هوشمند -->
          <div class="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
            <div class="h-48 bg-gray-200 overflow-hidden">
              <img src="./assets/images/23.jpg" 
                   alt="کت و شلوار مردانه رسمی"
                   class="w-full h-full object-cover">
              </div> 
              <div class="p-6">
              <h3 class="text-xl font-semibold mb-3 text-green-600">خانه هوشمند</h3>
              <p class="text-gray-600 mb-4">آسان تر کردن زندگی</p>
              <button onclick="handleelectronicclick(event)" href="/electronic" class="bg-gray-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors w-full">
                مشاهده محصولات
            </button>
              </div>
          </div>
      </div>
  </div>
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


function postUserLogin(user, pass){
  const result =fetch("https://fakestoreapi.com/auth/login" , {
    method: "POST",
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({username: user , password: pass})
  })
  .then(res => res.json())
  .then(json => {
    localStorage.setItem("token" , json.token)
    history.pushState( {} , "" , "/all-Products")
    checkstate();
    return json;
  })
  .catch(err =>{
    localStorage.removeItem("token")
    Toastify({
      text: "نام کاربری یا رمز عبور اشتباه است!",
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
    }).showToast(); 
})
  return result;
}

function handlegetAllproducts(){
 return fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .catch(err =>{
    Toastify({
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
  })
}
async function  renderAllproducts(){
  root.innerHTML=`
  <div class="grid grid-cols-1 gap-4 md:grid-cols-4 px-4 rounded-md mt-5 mb-9">
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
  const data= await handlegetAllproducts();
  const template=data.map(item=>{
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
    const container=`<div class="grid grid-cols-1 md:grid-cols-4 gap-4 container mt-5 mb-5">${template}</div>`
root.innerHTML=container;
}

function renderLoginpage(){
  const template = `
  <h1 class="text-center my-5 text-3xl font-bold text-red-500">برای ورود نام کاربری و رمز عبور خود را وارد کنید</h1>
  <form class="border bg-gray-300 border-gray-500 rounded-md p-10 my-10 flex flex-col gap-4 items-center max-w-96 mx-auto" id="loginForm">
    <div class="w-full">
      <label class="hidden" for="username">username:</label>
      <input class="border w-full p-2 rounded-md outline-none" placeholder="username" name="username" type="text" id="username">
    </div>
    <div class="w-full">
      <label class="hidden" for="password">password:</label>
      <input class="border w-full p-2 rounded-md outline-none" placeholder="password" name="password" type="password" id="password">
    </div>
    <input class="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300 outline-none" type="submit" value="Login">
  </form>
  `;
  root.innerHTML = template;
   
  const form = document.getElementById('loginForm');
  form.addEventListener('submit', handleLoginFormSubmit);
}

async function handleLoginFormSubmit(evt){
evt.preventDefault();
const form =evt.target;
const formData= new FormData(form);
const result=await postUserLogin(formData.get("username") , formData.get("password"));
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
      case "/all-Products":
        renderAllproducts();
        break;
      case "/Login":
      renderLoginpage();
      break;
  default:renderMainpage();
    break;
}
}

window.addEventListener("popstate",checkstate)