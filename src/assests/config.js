export const api = '32759bce31f633dff774464d90335731'

const baseURl = `https://api.themoviedb.org/3`

export const mountURL = `${baseURl}/trending/movie/day?api_key=${api}`
export const mountShowsURL = `${baseURl}/trending/tv/day?api_key=${api}`

export const changeURL = `${baseURl}/search/movie?query=`
export const showURL = `${baseURl}/search/tv?query=`

export const fallBackURL = `${baseURl}/trending/tv/week?api_key=${api}`
export const genreURL = `${baseURl}/genre/movie/list?language=en-US&api_key=${api}`
export const genreShowsURL = `${baseURl}/genre/tv/list?language=en-US&api_key=${api}`
