var wms_layers = [];

        var lyr_GOOGLESATLITE_0 = new ol.layer.Tile({
            'title': 'GOOGLESATLITE_0',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap_1',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                url: 'http://a.tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });var format_PANAMERICANO_CAPITAL_Vialidad_2 = new ol.format.GeoJSON();
var features_PANAMERICANO_CAPITAL_Vialidad_2 = format_PANAMERICANO_CAPITAL_Vialidad_2.readFeatures(json_PANAMERICANO_CAPITAL_Vialidad_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PANAMERICANO_CAPITAL_Vialidad_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_PANAMERICANO_CAPITAL_Vialidad_2.addFeatures(features_PANAMERICANO_CAPITAL_Vialidad_2);var lyr_PANAMERICANO_CAPITAL_Vialidad_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PANAMERICANO_CAPITAL_Vialidad_2, 
                style: style_PANAMERICANO_CAPITAL_Vialidad_2,
                title: '<img src="styles/legend/PANAMERICANO_CAPITAL_Vialidad_2.png" /> PANAMERICANO_CAPITAL_Vialidad'
            });var format_PANAMERICANO_CAPITAL_Unidades_de_Paisaje_3 = new ol.format.GeoJSON();
var features_PANAMERICANO_CAPITAL_Unidades_de_Paisaje_3 = format_PANAMERICANO_CAPITAL_Unidades_de_Paisaje_3.readFeatures(json_PANAMERICANO_CAPITAL_Unidades_de_Paisaje_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PANAMERICANO_CAPITAL_Unidades_de_Paisaje_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_PANAMERICANO_CAPITAL_Unidades_de_Paisaje_3.addFeatures(features_PANAMERICANO_CAPITAL_Unidades_de_Paisaje_3);var lyr_PANAMERICANO_CAPITAL_Unidades_de_Paisaje_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PANAMERICANO_CAPITAL_Unidades_de_Paisaje_3, 
                style: style_PANAMERICANO_CAPITAL_Unidades_de_Paisaje_3,
    title: 'PANAMERICANO_CAPITAL_Unidades_de_Paisaje<br />\
    <img src="styles/legend/PANAMERICANO_CAPITAL_Unidades_de_Paisaje_3_0.png" /> Pie de Monte<br />\
    <img src="styles/legend/PANAMERICANO_CAPITAL_Unidades_de_Paisaje_3_1.png" /> Planicie Aluvial<br />\
    <img src="styles/legend/PANAMERICANO_CAPITAL_Unidades_de_Paisaje_3_2.png" /> Planicie de Desborde<br />'
        });var format_PANAMERICANO_CAPITAL_Temperatura_4 = new ol.format.GeoJSON();
var features_PANAMERICANO_CAPITAL_Temperatura_4 = format_PANAMERICANO_CAPITAL_Temperatura_4.readFeatures(json_PANAMERICANO_CAPITAL_Temperatura_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PANAMERICANO_CAPITAL_Temperatura_4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_PANAMERICANO_CAPITAL_Temperatura_4.addFeatures(features_PANAMERICANO_CAPITAL_Temperatura_4);var lyr_PANAMERICANO_CAPITAL_Temperatura_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PANAMERICANO_CAPITAL_Temperatura_4, 
                style: style_PANAMERICANO_CAPITAL_Temperatura_4,
    title: 'PANAMERICANO_CAPITAL_Temperatura<br />\
    <img src="styles/legend/PANAMERICANO_CAPITAL_Temperatura_4_0.png" /> 34<br />'
        });var format_PANAMERICANO_CAPITAL_Precipitacion_5 = new ol.format.GeoJSON();
var features_PANAMERICANO_CAPITAL_Precipitacion_5 = format_PANAMERICANO_CAPITAL_Precipitacion_5.readFeatures(json_PANAMERICANO_CAPITAL_Precipitacion_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PANAMERICANO_CAPITAL_Precipitacion_5 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_PANAMERICANO_CAPITAL_Precipitacion_5.addFeatures(features_PANAMERICANO_CAPITAL_Precipitacion_5);var lyr_PANAMERICANO_CAPITAL_Precipitacion_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PANAMERICANO_CAPITAL_Precipitacion_5, 
                style: style_PANAMERICANO_CAPITAL_Precipitacion_5,
    title: 'PANAMERICANO_CAPITAL_Precipitacion<br />\
    <img src="styles/legend/PANAMERICANO_CAPITAL_Precipitacion_5_0.png" /> 1400 - 1800<br />\
    <img src="styles/legend/PANAMERICANO_CAPITAL_Precipitacion_5_1.png" /> 1800 - 2200<br />\
    <img src="styles/legend/PANAMERICANO_CAPITAL_Precipitacion_5_2.png" /> 2200 - 2600<br />'
        });var format_PANAMERICANO_CAPITAL_Isoyetas_6 = new ol.format.GeoJSON();
