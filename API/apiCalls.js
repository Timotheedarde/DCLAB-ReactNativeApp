// export function getFilmsFromApiWithSearchedText(text, page) {
//     const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text + "&page=" + page
//     return fetch(url)
//         .then((response) => response.json())
//         .catch((error) => console.error(error))
// }

export function getPostslistFromApi() {
    const url = 'http://192.168.1.12/WPDCLAB/wp-json/wp/v2/posts'
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.error(error))
}


//TODO: Récuperer en parametre l' id du post et concatener avec adresse de l'api des posts/ idDuPost
export function getPostFromApiWithIdItem() {
    apiItem = Math.floor(Math.random() * 100);
    return (
        apiItem
    )
}