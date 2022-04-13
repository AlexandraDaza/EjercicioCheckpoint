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
    
    
      console.log (venderAuto("APL123"))}
    }
}


