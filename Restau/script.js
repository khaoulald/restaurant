var search = document.getElementById("search");
var submit = document.getElementById("submit");
var mealEl = document.getElementById("meals");
var result = document.getElementsByClassName("result");
var cat = document.querySelector("#categories");
var api = "https://www.themealdb.com/api/json/v1/1/";

// function FiltrerCategorieeal(e){
//     e.preventDefault();

//     if(search.value.trim()){
//         fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search.value}`)
//         .then((res)=>res.json())
//         .then((data)=>{
//             result.innerHTML = `<h2>${search.value}</h2>`
//             if(data.meals===null){
//                 result.innerHTML =`<h2>No result ${search.value}</h2>`
//             }
//             else
//             {
//                 mealEl.innerHTML = data.meals.map(
//                     (meal)=>`
//                     <div class="meal col-6 col-md-4 col-lg-3 my-5" id="meal">
//                     <img src="${meal.strMealThumb}"alt="${meal.strMeal}"/>
//                     <div class="meal-info" data-mealID="${meal.idMeal}"
//                     <h3>${meal.strMeal}</h3>
//                      </div> </div> `
//                 ).join("");
//             }
//         })
//     }
// }
async function loadOn()
{
      var res =  await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=a`);
      var data = await res.json();
            result.innerHTML = `<h2>All Meals</h2>`
            
                mealEl.innerHTML = data.meals.map(
                    (meal)=>`
                    <div class="col-6 col-md-4 col-lg-3 my-5" id="meal" data-mealID="${meal.idMeal}">
                    <img src="${meal.strMealThumb}"alt="${meal.strMeal}"/>
                    <div class="meal-info" >
                    <h4 class="text-light text-center">${meal.strMeal}</h4>
                     </div>
                  
                      </div> `
                ).join("");
}
/*Fill comboBox*/    
async function FiltrerCategorie(){
    var res = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
    var data = await res.json();
    cat.innerHTML = ` <select class="text-light" onchange="CategorieValeur(this.value)">
        ${data.categories.map(categories =>  `<option>${categories.strCategory}</option>`)}
    </select>` 
}

loadOn();
FiltrerCategorie();
async function CategorieValeur(categorie){
    var res = await fetch(`${api}filter.php?c=${categorie}`);
    var data = await res.json();
   console.log(data);
   mealEl.innerHTML = data.meals.map(
    (meal)=>`
        <div class="meal col-6 col-md-4 col-lg-3 my-5" id="meal">
            <img src="${meal.strMealThumb}"alt="${meal.strMeal}"/>
            <div class="meal-info" data-mealID="${meal.idMeal}"
                 <h4 class="text-light">${meal.strMeal}</h4>
            </div> 
        </div> `
).join("");
}


//call functions


