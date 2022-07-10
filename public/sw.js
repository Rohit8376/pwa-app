let checheData = "appV1"
this.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(checheData).then((cache) => {
            cache.addAll([
                "/static/js/bundle.js",
                "/index.html",
                "/favicon.ico",
                "/",
                "/users"
            ])
        })
    )
})

 

this.addEventListener('fetch', (event) => {

    // fetch from service working only if internet is not availble
    if (!navigator.onLine) {
        event.respondWith(
            caches.match(event.request).then(rs => {
                if (rs) {
                    return rs;
                } 
                let requestUrl = event.request.clone();
                return fetch(requestUrl)
            })
        )
    }
})



// api => https://jsonplaceholder.typicode.com/users


