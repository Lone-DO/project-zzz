type CharacterData = {
  id: number | null
}

class Character {
  id: number | null
  constructor(data: CharacterData) {
    this.id = data.id || null
  }
}

export default Character
