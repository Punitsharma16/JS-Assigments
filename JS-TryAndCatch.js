function handleCallback(callback){
    try {
        if(typeof callback === "function"){
            callback();
        }else{
            throw new Error('error thrown');
        }
    } catch (error) {
        console.log('error thrown');
    }
}
handleCallback();