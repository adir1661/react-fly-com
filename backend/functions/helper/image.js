const {asyncArrayPromiseFunc} = require("./async");
const  uuidv1  = require('uuid/v1');
const base64ToS3Bucket=(s3Bucket,filestream,fileName= "Site")=>{
    return new Promise((resolve,reject)=> {
        let buf = new Buffer(filestream.replace(/^data:image\/\w+;base64,/, ""), 'base64')
        const name = fileName + '_'+uuidv1()+'.jpg';
        console.log(name);
        var data = {
            Key: name,
            Body: buf,
            ContentEncoding: 'base64',
            ContentType: 'image/jpg'
        };
        s3Bucket.putObject(data, function (err, dataResult) {
            if (err) {
                console.log(err);
                console.log('Error uploading data: ', data);
                reject(err);
            } else {
                let resultRespone = {...dataResult,url:getUrlFromBucket(s3Bucket,name)};
                console.log('succesfully uploaded the image!',resultRespone);
                resolve(resultRespone);
            }
        });
    })
};

const base64ArrToBucket = (s3Bucket,files,fileName='Site',timeout=10)=>{
    console.log('s3Bucket');
    const fileUpload = (file)=>(base64ToS3Bucket(s3Bucket,file,fileName));
    return asyncArrayPromiseFunc(files,fileUpload,timeout);
};
const getUrlFromBucket=(s3Bucket,fileName)=>{
    return `https://${s3Bucket.config.params.Bucket}.s3-${s3Bucket.config.region}.amazonaws.com/${fileName}`
};

module.exports ={base64ToS3Bucket,base64ArrToBucket} ;