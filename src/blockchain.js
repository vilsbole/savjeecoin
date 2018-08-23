import Block from './block'

class Blockchain {
  constructor() {
    this.chain = [this.createGenesisBlock()]
  }

  createGenesisBlock () {
    return new Block('01/01/2017', 'Genesis block', '0')
  }

  getLatestBlock () {
    return this.chain[this.chain.length - 1]
  }

  addBlock (newBlock) {
    newBlock.previousHash = this.getLatestBlock().hash
    newBlock.hash = newBlock.calculateHash()
    this.chain.push(newBlock)
  }

  isChainValid(){
    for (let i = 1; i < this.chain.length; i++) {
      const currentBlock = this.chain[i];
      const previousBlock = this.chain[i - 1];

      // Recalculate the hash of the block and see if it matches up.
      // This allows us to detect changes to a single block
      if (currentBlock.hash !== currentBlock.calculateHash()) {
        return false;
      }

      // Check if this block actually points to the previous block (hash)
      if (currentBlock.previousHash !== previousBlock.hash) {
      	return false;
      }
    }

      // Check the genesis block
      if(this.chain[0] !== this.createGenesisBlock()){
      	return false;
      }

      // If we managed to get here, the chain is valid!
      return true;
  }

}

export default Blockchain
