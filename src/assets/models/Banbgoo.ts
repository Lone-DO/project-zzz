interface iBangboo {
  id: number | null
}

class Bangboo {
  id: number | null
  constructor(data: iBangboo) {
    this.id = data.id || null
  }
}

export default Bangboo
