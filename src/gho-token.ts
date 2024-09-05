import {
  Transfer as TransferEvent
} from "../generated/GhoToken/GhoToken"
import {
  Indexer,
  Transfer
} from "../generated/schema"
import {aggregateCalls} from "./multicall";
import {Address, BigInt, log} from "@graphprotocol/graph-ts";

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

  const dataProviderCalls: string[][] = []
  const dataProviderAddress = Address.fromString("0x7B4EB56E7CD4b454BA8ff71E4518426369a138a3")
  const ghoTokenAddressPadded = "0x40D16FC0246aD3160Ccc09B8D0D3A2cD28aE6C2f".slice(2).padStart(64, '0')
  dataProviderCalls.push(
      ['0x35ea6a75' + ghoTokenAddressPadded, '(uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint40)'], // getReserveData(address)
  )
  dataProviderCalls.push(
      ['0x46fbe558' + ghoTokenAddressPadded, 'uint256[2]'], // getReserveCaps(address)
  )
  const results = aggregateCalls(dataProviderAddress, dataProviderCalls)
  if (!results) {
    log.error("Multicall failed.", [])
    return
  }



  const dataResults = results[0]
  const capsResults = results[1]



  log.error("RESULTS 1 {}", [capsResults ? capsResults.toBigIntArray().toString() : "null"])


  const reserveData = dataResults ? dataResults.toTuple() : null
  const reserveCaps = capsResults ? capsResults.toBigIntArray() : null

  entity.totalVariableDebt = reserveData ? reserveData[4].toBigInt() : BigInt.zero()
  entity.variableBorrowRate = reserveData ? reserveData[6].toBigInt() : BigInt.zero()

  entity.borrowCap = reserveCaps ? reserveCaps[0] : BigInt.zero()
  entity.supplyCap = reserveCaps ? reserveCaps[1] : BigInt.zero()

  entity.save()
}
