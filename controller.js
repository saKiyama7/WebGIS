var map = L.map("map", { crs: L.CRS.EPSG4326 }).setView(
  [40.40562217022866, -3.834734211019332],
  17
);
var searchbox = L.control.searchbox({
  position: 'topright',
  expand: 'left'
}).addTo(map);
var capa1 = L.tileLayer.wms("http://vmap0.tiles.osgeo.org/wms/vmap0", {
  layers: "basic",
  format: "image/jpeg",
  transparent: true,
  attribution: "OsGEO",
});
capa1.addTo(map);
var capa2 = L.tileLayer.wms("http://www.ign.es/wms-inspire/pnoa-ma", {
  layers: "OI.OrthoimageCoverage",
  format: "image/jpeg",
  transparent: true,
  attribution: "PNOA",
});
var capa3 = L.Geoserver.wms("http://localhost:8080/geoserver/SIGWeb/wms", {
  layers: "SIGWeb:parqueaderos",
  format: "image/png",
  transparent: true,
  attribution: "Parqueaderos",
});
capa3.addTo(map);
var capa4 = L.Geoserver.wms("http://localhost:8080/geoserver/SIGWeb/wms", {
  layers: "SIGWeb:carretera_acceso",
  styles: "SIGWeb:accesos",
  format: "image/png",
  transparent: true,
  attribution: "Acceso",
});
capa4.addTo(map);
var capa5 = L.Geoserver.wms("http://localhost:8080/geoserver/SIGWeb/wms", {
  layers: "SIGWeb:edificios",
  styles: "SIGWeb:edificios",
  format: "image/png",
  transparent: true,
  attribution: "Edificios",
});
capa5.addTo(map);
var capa6 = L.Geoserver.wms("http://localhost:8080/geoserver/SIGWeb/wms", {
  layers: "SIGWeb:canchas",
  styles: "SIGWeb:canchas",
  format: "image/png",
  transparent: true,
  attribution: "Canchas",
});
capa6.addTo(map);
var capa7 = L.Geoserver.wms("http://localhost:8080/geoserver/SIGWeb/wms", {
  layers: "SIGWeb:paradas",
  styles: "SIGWeb:paradas",
  format: "image/png",
  transparent: true,
  attribution: "Paradas",
});
capa7.addTo(map);
// var overlays = { Carreteras: capa3, Acceso: capa4, Edificios: capa5 };
var overlays = {
  Parqueaderos: capa3,
  Acceso: capa4,
  Edificios: capa5,
  Canchas: capa6,
  Paradas: capa7,
};
map.on('click',function(e){
  	
  	var latlng = e.latlng;
  	
  	map.setView(latlng, 100);
 });
var baseLayers = { OSGEO: capa1, PNOA: capa2 };
L.control.layers(baseLayers, overlays).addTo(map);
