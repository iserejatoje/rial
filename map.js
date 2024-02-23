let mapInit = false

function elementInViewport(el) {
    let top = el.offsetTop
    let left = el.offsetLeft
    let width = el.offsetWidth
    let height = el.offsetHeight
    while (el.offsetParent) {
        el = el.offsetParent
        top += el.offsetTop
        left += el.offsetLeft
    }
    return (
        top < (window.scrollY + window.innerHeight) &&
        left < (window.scrollX + window.innerWidth) &&
        (top + height) > window.scrollY &&
        (left + width) > window.scrollX
    )
}

function initMap() {
    if (window.yandexMapDidInit) {
        return false
    }
    window.yandexMapDidInit = true
    if (elementInViewport(document.getElementById('map')) && !mapInit) {
        mapInit = true
        let script = document.createElement("script")
        script.src = "https://api-maps.yandex.ru/2.1/?load=package.standard&apikey=f44f9a2d-2cef-4d09-a399-6ea9b5cedf55&lang=ru-RU"
        document.getElementsByTagName('body')[0].appendChild(script)
        let pin = document.getElementById('map').getAttribute('data-pin')
        script.onload = function () {
            ymaps.ready(function () {
                let map = new ymaps.Map('map', {
                    center: [55.721194, 37.755401],
                    zoom: 14,
                    controls: ['zoomControl']
                }, {})
                let mapCenter = map.getGlobalPixelCenter([55.721194, 37.755401])
                map.behaviors.disable('scrollZoom')
                let geoCenter = map.options.get('projection').fromGlobalPixels(mapCenter, map.getZoom())

                geoCenter = [
                    geoCenter[0],
                    geoCenter[1] - 0.0130
                ]

                map.setCenter(geoCenter)
                let placemark = new ymaps.Placemark([55.721194, 37.755401], {
                    balloonContentHeader: 'Риал Лидер',
                    balloonContentBody: 'Москва, ул.Стахановская, 19'
                }, {
                    iconLayout: 'default#image',
                    iconImageHref: pin,
                    iconImageSize: [41, 54],
                    iconImageOffset: [-20, -54],
                })
                map.geoObjects.add(placemark)
            })
        }
    }
}

if (document.getElementById('map')) {
    setTimeout(initMap, 1500)

    document.addEventListener('scroll', initYandexMapOnEvent)
    document.addEventListener('mousemove', initYandexMapOnEvent)
    document.addEventListener('touchstart', initYandexMapOnEvent)

    function initYandexMapOnEvent (e) {
        initMap()
        e.currentTarget.removeEventListener(e.type, initYandexMapOnEvent)
    }
}