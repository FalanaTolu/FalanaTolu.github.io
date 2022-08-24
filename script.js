let carrier = document.getElementById("number")
// carrier.pattern = "([\+](234)|0)(701|708|802|808|812|901|902|907)[0-9]+"
let image = document.querySelector(".image-class img")

function displayImage() {
    let carrierNumber = carrier.value
    
    let carrierNumberMtn = ["0703", "0706", "0803", "0806", "0810", "0813", "0816", "0814", "0903", "0906", 
    "+234703", "+234706", "+234803", "+234806", "+234810", "+234813", "+234816", "+234814", "+234903", "+234906"]
    let carrierNumberMtnFound = carrierNumberMtn.some(number => carrierNumber.startsWith(number))
    
    let carrierNumberGlo = ["0705", "0805", "0811", "0807", "0815", "0905", 
    "+234705", "+234805", "+234811", "+234807", "+234815", "+234905"]
    let carrierNumberGloFound = carrierNumberGlo.some(number => carrierNumber.startsWith(number))
    
    let carrierNumberAirtel = ["0701", "0708", "0802", "0808", "0812", "0901", "0902", "0907", 
    "+234701", "+234708", "+234802", "+234808", "+234812", "+234901", "+234902", "+234907"]
    let carrierNumberAirtelFound = carrierNumberAirtel.some(number => carrierNumber.startsWith(number))
    
    let carrierNumber9mobile = ["0809", "0817", "0818", "0908", "0909", 
    "+234809", "+234817", "+234818", "+234908", "+234909"]
    let carrierNumber9mobileFound = carrierNumber9mobile.some(number => carrierNumber.startsWith(number))
    
    let carrierNumberNtel = ["0804", "+234804"]
    let carrierNumberNtelFound = carrierNumberNtel.some(number => carrierNumber.startsWith(number))
    
    let carrierNumberSmile = ["0702", "+234702"]
    let carrierNumberSmileFound = carrierNumberSmile.some(number => carrierNumber.startsWith(number))
    
    let carrierNumberMultilinks = ["0709", "+234709"]
    let carrierNumberMultilinksFound = carrierNumberMultilinks.some(number => carrierNumber.startsWith(number))
    
    let carrierNumberZoomMobile = ["0707", "+234707"]
    let carrierNumberZoomMobileFound = carrierNumberZoomMobile.some(number => carrierNumber.startsWith(number))

    // firstNum = carrierNumber.substring(0, 4)
    // console.log(carrierNumber)
    // console.log(firstNum)

    // let carrierNumber9mobile = "0809"|| "0817" || "0818" ||"0908" || "0909"
    // xo = carrierNumber.startsWith([x], 1) || carrierNumber.startsWith([x], 5)
    
    // switch (carrierNumber) {
    //     case carrierNumberMtnFound:
    //         console.log("mtn")
    //         break;
    //     default:
    //         console.log("null")
    //         break;
    // }

    if (carrierNumberMtnFound) {
        image.src = "images/mtn.jpg"
    } else if (carrierNumberGloFound) {
        image.src = "images/glo.jpg"
    } else if (carrierNumberAirtelFound) {
        image.src = "images/airtel.jpg"
    } else if (carrierNumber9mobileFound) {
        image.src = "images/9mobile.jpg"
    } else if (carrierNumberNtelFound) {
        image.src = "images/ntel.jpg"
    } else if (carrierNumberSmileFound) {
        image.src = "images/smile.jpg"
    } else if (carrierNumberMultilinksFound) {
        image.src = "images/multilinks.jpg"
    } else if (carrierNumberZoomMobileFound) {
        image.src = "images/zoom-mobile.jpg"
    }  else {
        image.src = "images/null.png"
    }  
    
    // if (carrierNumberMtn.includes(firstNum)) {
    //     console.log("mtn")
    // } else if (carrierNumberGlo.includes(firstNum)) {
    //     console.log("glo")
    // } else if (carrierNumberAirtel.includes(firstNum)) {
    //     console.log("airtel")
    // } else if (carrierNumber9mobile.includes(firstNum)) {
    //     console.log("9mobile")
    // } else if (carrierNumberNtel.includes(firstNum)) {
    //     console.log("ntel")
    // } else if (carrierNumberSmile.includes(firstNum)) {
    //     console.log("smile")
    // } else if (carrierNumberMultilinks.includes(firstNum)) {
    //     console.log("multilinks")
    // } else if (carrierNumberZoomMobile.includes(firstNum)) {
    //     console.log("zoom mobile")
    // }  else {
    //     console.log("null")
    // }  

}

carrier.addEventListener("input", displayImage)


carrier.oninvalid = function(event) {
    // event.target.setCustomValidity("Please enter an airtel number");
    carrier.title = "Only airtel numbers starting with 0701, 0708, 0802, 0808, 0812, 0901, 0902, 0907 are valid"
}

carrier.onchange = function(event) {
    event.target.setCustomValidity("");
}
