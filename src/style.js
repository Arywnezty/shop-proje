
fetch("https://fakestoreapi.com/products/category/men's clothing")
.then(res => res.json())
.then(json => renderbodypageman(json))
.catch(err =>alert(err))


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
}