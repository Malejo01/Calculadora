// seleccionar operacion
let operacion = (prompt ("¿Que operación queres realizar? SUMA, RESTA, MULTIPLICACION, DIVISION, POTENCIA, RAIZ"))

operacion = operacion.toLowerCase ();

//algoritmo suma
if (operacion ==="suma" || operacion ==="sumar" || operacion==="agregar" || operacion==="añadir" || operacion ==="adicionar")
    {
        let a = Number (prompt ("Ingresa el primer numero"))
        let b = Number (prompt ("Ingresa el otro numero"))
let c = a+b
alert ("El resultado es "+c)
    }


//algoritmo resta
else if (operacion ==="resta" || operacion ==="restar" || operacion==="quitar" || operacion==="diferenciar" || operacion ==="sustraer")
    {
        let a = Number (prompt ("Ingresa el primer numero"))
        let b = Number (prompt ("Ingresa el otro numero"))
let c = a-b
alert ("El resultado es "+c)
    }

//algoritmo multiplicacion
else if (operacion ==="multiplicar" || operacion ==="multiplicacion" || operacion==="multiplicación" || operacion==="producto")
    {
        let a = Number (prompt ("Ingresa el primer numero"))
        let b = Number (prompt ("Ingresa el otro numero"))
let c = a*b
alert ("El resultado es "+c)
    }

//algoritmo division
else if (operacion ==="dividir" || operacion ==="division" || operacion==="división" || operacion==="cociente")
    { 
        let a = Number (prompt ("Ingresa el primer numero"))
        let b = Number (prompt ("Ingresa el otro numero"))
        if (b===0) {
        confirm ("No se puede dividir por cero") 
    }
    else {
        let c = a/b
        alert ("El resultado es "+c)
    }
    }

//algoritmo potencia
else if (operacion ==="potencia" || operacion ==="potencias" || operacion==="elevar" || operacion==="exponente" || operacion ==="exponentes")
{   let d = Number (prompt ("Ingresa la base"))
    let e = Number (prompt ("Ingresa el exponente"))    
                if (d===0 && e===0) {
                alert ("Indefinido, en todo caso mira los limites")
                }
        else {
            let c = d**e
            alert (c)
        }
    }
//algoritmo raiz
else if (operacion ==="raiz" || operacion ==="raíz" || operacion==="raices" || operacion==="raíces" || operacion ==="adicionar")
    {
    let f = Number (prompt ("Ingresa la base"))
    let g = Number (prompt ("Ingresa el indice de la raiz"))
    let c = f**(1/g) 
{ if (isNaN(c)) 
    {
    alert ("Disculpe, por el momento no estamos calculando con numeros complejos")
    }
else
    {
alert (c)
    }
    }
    }
