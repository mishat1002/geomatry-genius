function calculateArea(){
   const triangleBase = document.getElementById("triangle_base");
   const trianglebaseValue = triangleBase.value 
   const base = parseFloat(trianglebaseValue)
   console.log(base)

   const triangleHeight = document.getElementById("triangle-height");
   const triangleheightValue = triangleHeight.value 
   const height = parseFloat(triangleheightValue)
   console.log(height)

   const area = 0.5 *base*height
   console.log("Area of this triangle" , area)

   const areaofTrianglecalculate = document.getElementById("areaofTriangle")
   areaofTrianglecalculate.innerText = area;
}