const arr = ["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"];

const count = arr.reduce((acc, i) => {
    // if(i === "electronics"){
        acc[i] = acc[i] === undefined ? 1 : acc[i]+1;
    // }
    return acc;
}, {});

console.log(count);


const sortArr = Object.entries(count).sort((a,b) => b[1]-a[1])

console.log(sortArr);

