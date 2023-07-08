function getRandomUpper(){
  return String.fromCharCode(Math.floor(Math.random()*26)+65);
}

function getRandomLower(){
  return String.fromCharCode(Math.floor(Math.random()*26)+97);
}
function getRandomNumber(){
  return String.fromCharCode(Math.floor(Math.random()*10)+48);
}
function getRandomSymbol(){
  const symbols="~!@#$%^&*()_{}|:<>?/[]";
  return symbols[Math.floor(Math.random()*symbols.length)];
}

const resultE1=document.getElementById("result");
const lengthE1=document.getElementById("length");
const upperE1=document.getElementById("uppercase");
const lowerE1=document.getElementById("lowercase");
const numberE1=document.getElementById("numbers");
const symbolE1=document.getElementById("symbols");
const clipboardE1=document.getElementById("clipboard");
const generateE1=document.getElementById("generate");


const randomFunc ={
     lower:getRandomLower,
     upper:getRandomUpper,
     number:getRandomNumber,
     symbol:getRandomSymbol

};
clipboardE1.addEventListener("click",()=>{
  const Password=resultE1.text
  if(!Password){
    return
  }
  navigator.clipboard.writeText(Password)
  alert("Password copied to clipboard !")
}
)
generateE1.addEventListener("click",()=>{
    const length=+lengthE1.value ;
    const hasUpper=upperE1.checked;
    const hasLower=lowerE1.checked;
    const hasNumber=numberE1.checked;
    const hasSymbol=symbolE1.checked;
  resultE1.innerText=generatePassword(
    hasUpper,
    hasLower,
    hasNumber,
    hasSymbol,
    length
    );
 //  console.log(hasLower,hasNumber,hasUpper,hasSymbol,length);

})

function generatePassword(upper,lower,number,symbol,length){
    let generatedPassword=""
    const typesCount=lower+number+upper+symbol
    const typesArray=[{lower},{number},{upper},{symbol}].filter(item=>Object.values(item)[0])   

     if(typesCount===0){
      return "" ;
     }
    //  for(let i = 0; i < length; i += typesCount) {
    //   typesArr.forEach(type => {
    //       const funcName = Object.keys(type)[0]
    //       generatedPassword += randomFunc[funcName]()
    //   })
    for(let i=0;i<length;i+=typesCount){
         typesArray.forEach(type=>{
            const funcName=Object.keys(type)[0]
             generatedPassword += randomFunc[funcName]()
                  })
                }
           const finalPassword=generatedPassword.slice(0,length)
           return finalPassword

    }
  





