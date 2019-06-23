let asyncArrayPromiseFunc = (arr, func,timeoutSeconds = 10) => {
    return new Promise((resolve, reject) => {
        let arrayResult = [];
        for (let i = 0; i < arr.length; i++){
            func(arr[i]).then((result)=>{
                arrayResult.push(result);
            }).catch((error)=>{
                reject(error);
            });
        }
        let counter = 0;
        let intervalId = setInterval(() => {
            counter++;
            if (arrayResult.length === arr.length) {
                resolve(arrayResult);
                clearInterval(intervalId);
            } else {
                if (counter === timeoutSeconds*10) {
                    reject('file transform timeout.');
                    clearInterval(intervalId);
                }
            }
        }, 100);
    })
};

module.exports = {asyncArrayPromiseFunc};