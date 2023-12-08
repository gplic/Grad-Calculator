//Grad calculator

//Event Listerners
document.getElementById("result").addEventListener("click", calculate)

function calculate() {
    // Input
    let grad1 = +document.getElementById("g1").value;
    let grad2 = +document.getElementById("g2").value;
    let grad3 = +document.getElementById("g3").value;
    let grad4 = +document.getElementById("g4").value;
    let grad5 = +document.getElementById("g5").value;

    // Process
    let result = ((grad1 + grad2 + grad3 + grad4 + grad5) / 5)
    
    // Output
    document.getElementById("ave").innerHTML = result
    if (result < 50) {
        document.getElementById("frp").innerHTML = `Failing grade.`
    } else {
        document.getElementById("frp").innerHTML = `Passing grade!` 
    }
}
