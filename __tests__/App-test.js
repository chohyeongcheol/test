var map = L.map('map', {crs: L.CRS.Simple});
var bounds = [[0,0], [428,608]];
var baseMaps = {
  "21F": L.imageOverlay('21F Image Link', bounds),
  "22F": L.imageOverlay('22F Image Link', bounds),
  "23F": L.imageOverlay('22F Image Link', bounds)
}
L.control.layers(baseMaps).addTo(map);
map.on("baselayerchange", (event) => {
  console.log(event.name); // 변경 후의 층수를 출력한다.
  // 층별 처리를 구현한다.
});
map.addLayer(baseMaps["15F"]);
map.fitBounds(bounds);