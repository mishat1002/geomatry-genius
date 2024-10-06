function calculation(){
           
    const baseValue = getelementValueid('rombas_base')
    console.log(baseValue)

    const heightValue = getelementValueid('rombas_height')
    console.log(heightValue)

    const Area = 0.5 * baseValue * heightValue
    console.log('Rombas area calculation : ' , Area)

    const rombas = document.getElementById('areaCalculation')
    rombas.innerText = Area
}

function getelementValueid(innerid){
  const rombasBase = document.getElementById(innerid)
  const rombasValuebase = rombasBase.value ;
  const base = parseFloat(rombasValuebase);
  return base;

}