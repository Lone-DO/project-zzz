type BangbooData = {
  id: number | null
}

class Bangboo {
  id: number | null
  constructor(data: BangbooData) {
    this.id = data.id || null
  }
}

export default Bangboo
