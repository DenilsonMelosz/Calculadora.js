const inicialText = document.getElementById("inicial")
const valoresText = document.getElementById("valores")
const buttons = document.querySelectorAll("#botoes button")

class Calculator { 

}

buttons.forEach((btn) => {
    btn.addEventListener("click" , (e) => {
        
        const value = e.target.innerText;
        
        console.log(value);
    });
}); 