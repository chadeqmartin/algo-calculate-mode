exports.calculateMode = (arr) => {
    let frequencyObj = {};
    let mode = [];

    for (let elem of arr){
        if (frequencyObj[elem]) {
            frequencyObj[elem]++;
        } else {
            frequencyObj[elem] = 1;
        }
    }

    let maxValue = Math.max(...Object.values(frequencyObj));
    
    for (let key in frequencyObj){
        if (maxValue === frequencyObj[key]){
            if (isNaN(Number(key))){
                mode.push(key)
            } else {
                mode.push(+key)
            }
        }
    }
    return mode;

}
