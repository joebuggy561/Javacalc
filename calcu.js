function calc(){
    var a = parseInt(document.querySelector("#value1").value);
    var b = parseInt(document.querySelector("#value2").value);
    var operate = document.querySelector("#operator").value;
    var calculate;

    if (operate === "add"){
        calculate = a + b;
    }else if(operate === "minus"){
        calculate = a - b;
    }else if(operate === "mul"){
        calculate = a * b;
    }else if(operate === "div"){
        calculate = a / b;
    }

    document.querySelector("#result").innerHTML = calculate;
}