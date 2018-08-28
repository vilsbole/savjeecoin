import Block from './block'
import Blockchain from './blockchain'

const savjeeCoin = new Blockchain()

savjeeCoin.addBlock(new Block("20/07/2017", { amount: 4 }))
savjeeCoin.addBlock(new Block("22/07/2017", { amount: 10 }))

console.log('isValid? ' + savjeeCoin.isChainValid())
