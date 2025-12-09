let total = 0;
function calculate(price){
    total += price;
    let deliveryfee = 100;
    if(total >=1500){
        deliveryfee=0;
    }
    else{
        deliveryfee=100
    }

    finalAmount = deliveryfee + total ; 
    document.getElementById("total").innerHTML = "Total: Rs:" + total;
    document.getElementById("delivery").innerHTML = "Delivery fee: Rs:" + deliveryfee
    document.getElementById("final").innerHTML = "Final Amount: Rs:" + finalAmount;
    
}