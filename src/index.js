function showSelectedCountry(event){
    if (event.target.length >0) {
        
        if (event.target.value === "Paris") {
            let paristime= moment().tz("Europe/Paris").format("dddd, MMMM D, YYYY h:m A");
            alert(`It is ${paristime} in Europe/Paris` );
            
        }
        if (event.target.value ==="Tokyo") {
            let tokyoTime= moment().tz("Asia/Tokyo").format("dddd, MMMM D, YYYY h:m A");
        
        
            alert(` It is ${tokyoTime} in Asia/Tokyo`) ;
            
                
            
        }
        if (event.target.value ==="Sydney") {
            let sydneyTime= moment().tz("Australia/Sydney").format("dddd, MMMM D, YYYY h:m A");
            alert(`It is ${sydneyTime} in Australia/Sydney`);
        }
    }
    
    
}

let countriesSelected= document.querySelector("#countries");
countriesSelected.addEventListener("change", showSelectedCountry);