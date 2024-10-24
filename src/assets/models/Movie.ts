interface Movie {
  id: number | null
}

class Movie {
  constructor(data: Movie) {
    this.id = data.id || null
  }
}

export default Movie
