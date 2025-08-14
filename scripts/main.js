//seat-Available
//seatcount
//cuppon
//inputcuppon






const element = document.getElementById("#bestoffer");
const anchor=document.querySelectorAll("#_seat_selected a");

let seat_available=getid("seat_available");
let seat_store=parseInt(seat_available.innerText);

let count=0;
let price=0;
const cuppon_1="NEW15";
const cuppon_2="Couple 20";

for(let data of anchor)
{

// console.log(data);

data.addEventListener("click",

(e)=>

{
 
// console.log("id",data.id);

count=count+1;
price=price+550;;
seat_store=seat_store-1;
setthtml("seat_available",seat_store);
addvaluetoseat(data,data.innerHTML,count,price);
password_othentication(count);

},{once:true}
)
}



function addREmoveclass(elementID,classname)
{
const id=elementID;

if(!id.classList.contains(classname))
{
  id.classList.add(classname);
}

else if(id.classList.contains(classname)){

 alert("alerdy selected");

}


}










function addvaluetoseat(data,newtext,count,price)
{
  
  // console.log(element)
  if( count<=4){

    addREmoveclass(data,"change");
const set_seat=getid("set_seat");

const seatcount=getid("seatcount");

const totalprice=getid("totalprice");

//append seatnumber

appendnewelement(set_seat,newtext);


const inputcuppon_input=getid("inputcuppon_input");

// console.log(totalprice);

totalprice.innerText=price;
setthtml("grand_total",price);

//cu[ppons
if(count>=2)
{

 cupponActive(inputcuppon_input,price,count);

}

else 
{
 inputcuppon_input.classList.add("ininvisible");

}
}

else{

  alert("at a time 4 ticket you can buy");
  window.location.reload();

}

//set price


}



function getid(elementid)
{
  return document.getElementById(elementid);
}

//cupponactive
// ......................

function cupponActive(inputcuppon_input,price,count)
{
  inputcuppon_input.classList.remove("invisible");
inputcuppon_input.addEventListener("keyup",(e)=>


{
// console.log(inputcuppon_input.value);
let publicValue=e.target.value;

const checkcuppon=getid("checkcuppon");

checkcuppon.addEventListener("click",()=>

{

if(cuppon_1===publicValue || cuppon_2===publicValue)
{



 

calculate_value(price,count,publicValue);
inputcuppon_input.value="Have any coupon?";
}



else {

  //alert("yeah sry maybe your code is wrong");
  //window.location.reload();
}
}
)

})



}



function calculate_value(price,count,publicValue)
{

const priceNEW=price;
// console.log(count,"count is")

if(publicValue ===cuppon_2  && count>=3  )
{

  let valueAafterDiscount=priceNEW-(20/100*price);
setthtml("grand_total",Math.round(valueAafterDiscount))
// console.log("prb-1")
  
  

}

 else if(publicValue===cuppon_1)
{

  let valueAafterDiscount=priceNEW-(15/100*price);
setthtml("grand_total",valueAafterDiscount);
// console.log("prb-2")
}


else 
{
  
//alert("yeah sry you are not applicable");
//window.location.reload();
// console.log("prb-3")

}

}



function setthtml(elementid,elementdata)

{

const setid=document.getElementById(elementid);
setid.innerText=elementdata;

}

function appendnewelement(elementid,data)
{


  const createNewTR=document.createElement("tr");

createNewTR.innerHTML=`<td>`+data+`</td>`+`<td>`+"Econmoic"+`</td>`+`<td>`+"550"+`</td>`

seatcount.innerText=count;
// console.log(count);

set_seat.append(createNewTR);
}







//data hoche anchor tag
//   data.addEventListener("click",(e)=>
// {

//   e.preventDefault();
// const storeattribute=data.getAttribute("href");
// document.querySelector(storeattribute).scrollIntoView({behavior:"smooth"});

// console.log(storeattribute);

// data.classList.add("change");
//   // console.log(data.innerHTML);
//   value(data);
//   //  data.disabled = true;
//   //  console.log(data.disabled);


// },{once:true})



function value(data){
  
console.log(data.classList.contains("change"))
if(data.classList.contains("change"))
{
  //alert("pls select new one")
  
//   console.log(data.innerText);
  document.getElementById("datastore").append(data.innerText);
// data.classList.remove("change");


}



}


function password_othentication(count)
{
//passenger_name
//Phone_Number
//email
//my_modal_8
//next
// const next=getid("next");
//.............................................
//calling next
if(count>0)
{
next.addEventListener("click", function nextclick()
{
//     next.setAttribute("href",true);
//  next.href=my_modal_8;


// my_modal_8.style.display("block");
// console.log("next",);

let passenger_name_value=getinputvalue(passenger_name);
let Phone_Number_value=getinputvalue(Phone_Number);
let email_value=getinputvalue(email);
 if(email_value.split("@").includes("gmail.com") && isNaN(Phone_Number_value) ==false  &&  isNaN(passenger_name_value)  &&  passenger_name_value.length>5  )

 {

Phone_Number_value=parseInt(Phone_Number_value);

my_modal_8.classList.remove("hidden");
body.classList.add("hidden");
passenger_name_show.innerText=passenger_name_value;

 }


else{

    alert("Please Properly Fill The form");

}

}


),{once:true}

    
}


const passenger_name=getid("passenger_name");
const passenger_name_show=getid("passenger_name_show");
const Phone_Number=getid("Phone_Number");
const body=getid("main");

const email=getid("email");
const my_modal_8=getid("my_modal_8");



// console.log("pass",count);


}









function getinputvalue(inputfliedID)
{
return inputfliedID.value;

}

// document.addEventListener("keyup", (e)=>{
    
//     // use e.keyCode
//     console.log(e)
// }

// )