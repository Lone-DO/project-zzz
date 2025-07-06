interface iCharacter {
  id: number | null
}

class Character {
  id: number | null
  constructor(data: iCharacter) {
    this.id = data.id || null
  }
}

export default Character
