addEventListener("load",()=>{
 let cliente_lista = Array();
 cliente_tipo = Array();
 cliente_lista = ['Amigos','Companheiros','Familia','Casas','Outros'];
 cliente_tipo = ['Nada Especial','Aniversario','Reunião','Outro'];

   
 for(let cont = 0;cont < cliente_lista.length;cont++){
    
          document.getElementById("tipo_1").innerHTML +="<option value='"+cliente_lista[cont]+"'>"+cliente_lista[cont]+"</option>";
         
  }
  for(let vl = 0; vl <cliente_tipo.length;vl++){
    
    document.getElementById("tipo_2").innerHTML +="<option value='"+cliente_tipo[vl]+"'>"+cliente_tipo[vl]+"</option>";
  
}


// btn com id exit -- fecha a modal views de reserva
document.getElementById("VerReserva").addEventListener('click',()=>{
    document.getElementById("VerReserva").style.display ="none"
})

// btn para fazer Reserva
document.getElementById("Crir_r").addEventListener('click',()=>{
    document.getElementById("formReserva").style.display ="flex"
})

// btn para Ver as reservas

document.getElementById("Ver_r").addEventListener('click',()=>{
    document.getElementById("VerReserva").style.display ="block"
})

// btn do formulario de crir reserva "Cancelar" 

document.getElementById("cancelar").addEventListener('click',()=>{
    document.getElementById("formReserva").style.display ="none"
})
// btn do formulario  criar reserva "finalizar"
document.getElementById("send").addEventListener('click',()=>{
    
 let valores = [document.getElementById("nome").value,document.getElementById("total").value,document.getElementById("hora").value,document.getElementById("datas").value];


    document.getElementById("tabela").innerHTML +="<tr class='list_cell'color='#58AD53'><td>"+valores[0]+"</td><td>"+valores[1]+"</td><td>"+valores[2]+"</td><td>"+valores[3]+"</td></tr>"
    if(valores[0] != ""){
        document.getElementById("formReserva").style.display ="none"
    }
})


});