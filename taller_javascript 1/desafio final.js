let horas=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];
let horaspares=[];
for (let hora=0;hora<horas.length;hora++){
    let numeroPar= horas[hora]%2
    if (numeroPar===0){
        horaspares.push(horas[hora])
    }
}
console.log(horaspares);

let result = horas.filter((item) => {
    return item % 2 === 0;
})
console.log(result);
