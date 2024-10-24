interface Bangboo {
  id: number | null
}

class Bangboo {
  constructor(data: Bangboo) {
    this.id = data.id || null
  }
}

export default Bangboo
