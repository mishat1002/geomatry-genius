function rectangularCalcuation(){
    const rectangleValue =document.getElementById("rectangulr-width")
    const rectangalewidthValue =rectangleValue.value 
    const width = parseFloat(rectangalewidthValue)
    console.log(width)

    const rectangle_length =document.getElementById("rectangular-length")
    const rectangale_lengthValue =rectangle_length.value 
    const lengthValue = parseFloat(rectangale_lengthValue)
    console.log(lengthValue)

    const area = width*lengthValue;
    console.log("Area is" , area)

    const reactangular_calculation = document.getElementById("rectangularCalculation")
    reactangular_calculation.innerText = area
}