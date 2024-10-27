import type { IMovie } from '../common/interfaces'

class Movie implements IMovie {
  constructor(data?: IMovie | undefined) {
    this.name = data?.name || ''
    this.genre = data?.genre || ''
    this.description = data?.description || ''
    this.imgSource = data?.imgSource || ''
    this.wiki = data?.wiki || ''
    this.level = data?.level || null
  }
  name: string
  genre: string
  description: string
  imgSource: string
  wiki: string
  level: number | null
}

export default Movie
