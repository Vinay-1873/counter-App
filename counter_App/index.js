const countvalue=document.querySelector('#value');

const increment=()=>{
    // let val=countvalue.innerText;   we are getting valuse in string format we have to typecast it in integer
    let val=parseInt(countvalue.innerText); // fetching the value
    val=val+1;  //operation
    countvalue.innerText=val;  //sending updated value
};

const decrement=()=>{
    let val=parseInt(countvalue.innerText);
    val=val-1;
    countvalue.innerText=val;
}
const Reset=()=>{
    let val=parseInt(countvalue.innerText);
    val=0;
    countvalue.innerText=val;
}