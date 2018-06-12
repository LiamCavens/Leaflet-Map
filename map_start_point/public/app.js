const drawMap = function (){
    const mapDiv = document.getElementById('main-map');
    const javaStreet = [55.801507, -4.003805];
    const timbuktu = [16.7666, -3.0026];
    const zoomLevel = 15;
    const mainMap = new MapWrapper(mapDiv, javaStreet, zoomLevel);
    mainMap.addMarker(javaStreet);

    const button = document.querySelector('#timbuktu');
    button.addEventListener('click', function(){
        mainMap.flyMeTo(timbuktu)
    });
}

window.addEventListener('load', drawMap)