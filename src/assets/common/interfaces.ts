interface IStory {
  acts: Array<string>
  chapter: string
  imgSource: string
  name: string
  wiki: string
}
interface IMovie {
  name: string
  genre: string
  description: string
  imgSource: string
  wiki: string
  level: number | null
}

export type { IStory, IMovie }