var features_PANAMERICANO_CAPITAL_Isoyetas_6 = format_PANAMERICANO_CAPITAL_Isoyetas_6.readFeatures(json_PANAMERICANO_CAPITAL_Isoyetas_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PANAMERICANO_CAPITAL_Isoyetas_6 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_PANAMERICANO_CAPITAL_Isoyetas_6.addFeatures(features_PANAMERICANO_CAPITAL_Isoyetas_6);var lyr_PANAMERICANO_CAPITAL_Isoyetas_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PANAMERICANO_CAPITAL_Isoyetas_6, 
                style: style_PANAMERICANO_CAPITAL_Isoyetas_6,
                title: '<img src="styles/legend/PANAMERICANO_CAPITAL_Isoyetas_6.png" /> PANAMERICANO_CAPITAL_Isoyetas'
            });var format_PANAMERICANO_CAPITAL_Hidrografia_7 = new ol.format.GeoJSON();
var features_PANAMERICANO_CAPITAL_Hidrografia_7 = format_PANAMERICANO_CAPITAL_Hidrografia_7.readFeatures(json_PANAMERICANO_CAPITAL_Hidrografia_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PANAMERICANO_CAPITAL_Hidrografia_7 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_PANAMERICANO_CAPITAL_Hidrografia_7.addFeatures(features_PANAMERICANO_CAPITAL_Hidrografia_7);var lyr_PANAMERICANO_CAPITAL_Hidrografia_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PANAMERICANO_CAPITAL_Hidrografia_7, 
                style: style_PANAMERICANO_CAPITAL_Hidrografia_7,
                title: '<img src="styles/legend/PANAMERICANO_CAPITAL_Hidrografia_7.png" /> PANAMERICANO_CAPITAL_Hidrografia'
            });var format_PANAMERICANO_CAPITAL_Formaciones_Geologicas_8 = new ol.format.GeoJSON();
var features_PANAMERICANO_CAPITAL_Formaciones_Geologicas_8 = format_PANAMERICANO_CAPITAL_Formaciones_Geologicas_8.readFeatures(json_PANAMERICANO_CAPITAL_Formaciones_Geologicas_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PANAMERICANO_CAPITAL_Formaciones_Geologicas_8 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_PANAMERICANO_CAPITAL_Formaciones_Geologicas_8.addFeatures(features_PANAMERICANO_CAPITAL_Formaciones_Geologicas_8);var lyr_PANAMERICANO_CAPITAL_Formaciones_Geologicas_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PANAMERICANO_CAPITAL_Formaciones_Geologicas_8, 
                style: style_PANAMERICANO_CAPITAL_Formaciones_Geologicas_8,
    title: 'PANAMERICANO_CAPITAL_Formaciones_Geologicas<br />\
    <img src="styles/legend/PANAMERICANO_CAPITAL_Formaciones_Geologicas_8_0.png" /> Formación Betijoque o Grupo Guayabo<br />\
    <img src="styles/legend/PANAMERICANO_CAPITAL_Formaciones_Geologicas_8_1.png" /> Formación Carbonera<br />\
    <img src="styles/legend/PANAMERICANO_CAPITAL_Formaciones_Geologicas_8_2.png" /> Formación Carvajal<br />\
    <img src="styles/legend/PANAMERICANO_CAPITAL_Formaciones_Geologicas_8_3.png" /> Grupo Guayabo<br />\
    <img src="styles/legend/PANAMERICANO_CAPITAL_Formaciones_Geologicas_8_4.png" /> Llanura Aluvial<br />'
        });var format_PANAMERICANO_CAPITAL_Curvas_de_Nivel_9 = new ol.format.GeoJSON();
