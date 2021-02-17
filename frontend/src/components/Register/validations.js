
export const validationInput = (email, ...args) => {
 let cheker = true

    args.forEach(element => {
        if(element === "" || email ==="") {
             cheker = false
         }
     })

 if(cheker === false){
    alert("Ooooppss you missed some fields..")
    return false 
 }
else if(!isValiEmail(email) ){
     alert("please enter a valid email")
        return false
}
else{
     return true
}       

}
     
  
function isValiEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return email ? re.test(String(email).toLowerCase()) : false;
  }

