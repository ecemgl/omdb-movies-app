import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { TMovies, TGetMoviesParameters } from '../types'

const apiKey = process.env.REACT_APP_API_KEY
export const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  endpoints: (builder) => ({
    getMovies: builder.query<TMovies, TGetMoviesParameters>({
      query: ({ page, title, year, types }) =>
        `/?apikey=${apiKey}&page=${page}&s=${title.toString()}${year ? `&y=${year.toString()}` : ''}${
          types ? `&type=${types.toString()}` : ''
        }`,
    }),
    getMovieDetail: builder.query({
      query: (imdbId) => `/?apikey=${apiKey}&i=${imdbId}`,
    }),
  }),
})

export const { useGetMovieDetailQuery, useGetMoviesQuery } = movieApi