var features_PANAMERICANO_CAPITAL_Curvas_de_Nivel_9 = format_PANAMERICANO_CAPITAL_Curvas_de_Nivel_9.readFeatures(json_PANAMERICANO_CAPITAL_Curvas_de_Nivel_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PANAMERICANO_CAPITAL_Curvas_de_Nivel_9 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_PANAMERICANO_CAPITAL_Curvas_de_Nivel_9.addFeatures(features_PANAMERICANO_CAPITAL_Curvas_de_Nivel_9);var lyr_PANAMERICANO_CAPITAL_Curvas_de_Nivel_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PANAMERICANO_CAPITAL_Curvas_de_Nivel_9, 
                style: style_PANAMERICANO_CAPITAL_Curvas_de_Nivel_9,
                title: '<img src="styles/legend/PANAMERICANO_CAPITAL_Curvas_de_Nivel_9.png" /> PANAMERICANO_CAPITAL_Curvas_de_Nivel'
            });var format_PANAMERICANO_CAPITAL_Geologia_Cronoestratigrafia_10 = new ol.format.GeoJSON();
var features_PANAMERICANO_CAPITAL_Geologia_Cronoestratigrafia_10 = format_PANAMERICANO_CAPITAL_Geologia_Cronoestratigrafia_10.readFeatures(json_PANAMERICANO_CAPITAL_Geologia_Cronoestratigrafia_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PANAMERICANO_CAPITAL_Geologia_Cronoestratigrafia_10 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_PANAMERICANO_CAPITAL_Geologia_Cronoestratigrafia_10.addFeatures(features_PANAMERICANO_CAPITAL_Geologia_Cronoestratigrafia_10);var lyr_PANAMERICANO_CAPITAL_Geologia_Cronoestratigrafia_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PANAMERICANO_CAPITAL_Geologia_Cronoestratigrafia_10, 
                style: style_PANAMERICANO_CAPITAL_Geologia_Cronoestratigrafia_10,
    title: 'PANAMERICANO_CAPITAL_Geologia_Cronoestratigrafia<br />\
    <img src="styles/legend/PANAMERICANO_CAPITAL_Geologia_Cronoestratigrafia_10_0.png" /> Cauternario<br />\
    <img src="styles/legend/PANAMERICANO_CAPITAL_Geologia_Cronoestratigrafia_10_1.png" /> Cuaternario<br />\
    <img src="styles/legend/PANAMERICANO_CAPITAL_Geologia_Cronoestratigrafia_10_2.png" /> Neogeno y Cuaternario<br />'
        });var format_PANAMERICANO_CAPITAL_Capacidad_Uso_Del_Suelo_11 = new ol.format.GeoJSON();
var features_PANAMERICANO_CAPITAL_Capacidad_Uso_Del_Suelo_11 = format_PANAMERICANO_CAPITAL_Capacidad_Uso_Del_Suelo_11.readFeatures(json_PANAMERICANO_CAPITAL_Capacidad_Uso_Del_Suelo_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PANAMERICANO_CAPITAL_Capacidad_Uso_Del_Suelo_11 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_PANAMERICANO_CAPITAL_Capacidad_Uso_Del_Suelo_11.addFeatures(features_PANAMERICANO_CAPITAL_Capacidad_Uso_Del_Suelo_11);var lyr_PANAMERICANO_CAPITAL_Capacidad_Uso_Del_Suelo_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PANAMERICANO_CAPITAL_Capacidad_Uso_Del_Suelo_11, 
                style: style_PANAMERICANO_CAPITAL_Capacidad_Uso_Del_Suelo_11,
    title: 'PANAMERICANO_CAPITAL_Capacidad_Uso_Del_Suelo<br />\
    <img src="styles/legend/PANAMERICANO_CAPITAL_Capacidad_Uso_Del_Suelo_11_0.png" /> Clase III<br />\
    <img src="styles/legend/PANAMERICANO_CAPITAL_Capacidad_Uso_Del_Suelo_11_1.png" /> Clase IV<br />\
    <img src="styles/legend/PANAMERICANO_CAPITAL_Capacidad_Uso_Del_Suelo_11_2.png" /> Clase V<br />\
    <img src="styles/legend/PANAMERICANO_CAPITAL_Capacidad_Uso_Del_Suelo_11_3.png" /> Clase VI<br />\
    <img src="styles/legend/PANAMERICANO_CAPITAL_Capacidad_Uso_Del_Suelo_11_4.png" /> Clase VIII<br />'
        });var format_PANAMERICANO_CAPITAL_Centros_Poblados_Capitales_12 = new ol.format.GeoJSON();
