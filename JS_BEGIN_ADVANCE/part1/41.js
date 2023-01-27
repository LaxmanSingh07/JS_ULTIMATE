// object destructuring


const band = {
  bandName: "led zepplin",
  famousSong: "stairway to heaven",
  year: 1968,
  anotherFamousSong: "kashmir",
};

// const bandName=band.bandName
// const famousSong=band.famousSong;

// let { bandName, famousSong, ...restProps } = band;
// console.log(bandName);
// console.log(restProps);



let { bandName:var1, famousSong:var2} = band;
console.log(var1);
console.log(var2);
