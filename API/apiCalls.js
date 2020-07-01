// export function getFilmsFromApiWithSearchedText(text, page) {
//     const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text + "&page=" + page
//     return fetch(url)
//         .then((response) => response.json())
//         .catch((error) => console.error(error))
// }


//§§§§§§ ATTENTION ADRESSE IP CHANGE EN FONCTION DU RESEAU maison : 192.168.1.12 §§§§§§//


// POST //

export function getPostslistFromApi() {
    const url = 'http://192.168.1.12/WPDCLAB/wp-json/wp/v2/posts'
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.error(error))
}

export function getPostFromApiWithIdItem(idPost) {
    const url = 'http://192.168.1.12/WPDCLAB/wp-json/wp/v2/posts/' + idPost 
    return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}

export function getPostImageFromApiWithIdItem(idPost) {
    const url = 'http://192.168.1.12/WPDCLAB/wp-json/wp/v2/posts/' + idPost 
    return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}

// EVENT //

export function getEventslistFromApi() {
    const url = 'http://192.168.1.12/WPDCLAB/wp-json/wp/v2/posts'
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.error(error))
}

export function getEventFromApiWithIdItem(idEvent) {
    const url = 'http://192.168.1.12/WPDCLAB/wp-json/wp/v2/posts/' + idEvent 
    return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}



// FORUM //

export function getForumslistFromApi() {
    const url = 'http://192.168.1.12/WPDCLAB/wp-json/wp/v2/posts'
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.error(error))
}

export function getForumFromApiWithIdItem(idForum) {
    const url = 'http://192.168.1.12/WPDCLAB/wp-json/wp/v2/posts/' + idForum 
    return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}