var features_PANAMERICANO_CAPITAL_Centros_Poblados_Capitales_12 = format_PANAMERICANO_CAPITAL_Centros_Poblados_Capitales_12.readFeatures(json_PANAMERICANO_CAPITAL_Centros_Poblados_Capitales_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PANAMERICANO_CAPITAL_Centros_Poblados_Capitales_12 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_PANAMERICANO_CAPITAL_Centros_Poblados_Capitales_12.addFeatures(features_PANAMERICANO_CAPITAL_Centros_Poblados_Capitales_12);var lyr_PANAMERICANO_CAPITAL_Centros_Poblados_Capitales_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PANAMERICANO_CAPITAL_Centros_Poblados_Capitales_12, 
                style: style_PANAMERICANO_CAPITAL_Centros_Poblados_Capitales_12,
                title: '<img src="styles/legend/PANAMERICANO_CAPITAL_Centros_Poblados_Capitales_12.png" /> PANAMERICANO_CAPITAL_Centros_Poblados_Capitales'
            });var format_PANAMERICANO_CAPITAL_Centros_Poblados_13 = new ol.format.GeoJSON();
var features_PANAMERICANO_CAPITAL_Centros_Poblados_13 = format_PANAMERICANO_CAPITAL_Centros_Poblados_13.readFeatures(json_PANAMERICANO_CAPITAL_Centros_Poblados_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PANAMERICANO_CAPITAL_Centros_Poblados_13 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_PANAMERICANO_CAPITAL_Centros_Poblados_13.addFeatures(features_PANAMERICANO_CAPITAL_Centros_Poblados_13);var lyr_PANAMERICANO_CAPITAL_Centros_Poblados_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PANAMERICANO_CAPITAL_Centros_Poblados_13, 
                style: style_PANAMERICANO_CAPITAL_Centros_Poblados_13,
                title: '<img src="styles/legend/PANAMERICANO_CAPITAL_Centros_Poblados_13.png" /> PANAMERICANO_CAPITAL_Centros_Poblados'
            });

