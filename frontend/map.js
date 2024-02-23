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
    if (elementInViewport(document.getElementById('map')) && !mapInit) {
        mapInit = true
        let script = document.createElement("script")
        script.src = "https://api-maps.yandex.ru/2.1/?load=package.standard&apikey=f44f9a2d-2cef-4d09-a399-6ea9b5cedf55&lang=ru-RU"
        document.getElementsByTagName('body')[0].appendChild(script)
        // let pin = document.getElementById('map').getAttribute('data-pin')
        script.onload = function () {
            let coords = [55.809171, 37.611976]
            ymaps.ready(function () {
                let map = new ymaps.Map('map', {
                    center: coords,
                    zoom: 14,
                    controls: ['zoomControl']
                }, {})
                map.behaviors.disable('scrollZoom')

                // let placemark = new ymaps.Placemark([55.721194, 37.755401], {
                //     balloonContentHeader: 'Риал Лидер',
                //     balloonContentBody: 'Москва, ул.Стахановская, 19'
                // }, {
                //     iconLayout: 'default#image',
                //     iconImageHref: pin,
                //     iconImageSize: [46, 57],
                //     iconImageOffset: [-23, -57],
                // })
                // map.geoObjects.add(placemark)
            })
        }
    }
}

if (document.getElementById('map')) {
    initMap()

    window.addEventListener('scroll', () => {
        initMap()
    })
}