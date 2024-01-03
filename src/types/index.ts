export type TMovieTypes = 'movie' | 'series' | 'episode'

export type TMovie = {
  Title: string
  Year: string
  imdbID: string
  Type: TMovieTypes
  Poster: string
}

export type TMovies = {
  Search: TMovie[]
  totalResults: string
  Response: string
}

export type DetailType = {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}
export type TGetMoviesParameters = {
  page: number
  title: string
  year: string | null
  types: TMovieTypes | null
}
