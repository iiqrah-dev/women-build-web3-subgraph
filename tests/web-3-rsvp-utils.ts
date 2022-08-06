import { newMockEvent } from "matchstick-as"
import { ethereum, Bytes, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  NewAttendeeCheckIn,
  NewEventCreated,
  NewRegistrantAdded,
  UnclaimedDepositPaidOut
} from "../generated/Web3RSVP/Web3RSVP"

export function createNewAttendeeCheckInEvent(
  eID: Bytes,
  attendeeAddress: Address
): NewAttendeeCheckIn {
  let newAttendeeCheckInEvent = changetype<NewAttendeeCheckIn>(newMockEvent())

  newAttendeeCheckInEvent.parameters = new Array()

  newAttendeeCheckInEvent.parameters.push(
    new ethereum.EventParam("eID", ethereum.Value.fromFixedBytes(eID))
  )
  newAttendeeCheckInEvent.parameters.push(
    new ethereum.EventParam(
      "attendeeAddress",
      ethereum.Value.fromAddress(attendeeAddress)
    )
  )

  return newAttendeeCheckInEvent
}

export function createNewEventCreatedEvent(
  eID: Bytes,
  eDataCID: string,
  eCreator: Address,
  eTimeStart: BigInt,
  eCapacity: BigInt,
  eDepositAmount: BigInt
): NewEventCreated {
  let newEventCreatedEvent = changetype<NewEventCreated>(newMockEvent())

  newEventCreatedEvent.parameters = new Array()

  newEventCreatedEvent.parameters.push(
    new ethereum.EventParam("eID", ethereum.Value.fromFixedBytes(eID))
  )
  newEventCreatedEvent.parameters.push(
    new ethereum.EventParam("eDataCID", ethereum.Value.fromString(eDataCID))
  )
  newEventCreatedEvent.parameters.push(
    new ethereum.EventParam("eCreator", ethereum.Value.fromAddress(eCreator))
  )
  newEventCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "eTimeStart",
      ethereum.Value.fromUnsignedBigInt(eTimeStart)
    )
  )
  newEventCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "eCapacity",
      ethereum.Value.fromUnsignedBigInt(eCapacity)
    )
  )
  newEventCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "eDepositAmount",
      ethereum.Value.fromUnsignedBigInt(eDepositAmount)
    )
  )

  return newEventCreatedEvent
}

export function createNewRegistrantAddedEvent(
  eID: Bytes,
  registrantAddress: Address
): NewRegistrantAdded {
  let newRegistrantAddedEvent = changetype<NewRegistrantAdded>(newMockEvent())

  newRegistrantAddedEvent.parameters = new Array()

  newRegistrantAddedEvent.parameters.push(
    new ethereum.EventParam("eID", ethereum.Value.fromFixedBytes(eID))
  )
  newRegistrantAddedEvent.parameters.push(
    new ethereum.EventParam(
      "registrantAddress",
      ethereum.Value.fromAddress(registrantAddress)
    )
  )

  return newRegistrantAddedEvent
}

export function createUnclaimedDepositPaidOutEvent(
  eID: Bytes,
  unclaimedDepositAmount: BigInt
): UnclaimedDepositPaidOut {
  let unclaimedDepositPaidOutEvent = changetype<UnclaimedDepositPaidOut>(
    newMockEvent()
  )

  unclaimedDepositPaidOutEvent.parameters = new Array()

  unclaimedDepositPaidOutEvent.parameters.push(
    new ethereum.EventParam("eID", ethereum.Value.fromFixedBytes(eID))
  )
  unclaimedDepositPaidOutEvent.parameters.push(
    new ethereum.EventParam(
      "unclaimedDepositAmount",
      ethereum.Value.fromUnsignedBigInt(unclaimedDepositAmount)
    )
  )

  return unclaimedDepositPaidOutEvent
}
