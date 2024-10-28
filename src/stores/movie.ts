import { defineStore } from 'pinia'
import type Movie from '@/assets/models/Movie'
import data from '@/assets/data/index'

export const useMovieStore = defineStore('movie', {
  state: () => ({
    movies: [] as Movie[]
  }),
  actions: {
    set(movies: Movie[]) {
      this.movies = movies
    },
    async update(movie: Movie, movieId: string) {
      if (!movie) return this.movies
      const index = !movieId ? -1 : this.movies.findIndex(({ name }) => name === movieId)
      return index >= 0 ? this.movies.splice(index, 1, movie) : this.movies.push(movie)
    },
    async remove(movie: Movie) {
      if (movie) this.movies = this.movies.filter((item) => item.name !== movie.name)
      return this.movies
    },
    async store() {
      localStorage.setItem('movies', JSON.stringify(this.movies))
    },
    async restore() {
      const localData = localStorage.getItem('movies') as unknown as Movie[]
      this.movies = localData || data.movies
    }
  }
})
