// Your code here

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/
class ValidationError extends Error{
constructor(message=null, ...params){
super(...params);

if(Error.captureStackTrace){
	Error.captureStackTrace(this,ValidationError);
}

    this.name = "ValidationError";
    this.message = /*this.message*/ message || "Invalid input";
}


};
try {
  module.exports = ValidationError;
} catch {
  module.exports = null;
}
