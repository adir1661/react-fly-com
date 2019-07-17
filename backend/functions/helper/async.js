let asyncArrayPromiseFunc = (arr, func,timeoutSeconds = 10) => {
    return new Promise((resolve, reject) => {
        if(!arr)return resolve([]);
        let promises = [];
        for (let i = 0; i < arr.length; i++){
            promises.push(func(arr[i]))
        }
        Promise.all(promises).then((result)=>{
            resolve(result);
        }).catch((error)=>{
            reject('Error while invokeing async array task: '+error);
        });
    })
};

module.exports = {asyncArrayPromiseFunc};