function Parallelogram(){
   const parallelogramValue = document.getElementById('paraBase')
   const paraValue = parallelogramValue.value 
   const base = parseFloat(paraValue)
   console.log(base)

   const parallelogram_Value = document.getElementById("paraHeight")
   const paraheightValue = parallelogram_Value.value 
   const height = parseFloat(paraheightValue)
   console.log(height)

   const area = base * height;
   console.log("Area is :" , area)

   const calculation = document.getElementById('paraAreavalue')
   calculation.innerText = area

}