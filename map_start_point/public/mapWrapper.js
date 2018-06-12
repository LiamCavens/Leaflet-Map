const MapWrapper = function(element, coords, zoom) {
    const osmLayer = new L.TileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png")
    this.map = L.map(element).addLayer(osmLayer).setView(coords, zoom);
    this.map.on("click", function(event){
       this.addMarker(event.latlng); 
    }.bind(this))
}

MapWrapper.prototype.addMarker = function (coords){
    L.marker(coords).addTo(this.map);
}

MapWrapper.prototype.flyMeTo = function(place){
    this.map.flyTo(place, 10);
    L.marker(place).addTo(this.map).bindPopup('Timbuktu, also spelt Tinbuktu, Timbuctoo and Timbuktoo, is an ancient city in Mali, situated 20 km north of the Niger River. The town is the capital of the Timbuktu Region, one of the eight administrative regions of Mali.').openPopup()
}
