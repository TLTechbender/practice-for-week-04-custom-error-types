const ValidationError = require('./validation-error');

// Your code here
class MaximumLengthExceededError extends ValidationError{
//I got a bit confused here so I needed help.....
	constructor(length=null, ...params){
	super(...params);
    this.name= "MaximumLengthExceededError";
	this.message = "Maximum length exceeded";

   if(length){
   this.message = this.message + ` by ${length}`;

   }
};
};
/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = MaximumLengthExceededError;
} catch {
  module.exports = null;
}
