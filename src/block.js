import SHA256 from 'crypto-js/sha256'

class Block{
  constructor(timestamp, data, previousHash = '') {
    this.previousHash = previousHash
    this.timestamp = timestamp
    this.data = data
    this.nounce = 0
    this.hash = this.calculateHash()
  }

  mineBlock (difficulty) {
    while (this.hash.substring(0, difficulty) !== Array(difficulty + 1).join('0')) {
      this.nounce++;
      this.hash = this.calculateHash()
    }
    console.log('Block Mined', this.hash)
  }

  calculateHash () {
    const input = this.previousHash
      + this.timestamp
      + JSON.stringify(this.data)
      + this.nounce
    return SHA256(input).toString()
  }

  getLatestBlock () {
    return this.chain[this.chain.length - 1]
  }
}

export default Block
