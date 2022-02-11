// Create a function testPhoneNumber 
// takes in a phoneNumber string in one of these formats:
// '(206) 333-4444'
// '206-333-4444'
// '206 333 4444'
// Returns true if valid, false if not valid
const testPhoneNumber = phoneNumber => {
    const regex = new RegExp('^\\\(?\\d{3}\\)?(-|\\s)\\d{3}(-|\\s)\\d{4}$');
    return regex.test(phoneNumber);
}

//This checks the phone number format after we have tested that it is a valid phone number.
const checkPhoneNumberFormat = phoneNumber => {
    let regex = RegExp('^\\(\\d{3}\\)');
    if(regex.test(phoneNumber)){
        return 1;
    }

    regex = RegExp('^\\d{3}-');
    if(regex.test(phoneNumber)){
        return 2;
    }

    regex = RegExp('^\\d{3}\\s');
    if(regex.test(phoneNumber)){
        return 3;
    }
}

const parsePhoneNumber = phoneNumber => {
    if (testPhoneNumber){

        let usrAreaCode = '';
        let usrNumber = '';

        if (checkPhoneNumberFormat(phoneNumber) == 1){
            firstPhoneSplit = phoneNumber.split('(');
            secondPhoneSplit = phoneNumber.split(')');
            usrAreaCode = secondPhoneSplit[0].replace('(', '').trim();;
            usrNumber = secondPhoneSplit[1].replace('-', '').trim();
        } else  if (checkPhoneNumberFormat(phoneNumber) == 2){
            firstPhoneSplit = phoneNumber.split('-');
            usrAreaCode = firstPhoneSplit[0];
            usrNumber =  firstPhoneSplit[1].replace('-', '') + firstPhoneSplit[2];
        }  else  if (checkPhoneNumberFormat(phoneNumber) == 3){
            firstPhoneSplit = phoneNumber.split(' ');
            usrAreaCode = firstPhoneSplit[0];
            usrNumber =  firstPhoneSplit[1] + firstPhoneSplit[2];
        } else {
            usrAreaCode = 'n/a';
            usrNumber =  'n/a';

        }
        
        return {areaCode: usrAreaCode, phoneNumber: usrNumber}
    } else{
        console.log('ERROR - Invalid phone number');
    }
}



// Explanation of RegExp
// ^      start of line
// \(     optional start parenthesis
// \d{3}  exactly 3 digit characters
// \)     optional end parenthesis
// [-\s]  one of a space or a dash
// \d{3}  exactly 3 digit characters
// [-\s]  one of a space or a dash
// \d{4}  exactly 4 digit characters
// $      end of line

// check testPhoneNumber
console.log(testPhoneNumber('(206) 333-4444')); // should return true
console.log(testPhoneNumber('206 333 4444')); // should return true
console.log(testPhoneNumber('206-333-4444')); // should return true
console.log(testPhoneNumber('(206) 33-4444')); // should return false, missing a digit


// 1. Create a function parsePhoneNumber that takes in a phoneNumber string 
// in one of the above formats.  For this, you can *assume the phone number
// passed in is correct*.  This should use a regular expression
// and run the exec method to capture the area code and remaining part of
// the phone number.
// Returns an object in the format {areaCode, phoneNumber}


// Check parsePhoneNumber
console.log(parsePhoneNumber('(222) 422-5353'));
// returns {areaCode: '222', phoneNumber: '4225353'}

console.log(parsePhoneNumber('206-333-4444'));
// returns {areaCode: '206', phoneNumber: '3334444'}

console.log(parsePhoneNumber('312 588 2300'));
// returns {areaCode: '312', phoneNumber: '5882300'}