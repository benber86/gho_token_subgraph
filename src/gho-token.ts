import {
  Transfer as TransferEvent
} from "../generated/GhoToken/GhoToken"
import {
  Indexer,
  Transfer
} from "../generated/schema"

export function getIndexer(): Indexer {
  let indexer = Indexer.load("indexer")
  if (!indexer) {
    indexer = new Indexer("indexer")
    indexer.currentIndex = 0
    indexer.save()
  }
  return indexer
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  const indexer = getIndexer()
  entity.transferIndex = indexer.currentIndex
  indexer.currentIndex += 1
  indexer.save()
  entity.from = event.params.from
  entity.to = event.params.to
  entity.value = event.params.value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
