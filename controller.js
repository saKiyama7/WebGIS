var map = L.map("map", { crs: L.CRS.EPSG4326 }).setView(
    [40.40597439708923, -3.8355703741754645],
    17
  );
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
  var capa3 = L.tileLayer.wms(
    "https://servicios.idee.es/wms-inspire/transportes?TN.RoadTransportNetwork.RoadLink",
    {
      layers: "TN.RoadTransportNetwork.RoadLink",
      format: "image/png",
      transparent: true,
      attribution: "Carreteras",
    }
  );
  var capa4 = L.Geoserver.wms(
    "http://localhost:8080/geoserver/WebGIS/wms",
    {
      layers: "carretera_acceso",
      format: "image/png",
      transparent: true,
      attribution: "Acceso",
    }
  );
  capa4.addTo(map);
  var overlays = { Carreteras: capa3, Acceso: capa4 };
  var baseLayers = { OSGEO: capa1, PNOA: capa2 };
  L.control.layers(baseLayers, overlays).addTo(map);