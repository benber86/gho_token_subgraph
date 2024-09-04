import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
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
} from "../generated/GhoToken/GhoToken"

export function createApprovalEvent(
  owner: Address,
  spender: Address,
  value: BigInt
): Approval {
  let approvalEvent = changetype<Approval>(newMockEvent())

  approvalEvent.parameters = new Array()

  approvalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return approvalEvent
}

export function createFacilitatorAddedEvent(
  facilitatorAddress: Address,
  label: Bytes,
  bucketCapacity: BigInt
): FacilitatorAdded {
  let facilitatorAddedEvent = changetype<FacilitatorAdded>(newMockEvent())

  facilitatorAddedEvent.parameters = new Array()

  facilitatorAddedEvent.parameters.push(
    new ethereum.EventParam(
      "facilitatorAddress",
      ethereum.Value.fromAddress(facilitatorAddress)
    )
  )
  facilitatorAddedEvent.parameters.push(
    new ethereum.EventParam("label", ethereum.Value.fromFixedBytes(label))
  )
  facilitatorAddedEvent.parameters.push(
    new ethereum.EventParam(
      "bucketCapacity",
      ethereum.Value.fromUnsignedBigInt(bucketCapacity)
    )
  )

  return facilitatorAddedEvent
}

export function createFacilitatorBucketCapacityUpdatedEvent(
  facilitatorAddress: Address,
  oldCapacity: BigInt,
  newCapacity: BigInt
): FacilitatorBucketCapacityUpdated {
  let facilitatorBucketCapacityUpdatedEvent =
    changetype<FacilitatorBucketCapacityUpdated>(newMockEvent())

  facilitatorBucketCapacityUpdatedEvent.parameters = new Array()

  facilitatorBucketCapacityUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "facilitatorAddress",
      ethereum.Value.fromAddress(facilitatorAddress)
    )
  )
  facilitatorBucketCapacityUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "oldCapacity",
      ethereum.Value.fromUnsignedBigInt(oldCapacity)
    )
  )
  facilitatorBucketCapacityUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "newCapacity",
      ethereum.Value.fromUnsignedBigInt(newCapacity)
    )
  )

  return facilitatorBucketCapacityUpdatedEvent
}

export function createFacilitatorBucketLevelUpdatedEvent(
  facilitatorAddress: Address,
  oldLevel: BigInt,
  newLevel: BigInt
): FacilitatorBucketLevelUpdated {
  let facilitatorBucketLevelUpdatedEvent =
    changetype<FacilitatorBucketLevelUpdated>(newMockEvent())

  facilitatorBucketLevelUpdatedEvent.parameters = new Array()

  facilitatorBucketLevelUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "facilitatorAddress",
      ethereum.Value.fromAddress(facilitatorAddress)
    )
  )
  facilitatorBucketLevelUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "oldLevel",
      ethereum.Value.fromUnsignedBigInt(oldLevel)
    )
  )
  facilitatorBucketLevelUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "newLevel",
      ethereum.Value.fromUnsignedBigInt(newLevel)
    )
  )

  return facilitatorBucketLevelUpdatedEvent
}

export function createFacilitatorRemovedEvent(
  facilitatorAddress: Address
): FacilitatorRemoved {
  let facilitatorRemovedEvent = changetype<FacilitatorRemoved>(newMockEvent())

  facilitatorRemovedEvent.parameters = new Array()

  facilitatorRemovedEvent.parameters.push(
    new ethereum.EventParam(
      "facilitatorAddress",
      ethereum.Value.fromAddress(facilitatorAddress)
    )
  )

  return facilitatorRemovedEvent
}

export function createRoleAdminChangedEvent(
  role: Bytes,
  previousAdminRole: Bytes,
  newAdminRole: Bytes
): RoleAdminChanged {
  let roleAdminChangedEvent = changetype<RoleAdminChanged>(newMockEvent())

  roleAdminChangedEvent.parameters = new Array()

  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "previousAdminRole",
      ethereum.Value.fromFixedBytes(previousAdminRole)
    )
  )
  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "newAdminRole",
      ethereum.Value.fromFixedBytes(newAdminRole)
    )
  )

  return roleAdminChangedEvent
}

export function createRoleGrantedEvent(
  role: Bytes,
  account: Address,
  sender: Address
): RoleGranted {
  let roleGrantedEvent = changetype<RoleGranted>(newMockEvent())

  roleGrantedEvent.parameters = new Array()

  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return roleGrantedEvent
}

export function createRoleRevokedEvent(
  role: Bytes,
  account: Address,
  sender: Address
): RoleRevoked {
  let roleRevokedEvent = changetype<RoleRevoked>(newMockEvent())

  roleRevokedEvent.parameters = new Array()

  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return roleRevokedEvent
}

export function createTransferEvent(
  from: Address,
  to: Address,
  value: BigInt
): Transfer {
  let transferEvent = changetype<Transfer>(newMockEvent())

  transferEvent.parameters = new Array()

  transferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return transferEvent
}
