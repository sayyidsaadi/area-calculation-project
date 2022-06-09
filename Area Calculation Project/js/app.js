// Select Area
let selectarea=document.getElementById('selectarea');
let ariaForm=document.getElementById('ariaForm');
let formResults=document.querySelector('.formResults');

//Get Input
let rect=document.querySelector('.rect');
let squ=document.querySelector('.squ');
let tring=document.querySelector('.tring');
let cir=document.querySelector('.cir');

selectarea.onchange=()=>{

    //Html Element 
    selectarea.value=='Rectangle' ? rect.style.display='block': rect.style.display='none';
    selectarea.value=='Square' ? squ.style.display='block': squ.style.display='none';
    selectarea.value=='Triangle' ? tring.style.display='block': tring.style.display='none';
    selectarea.value=='Circle' ? cir.style.display='block': cir.style.display='none';

}

ariaForm.onsubmit=(e)=>{
    e.preventDefault();

    if(selectarea.value=='Rectangle'){

        // Get and Send Value
        let rectLength=ariaForm.querySelector('input[name="rectlength"]').value;
        let recWidth=ariaForm.querySelector('input[name="rectwidth"]').value;
        formResults.innerHTML=areaCalculationFuntion(selectarea.value, rectLength, recWidth);

    }else if(selectarea.value=='Square'){

            // Get and Send Value
        let areaSide=ariaForm.querySelector('input[name="rectsquare"]').value;
        formResults.innerHTML=areaCalculationFuntion(selectarea.value, areaSide);

    }else if(selectarea.value=='Triangle'){

            // Get and Send Value
        let tribase=ariaForm.querySelector('input[name="tribase"]').value;
        let triheight=ariaForm.querySelector('input[name="triheight"]').value;
        formResults.innerHTML=areaCalculationFuntion(selectarea.value, tribase, triheight);

    }else if(selectarea.value=='Circle'){

            // Get and Send Value
        let cirradius=ariaForm.querySelector('input[name="cirradius"]').value;
        formResults.innerHTML=areaCalculationFuntion(selectarea.value, cirradius);

    }
}