lyr_GOOGLESATLITE_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_PANAMERICANO_CAPITAL_Vialidad_2.setVisible(true);lyr_PANAMERICANO_CAPITAL_Unidades_de_Paisaje_3.setVisible(true);lyr_PANAMERICANO_CAPITAL_Temperatura_4.setVisible(true);lyr_PANAMERICANO_CAPITAL_Precipitacion_5.setVisible(true);lyr_PANAMERICANO_CAPITAL_Isoyetas_6.setVisible(true);lyr_PANAMERICANO_CAPITAL_Hidrografia_7.setVisible(true);lyr_PANAMERICANO_CAPITAL_Formaciones_Geologicas_8.setVisible(true);lyr_PANAMERICANO_CAPITAL_Curvas_de_Nivel_9.setVisible(true);lyr_PANAMERICANO_CAPITAL_Geologia_Cronoestratigrafia_10.setVisible(true);lyr_PANAMERICANO_CAPITAL_Capacidad_Uso_Del_Suelo_11.setVisible(true);lyr_PANAMERICANO_CAPITAL_Centros_Poblados_Capitales_12.setVisible(true);lyr_PANAMERICANO_CAPITAL_Centros_Poblados_13.setVisible(true);
var layersList = [lyr_GOOGLESATLITE_0,lyr_OpenStreetMap_1,lyr_PANAMERICANO_CAPITAL_Vialidad_2,lyr_PANAMERICANO_CAPITAL_Unidades_de_Paisaje_3,lyr_PANAMERICANO_CAPITAL_Temperatura_4,lyr_PANAMERICANO_CAPITAL_Precipitacion_5,lyr_PANAMERICANO_CAPITAL_Isoyetas_6,lyr_PANAMERICANO_CAPITAL_Hidrografia_7,lyr_PANAMERICANO_CAPITAL_Formaciones_Geologicas_8,lyr_PANAMERICANO_CAPITAL_Curvas_de_Nivel_9,lyr_PANAMERICANO_CAPITAL_Geologia_Cronoestratigrafia_10,lyr_PANAMERICANO_CAPITAL_Capacidad_Uso_Del_Suelo_11,lyr_PANAMERICANO_CAPITAL_Centros_Poblados_Capitales_12,lyr_PANAMERICANO_CAPITAL_Centros_Poblados_13];
lyr_PANAMERICANO_CAPITAL_Vialidad_2.set('fieldAliases', {'pk': 'pk', 'id': 'id', 'estado': 'estado', 'nombre': 'nombre', 'tipo': 'tipo', 'fuente': 'fuente', });
lyr_PANAMERICANO_CAPITAL_Unidades_de_Paisaje_3.set('fieldAliases', {'pk': 'pk', 'rowid': 'rowid', 'id': 'id', 'estado': 'estado', 'unidad': 'unidad', 'fuente': 'fuente', });
lyr_PANAMERICANO_CAPITAL_Temperatura_4.set('fieldAliases', {'pk': 'pk', 'id': 'id', 'estado': 'estado', 'temperatur': 'temperatur', 'fuente': 'fuente', });
lyr_PANAMERICANO_CAPITAL_Precipitacion_5.set('fieldAliases', {'pk': 'pk', 'id': 'id', 'estado': 'estado', 'valor_men': 'valor_men', 'valor_may': 'valor_may', 'rango': 'rango', 'valor': 'valor', 'fuente': 'fuente', });
lyr_PANAMERICANO_CAPITAL_Isoyetas_6.set('fieldAliases', {'pk': 'pk', 'id': 'id', 'estado': 'estado', 'precipitac': 'precipitac', 'fuente': 'fuente', });
lyr_PANAMERICANO_CAPITAL_Hidrografia_7.set('fieldAliases', {'pk': 'pk', 'id': 'id', 'estado': 'estado', 'nombre': 'nombre', 'fuente': 'fuente', 'id_2': 'id_2', 'estado_2': 'estado_2', 'nombre_2': 'nombre_2', 'fuente_2': 'fuente_2', });
lyr_PANAMERICANO_CAPITAL_Formaciones_Geologicas_8.set('fieldAliases', {'pk': 'pk', 'id': 'id', 'estado': 'estado', 'unidad': 'unidad', 'nombre': 'nombre', 'fuente': 'fuente', });
lyr_PANAMERICANO_CAPITAL_Curvas_de_Nivel_9.set('fieldAliases', {'pk': 'pk', 'id': 'id', 'estado': 'estado', 'altitud_ms': 'altitud_ms', 'fuente': 'fuente', });
lyr_PANAMERICANO_CAPITAL_Geologia_Cronoestratigrafia_10.set('fieldAliases', {'pk': 'pk', 'id': 'id', 'estado': 'estado', 'número': 'número', 'era': 'era', 'período': 'período', 'época': 'época', 'roca': 'roca', 'fuente': 'fuente', });
lyr_PANAMERICANO_CAPITAL_Capacidad_Uso_Del_Suelo_11.set('fieldAliases', {'pk': 'pk', 'id': 'id', 'estado': 'estado', 'clase_suel': 'clase_suel', 'fuente': 'fuente', });
lyr_PANAMERICANO_CAPITAL_Centros_Poblados_Capitales_12.set('fieldAliases', {'pk': 'pk', 'id': 'id', 'código': 'código', 'código_est': 'código_est', 'estado': 'estado', 'capital_es': 'capital_es', 'código_mun': 'código_mun', 'municipio': 'municipio', 'capital_mu': 'capital_mu', 'código_par': 'código_par', 'parroquia': 'parroquia', 'capital_pa': 'capital_pa', 'nombre': 'nombre', 'descripció': 'descripció', 'fuente': 'fuente', });
lyr_PANAMERICANO_CAPITAL_Centros_Poblados_13.set('fieldAliases', {'pk': 'pk', 'id': 'id', 'código': 'código', 'código_est': 'código_est', 'estado': 'estado', 'capital_es': 'capital_es', 'código_mun': 'código_mun', 'municipio': 'municipio', 'capital_mu': 'capital_mu', 'código_par': 'código_par', 'parroquia': 'parroquia', 'capital_pa': 'capital_pa', 'nombre': 'nombre', 'descripció': 'descripció', 'fuente': 'fuente', });
lyr_PANAMERICANO_CAPITAL_Vialidad_2.set('fieldImages', {'pk': 'TextEdit', 'id': 'TextEdit', 'estado': 'TextEdit', 'nombre': 'TextEdit', 'tipo': 'TextEdit', 'fuente': 'TextEdit', });
lyr_PANAMERICANO_CAPITAL_Unidades_de_Paisaje_3.set('fieldImages', {'pk': 'TextEdit', 'rowid': 'TextEdit', 'id': 'TextEdit', 'estado': 'TextEdit', 'unidad': 'TextEdit', 'fuente': 'TextEdit', });
lyr_PANAMERICANO_CAPITAL_Temperatura_4.set('fieldImages', {'pk': 'TextEdit', 'id': 'TextEdit', 'estado': 'TextEdit', 'temperatur': 'TextEdit', 'fuente': 'TextEdit', });
lyr_PANAMERICANO_CAPITAL_Precipitacion_5.set('fieldImages', {'pk': 'TextEdit', 'id': 'TextEdit', 'estado': 'TextEdit', 'valor_men': 'TextEdit', 'valor_may': 'TextEdit', 'rango': 'TextEdit', 'valor': 'TextEdit', 'fuente': 'TextEdit', });
lyr_PANAMERICANO_CAPITAL_Isoyetas_6.set('fieldImages', {'pk': 'TextEdit', 'id': 'TextEdit', 'estado': 'TextEdit', 'precipitac': 'TextEdit', 'fuente': 'TextEdit', });
lyr_PANAMERICANO_CAPITAL_Hidrografia_7.set('fieldImages', {'pk': 'TextEdit', 'id': 'TextEdit', 'estado': 'TextEdit', 'nombre': 'TextEdit', 'fuente': 'TextEdit', 'id_2': 'TextEdit', 'estado_2': 'TextEdit', 'nombre_2': 'TextEdit', 'fuente_2': 'TextEdit', });
lyr_PANAMERICANO_CAPITAL_Formaciones_Geologicas_8.set('fieldImages', {'pk': 'TextEdit', 'id': 'TextEdit', 'estado': 'TextEdit', 'unidad': 'TextEdit', 'nombre': 'TextEdit', 'fuente': 'TextEdit', });
lyr_PANAMERICANO_CAPITAL_Curvas_de_Nivel_9.set('fieldImages', {'pk': 'TextEdit', 'id': 'TextEdit', 'estado': 'TextEdit', 'altitud_ms': 'TextEdit', 'fuente': 'TextEdit', });
lyr_PANAMERICANO_CAPITAL_Geologia_Cronoestratigrafia_10.set('fieldImages', {'pk': 'TextEdit', 'id': 'TextEdit', 'estado': 'TextEdit', 'número': 'TextEdit', 'era': 'TextEdit', 'período': 'TextEdit', 'época': 'TextEdit', 'roca': 'TextEdit', 'fuente': 'TextEdit', });
lyr_PANAMERICANO_CAPITAL_Capacidad_Uso_Del_Suelo_11.set('fieldImages', {'pk': 'TextEdit', 'id': 'TextEdit', 'estado': 'TextEdit', 'clase_suel': 'TextEdit', 'fuente': 'TextEdit', });
lyr_PANAMERICANO_CAPITAL_Centros_Poblados_Capitales_12.set('fieldImages', {'pk': 'TextEdit', 'id': 'TextEdit', 'código': 'TextEdit', 'código_est': 'TextEdit', 'estado': 'TextEdit', 'capital_es': 'TextEdit', 'código_mun': 'TextEdit', 'municipio': 'TextEdit', 'capital_mu': 'TextEdit', 'código_par': 'TextEdit', 'parroquia': 'TextEdit', 'capital_pa': 'TextEdit', 'nombre': 'TextEdit', 'descripció': 'TextEdit', 'fuente': 'TextEdit', });
lyr_PANAMERICANO_CAPITAL_Centros_Poblados_13.set('fieldImages', {'pk': 'TextEdit', 'id': 'TextEdit', 'código': 'TextEdit', 'código_est': 'TextEdit', 'estado': 'TextEdit', 'capital_es': 'TextEdit', 'código_mun': 'TextEdit', 'municipio': 'TextEdit', 'capital_mu': 'TextEdit', 'código_par': 'TextEdit', 'parroquia': 'TextEdit', 'capital_pa': 'TextEdit', 'nombre': 'TextEdit', 'descripció': 'TextEdit', 'fuente': 'TextEdit', });
lyr_PANAMERICANO_CAPITAL_Vialidad_2.set('fieldLabels', {'pk': 'no label', 'id': 'no label', 'estado': 'no label', 'nombre': 'no label', 'tipo': 'no label', 'fuente': 'no label', });
lyr_PANAMERICANO_CAPITAL_Unidades_de_Paisaje_3.set('fieldLabels', {'pk': 'no label', 'rowid': 'no label', 'id': 'no label', 'estado': 'no label', 'unidad': 'no label', 'fuente': 'no label', });
lyr_PANAMERICANO_CAPITAL_Temperatura_4.set('fieldLabels', {'pk': 'no label', 'id': 'no label', 'estado': 'no label', 'temperatur': 'no label', 'fuente': 'no label', });
lyr_PANAMERICANO_CAPITAL_Precipitacion_5.set('fieldLabels', {'pk': 'no label', 'id': 'no label', 'estado': 'no label', 'valor_men': 'no label', 'valor_may': 'no label', 'rango': 'no label', 'valor': 'no label', 'fuente': 'no label', });
lyr_PANAMERICANO_CAPITAL_Isoyetas_6.set('fieldLabels', {'pk': 'no label', 'id': 'no label', 'estado': 'no label', 'precipitac': 'no label', 'fuente': 'no label', });
lyr_PANAMERICANO_CAPITAL_Hidrografia_7.set('fieldLabels', {'pk': 'no label', 'id': 'no label', 'estado': 'no label', 'nombre': 'no label', 'fuente': 'no label', 'id_2': 'no label', 'estado_2': 'no label', 'nombre_2': 'no label', 'fuente_2': 'no label', });
lyr_PANAMERICANO_CAPITAL_Formaciones_Geologicas_8.set('fieldLabels', {'pk': 'no label', 'id': 'no label', 'estado': 'no label', 'unidad': 'no label', 'nombre': 'no label', 'fuente': 'no label', });
lyr_PANAMERICANO_CAPITAL_Curvas_de_Nivel_9.set('fieldLabels', {'pk': 'no label', 'id': 'no label', 'estado': 'no label', 'altitud_ms': 'no label', 'fuente': 'no label', });
lyr_PANAMERICANO_CAPITAL_Geologia_Cronoestratigrafia_10.set('fieldLabels', {'pk': 'no label', 'id': 'no label', 'estado': 'no label', 'número': 'no label', 'era': 'no label', 'período': 'no label', 'época': 'no label', 'roca': 'no label', 'fuente': 'no label', });
lyr_PANAMERICANO_CAPITAL_Capacidad_Uso_Del_Suelo_11.set('fieldLabels', {'pk': 'no label', 'id': 'no label', 'estado': 'no label', 'clase_suel': 'no label', 'fuente': 'no label', });
lyr_PANAMERICANO_CAPITAL_Centros_Poblados_Capitales_12.set('fieldLabels', {'pk': 'no label', 'id': 'no label', 'código': 'no label', 'código_est': 'no label', 'estado': 'no label', 'capital_es': 'no label', 'código_mun': 'no label', 'municipio': 'no label', 'capital_mu': 'no label', 'código_par': 'no label', 'parroquia': 'no label', 'capital_pa': 'no label', 'nombre': 'no label', 'descripció': 'no label', 'fuente': 'no label', });
lyr_PANAMERICANO_CAPITAL_Centros_Poblados_13.set('fieldLabels', {'pk': 'no label', 'id': 'no label', 'código': 'no label', 'código_est': 'no label', 'estado': 'no label', 'capital_es': 'no label', 'código_mun': 'no label', 'municipio': 'no label', 'capital_mu': 'no label', 'código_par': 'no label', 'parroquia': 'no label', 'capital_pa': 'no label', 'nombre': 'no label', 'descripció': 'no label', 'fuente': 'no label', });
lyr_PANAMERICANO_CAPITAL_Centros_Poblados_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});