function pentagonCalculation(){

    const pPentagon = document.getElementById("p_pentagon")
    const pValue = pPentagon.value ;
    const p =parseFloat(pValue);

    const bPentagon = document.getElementById("b_pentagon")
    const bValue = bPentagon.value ;
    const b = parseFloat(bValue)
 
    const area = 0.5 * p * b;
    console.log("Area is :" , area)
  
    const calculation = document.getElementById("pentagon_area")
    calculation.innerText = area
   

}
