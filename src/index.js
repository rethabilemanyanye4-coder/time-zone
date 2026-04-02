function showSelectedCountry(event){
    if (event.target.length >0) {
        
        if (event.target.value === "Paris") {
            alert()
            
        }
        if (event.target.value ==="Tokyo") {
            alert()
        }
        if (event.target.value ==="Sydney") {
            alert()
        }
    }
}
let countriesSelected= document.querySelector("#countries");
countriesSelected.addEventListener("change", showSelectedCountry);