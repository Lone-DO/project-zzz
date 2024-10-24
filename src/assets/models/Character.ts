interface Character {
  id: number | null
}

class Character {
  constructor(data: Character) {
    this.id = data.id || null
  }
}

export default Character
