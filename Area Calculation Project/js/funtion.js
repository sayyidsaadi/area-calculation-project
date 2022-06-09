/**
 * Alert MSG Funtion
 */
const alertMsgFuntion=(msg, alertTYpe='danger')=>{
    return `<p class="alert alert-${alertTYpe} d-flex justify-content-between">${msg} <button data-bs-dismiss="alert" class="btn-close"></button> </p>`
}

/**
 * Currency Funtion
 */
const currencyFuntion=(amount, curruncyType)=>{
    let rate =0;
    switch(curruncyType){
        case 'USD':
            rate=90;
            break;
        case 'CAD':
            rate=70;
            break;
        case 'EURO':
            rate=95;
            break;
        case 'POUND':
            rate=110;
            break;            
    }
    return alertMsgFuntion(`Your ${amount}${curruncyType} = ${amount*rate} BDT`, 'success');
}

/**
 * Area Calculation Funtion
 */

const areaCalculationFuntion=(areaType, value1, value2=null)=>{
    if(areaType=='Rectangle'){

        return alertMsgFuntion(`The Rectangle are is = ${value1*value2}`, 'success');

    }else if(areaType=='Square'){

        return alertMsgFuntion(`The Square Area Is = ${value1*value1}`, 'success');

    }else if(areaType=='Triangle'){

        return alertMsgFuntion(`The Triangle Area Is = ${(value1*value2)/2}`, 'success');

    }else if(areaType=='Circle'){

        return alertMsgFuntion(`The Circle Area Is = ${Math.PI*(value1*value1)}`, 'success');

    }
}