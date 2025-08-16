addEventListener('load',()=>{
    let lista_pratos = [prato ={
        nome:"PANQUECA ",
        url:"./assets/food/pratos (1).jpg",
        price:"8.000kz"
        
    },prato ={
        nome:"FRANGO COV",
        url:"./assets/food/pratos (2).jpg",
        price:"12.000kz"
        
    },prato ={
        nome:"CENINHO",
        url:"./assets/food/pratos (3).jpg",
        price:"15.000kz"
        
    },prato ={
        nome:"CRUG-RECHI",
        url:"./assets/food/pratos (4).jpg",
        price:"20.000kz"
        
    },prato ={
        nome:"FAITA",
        url:"./assets/food/pratos (5).jpg",
        price:"7.500kz"
        
    },prato ={
        nome:"MARG-FRANGO",
        url:"./assets/food/pratos (6).jpg",
        price:"15.000kz"
        
    },prato ={
        nome:"GRELHADO",
        url:"./assets/food/pratos (7).jpg",
        price:"18.000kz"
        
    }]
    Carregar_menu()





function Carregar_menu(){

    for(let a = 0; a< lista_pratos.length;a++){
      
      document.getElementById("container_food").innerHTML +="<div class='box_food'> <img src='"+lista_pratos[a].url+"' ><div class='price'><div class='name'><h2>"+lista_pratos[a].nome+"</h2> </div><div class='pricing'><b>"+lista_pratos[a].price+"</b> </div></div></div>"
    }
}
})