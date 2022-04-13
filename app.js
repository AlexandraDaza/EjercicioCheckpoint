const autos = require ('./autos')
const concesionaria = {
    
    autos: autos,
  
  
    buscarAuto: function(patente) {
      for (let i = 0; i < autos.length; i++){
        if (autos[i].patente == patente) {
          return autos[i]
        }else
        return null;
    }
},
    venderAuto: function (patente) {
    const auto = this.buscarAuto(patente);
    if (auto) {
      auto.vendido = true;
    }
},
     autosParaLaVenta: function autosParaLaVenta(){ 
       let autosALaVenta = this.autos.filter(function(objeto){
     return objeto.vendido ==
     false
   })
  return autosALaVenta
     }
    },
    autosNuevos:function autoNuevo=> {
      let autosALaVenta = this.autosParaLaVenta()
      let autosNuevos = autosALaVenta.filter(function(objeto){
          return objeto.km < 100
      })
      return autosNuevos;
    }
  },
