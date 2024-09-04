import {
  Approval as ApprovalEvent,
  FacilitatorAdded as FacilitatorAddedEvent,
  FacilitatorBucketCapacityUpdated as FacilitatorBucketCapacityUpdatedEvent,
  FacilitatorBucketLevelUpdated as FacilitatorBucketLevelUpdatedEvent,
  FacilitatorRemoved as FacilitatorRemovedEvent,
  RoleAdminChanged as RoleAdminChangedEvent,
  RoleGranted as RoleGrantedEvent,
  RoleRevoked as RoleRevokedEvent,
  Transfer as TransferEvent
} from "../generated/GhoToken/GhoToken"
import {
  Approval,
  FacilitatorAdded,
  FacilitatorBucketCapacityUpdated,
  FacilitatorBucketLevelUpdated,
  FacilitatorRemoved,
  RoleAdminChanged,
  RoleGranted,
  RoleRevoked,
  Transfer
} from "../generated/schema"

export function handleApproval(event: ApprovalEvent): void {
  let entity = new Approval(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.spender = event.params.spender
  entity.value = event.params.value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleFacilitatorAdded(event: FacilitatorAddedEvent): void {
  let entity = new FacilitatorAdded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.facilitatorAddress = event.params.facilitatorAddress
  entity.label = event.params.label
  entity.bucketCapacity = event.params.bucketCapacity

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleFacilitatorBucketCapacityUpdated(
  event: FacilitatorBucketCapacityUpdatedEvent
): void {
  let entity = new FacilitatorBucketCapacityUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.facilitatorAddress = event.params.facilitatorAddress
  entity.oldCapacity = event.params.oldCapacity
  entity.newCapacity = event.params.newCapacity

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleFacilitatorBucketLevelUpdated(
  event: FacilitatorBucketLevelUpdatedEvent
): void {
  let entity = new FacilitatorBucketLevelUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.facilitatorAddress = event.params.facilitatorAddress
  entity.oldLevel = event.params.oldLevel
  entity.newLevel = event.params.newLevel

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleFacilitatorRemoved(event: FacilitatorRemovedEvent): void {
  let entity = new FacilitatorRemoved(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.facilitatorAddress = event.params.facilitatorAddress

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRoleAdminChanged(event: RoleAdminChangedEvent): void {
  let entity = new RoleAdminChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.role = event.params.role
  entity.previousAdminRole = event.params.previousAdminRole
  entity.newAdminRole = event.params.newAdminRole

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRoleGranted(event: RoleGrantedEvent): void {
  let entity = new RoleGranted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.role = event.params.role
  entity.account = event.params.account
  entity.sender = event.params.sender

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRoleRevoked(event: RoleRevokedEvent): void {
  let entity = new RoleRevoked(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.role = event.params.role
  entity.account = event.params.account
  entity.sender = event.params.sender

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.value = event.params.value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
