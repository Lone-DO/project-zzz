import { defineStore } from 'pinia'
import Movie from '@/assets/models/Movie'
import data from '@/assets/data/index'
import type { IMovie } from '@/assets/common/interfaces'

export const useMovieStore = defineStore('movie', {
  state: () => ({
    movies: [] as IMovie[]
  }),
  actions: {
    set(movies: IMovie[]) {
      this.movies = movies
      this.pack()
    },
    async update(movie: Movie, movieId: string) {
      if (!movie) return this.movies
      const index = !movieId ? -1 : this.movies.findIndex(({ name }) => name === movieId)
      index >= 0 ? this.movies.splice(index, 1, movie) : this.movies.push(movie)
      this.pack()
    },
    async remove(movie: Movie | string) {
      const name = typeof movie === 'string' ? movie : movie.name
      if (movie) {
        this.movies = this.movies.filter((item) => item.name !== name)
        this.pack()
      }
      return this.movies
    },
    async pack() {
      localStorage.setItem('movies', JSON.stringify(this.movies))
    },
    async unpack() {
      const localData = JSON.parse(localStorage.getItem('movies') || '[]') as unknown as IMovie[]
      this.movies = localData?.length ? localData : data.movies
    }
  },
  getters: {
    getMovieById: (state) => (movieId: string, override?: boolean) => {
      const { movies } = state
      const movie = movies.find(({ name }) => name === movieId)
      return movie || override ? new Movie(movie) : null
    }
  }
})
