//let hi = document.querySelector('hi');

//setTimeout
//html elements 
let h1= document.querySelector('.title');
//new elements
let img = document.createElement('img');
img.src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg";
document.body.appendChild(img);

let ul = document.create                                                                                                                                                                                     Element('ul');


let l1 = document.createElement('li');
l1.textContext = "Arsenal";

ul.appendChild(l1);

let l2 = document.createElement('li');
l2.textContent = "Chelsea";

ul.appendChild(l2);

let l3 = document.createElement('li');
l3.textContent = "Manu";

ul.appendChild(l3);

let l4 = document.createElement('li');
l4.textContent = "Liverpool";

let counter = 0;
l4.addEventListener('click',()=>{
    l4.toggleAttribute('class');
    counter++;
    console.log("Liverpool was clicked " + counter + " times");
})

ul.appendChild(l4);
document.body.appendChild(ul);





