function getRandomInt(min,max){
    let Min = Math.ceil(min);
    let Max = Math.floor(max);
    return Math.floor(Math.random() * (Max -Min + 1) + Min);
}

export default getRandomInt;