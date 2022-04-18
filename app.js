const autos = require ('./autos')
const concesionaria = {
    
    autos: autos,
  
  
    buscarAuto: function(patente) {
      let auto = this.autos.filter(function(objeto){
        return objeto.patente == patente
      })
      if(auto != null){
        return auto
      }else{
        return null
      }
    },
    venderAuto: function (patenteBuscar) {
        let patenteBuscada= this.buscarAuto(patenteBuscar).patente;
        if ((patenteBuscada !=null)){
          return venderAuto
    }
  },
    autosParaLaVenta: function autosParaLaVenta(){
     let autosALaVenta = this.autos.filter(function(objeto){
      return objeto.vendido == false
      })
      return autosALaVenta
    },
    autosNuevos: function autosNuevos(){
      let autosALaVenta = this.autosParaLaVenta().filter(function(objeto){ 
       return objeto.km < 100  
      })    
      return autosALaVenta
    },
    
    listaDeVentas: function (patente){
      let lista = [];
      const ventas= autos.filter(function(objeto){
        if ( objeto.vendido==true){
          return lista.push(objeto.precio);
        }
      })
      let map = ventas.map(function(elemento){
        if ( elemento.patente == patente){
          return lista
        }
      })
     return map
    },
       totalDeVentas: function totalDeVentas(){
    let ventas = this.listaDeVentas()
    if(ventas[0] == null){
        return 0
    }
    else{
    let total = ventas.reduce(function(estado, numero){
        return estado + numero
    })
    return total
    }
}
}
console.log(concesionaria.totalDeVentas())
  /*
  for (i = 0; i < ventas.length; i++){
  
  autosNuevos: function autosOKM(){
    let auto = this.autosParaLaVenta(),
    (function (objeto){
      objeto.km < 100
    return autosNuevos
  console.log (concesionaria.autosNuevos('JJK116')
{
  */
