const filesToBase64 = (files,inputElement) => {
    return new Promise((resolve, reject) => {
        let fileResults = [];
        for (let i = 0; i < files.length; i++) {
            getBase64(files[i]).then((base64File) => {
                fileResults.push(base64File);
            })
        }
        let counter = 0;
        let intervalId = setInterval(() => {
            counter++;
            if (fileResults.length === files.length) {
                resolve({files:fileResults,input:inputElement});
                clearInterval(intervalId);
            } else {
                if (counter === 100) {
                    reject('file transform timeout.');
                    clearInterval(intervalId);
                }
            }
        }, 100)
    })
};

const getBase64 = (file) => {
    return new Promise(function (resolve, reject) {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            resolve(reader.result);
        };
        reader.onerror = function (error) {
            reject(error);
        };
    });
};

export {filesToBase64,getBase64};