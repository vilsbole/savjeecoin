import SHA256 from 'crypto-js/sha256'

class Block{
  constructor(timestamp, data, previousHash = '') {
    this.previousHash = previousHash
    this.timestamp = timestamp
    this.data = data

    this.hash = this.calculateHash()
  }

  calculateHash () {
    const input = this.previousHash + this.timestamp + JSON.stringify(this.data)
    return SHA256(input).toString()
  }

  getLatestBlock () {
    return this.chain[this.chain.length - 1]
  }
}

export default Block
