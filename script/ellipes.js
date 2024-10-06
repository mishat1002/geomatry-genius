function  ellipesCalculation(){
   const ellipesValuea = document.getElementById("a_eplips")
   const ellipes_a = ellipesValuea.value 
   const a = parseFloat(ellipes_a)

   const ellipesValueb = document.getElementById("b_eplips")
   const ellipes_b = ellipesValueb.value 
   const b = parseFloat(ellipes_b)

   const area =  3.1416 * a * b ;
   console.log("Ellipes count :" , area)

   const calculation =document.getElementById("ellipesArea")
   calculation.innerText = area

}