exports.handler = async ( event,context ) => {
    console.log("its working");
    return {
        statusCode: 200, 
        body: "We are now split testing!"
    };
}