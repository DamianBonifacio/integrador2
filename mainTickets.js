

const valorTicket=200

function calcularTotal(){
    let cantidad = document.getElementById("cantidad").value 
    let categoria = document.getElementById("categoria").value
    let descuento

    if (categoria==1) {
        descuento=80
    } else if(categoria==2){
        descuento=50
    } else {
        descuento=15 
    }

    let total = cantidad* valorTicket
    total-=total*descuento/100 //al valor del ticket le resto el porcentaje 200-(200*80%/100)

    document.getElementById("total").innerHTML=total
}
function cardEstudiantes(cat){
    document.getElementById("categoria").value=cat
    calcularTotal()
} 