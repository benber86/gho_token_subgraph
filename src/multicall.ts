import { Address, BigInt, Bytes, ethereum } from '@graphprotocol/graph-ts'
import { Multicall } from '../generated/GhoToken/Multicall'

const MULTICALL = '0xeefba1e63905ef1d7acba5a8513c70307c1ce441'
const multicall = Multicall.bind(Address.fromString(MULTICALL))

// Aggregate calls to single contract
export function aggregateCalls(target: Address, inputValueTypes: string[][]): (ethereum.Value | null)[] | null {
    const params: Array<ethereum.Tuple> = []
    for (let i = 0; i < inputValueTypes.length; i++) {
        params.push(
            changetype<ethereum.Tuple>([
                ethereum.Value.fromAddress(target),
                ethereum.Value.fromBytes(Bytes.fromHexString(inputValueTypes[i][0])),
            ])
        )
    }
    const callResult = multicall.tryCall('aggregate', 'aggregate((address,bytes)[]):(uint256,bytes[])', [
        ethereum.Value.fromTupleArray(params),
    ])
    if (callResult.reverted) {
        return null
    }
    const multiResults = callResult.value[1].toBytesArray()
    const intResults: Array<ethereum.Value | null> = []
    for (let i = 0; i < multiResults.length; i++) {
        const res = ethereum.decode(inputValueTypes[i][1], multiResults[i])
        intResults.push(res)
    }
    return intResults
}
