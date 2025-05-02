var wms_layers = [];


        var lyr_GoogleTerrain_0 = new ol.layer.Tile({
            'title': 'Google Terrain',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });
var format_shape_terreno_1 = new ol.format.GeoJSON();
var features_shape_terreno_1 = format_shape_terreno_1.readFeatures(json_shape_terreno_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_shape_terreno_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_shape_terreno_1.addFeatures(features_shape_terreno_1);
var lyr_shape_terreno_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_shape_terreno_1, 
                style: style_shape_terreno_1,
                popuplayertitle: 'shape_terreno',
                interactive: true,
    title: 'shape_terreno<br />\
    <img src="styles/legend/shape_terreno_1_0.png" /> 0 - 29<br />\
    <img src="styles/legend/shape_terreno_1_1.png" /> 29 - 101<br />\
    <img src="styles/legend/shape_terreno_1_2.png" /> 101 - 272<br />\
    <img src="styles/legend/shape_terreno_1_3.png" /> 272 - 730<br />\
    <img src="styles/legend/shape_terreno_1_4.png" /> 730 - 117306<br />' });

lyr_GoogleTerrain_0.setVisible(true);lyr_shape_terreno_1.setVisible(true);
var layersList = [lyr_GoogleTerrain_0,lyr_shape_terreno_1];
lyr_shape_terreno_1.set('fieldAliases', {'codigo_nue': 'codigo_nue', 'area_ha': 'area_ha', 'Perimetro': 'Perimetro', 'reg1_paulo_NOMBRE': 'reg1_paulo_NOMBRE', 'reg1_paulo_NUMERO DOCUMENTO': 'reg1_paulo_NUMERO DOCUMENTO', 'reg1_paulo_AVALUO': 'reg1_paulo_AVALUO', });
lyr_shape_terreno_1.set('fieldImages', {'codigo_nue': 'TextEdit', 'area_ha': 'TextEdit', 'Perimetro': 'TextEdit', 'reg1_paulo_NOMBRE': 'TextEdit', 'reg1_paulo_NUMERO DOCUMENTO': 'TextEdit', 'reg1_paulo_AVALUO': 'TextEdit', });
lyr_shape_terreno_1.set('fieldLabels', {'codigo_nue': 'hidden field', 'area_ha': 'inline label - always visible', 'Perimetro': 'inline label - always visible', 'reg1_paulo_NOMBRE': 'inline label - visible with data', 'reg1_paulo_NUMERO DOCUMENTO': 'hidden field', 'reg1_paulo_AVALUO': 'inline label - always visible', });
lyr_shape_terreno_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});