ymaps.ready(init);

 function init(){ 
        // Создание карты.    
        var myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчнию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [55.807435, 37.702706],//55.807435, 37.702706
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 13
        });

        var myPlacemark = new ymaps.Placemark([55.807435, 37.702706], {}, {
            
            iconLayout: 'default#imageWithContent',
            iconImageHref: 'assets/img/map-marker.png',
            iconImageSize: [64, 64],
            iconImageOffset: [-23, -60]
            
});
            
            myMap.geoObjects.add(myPlacemark);
    }