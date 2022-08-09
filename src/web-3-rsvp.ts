import { Address, ipfs, json } from "@graphprotocol/graph-ts";
import {
  NewAttendeeCheckIn,
  NewEventCreated,
  NewRegistrantAdded,
  UnclaimedDepositPaidOut,
} from "../generated/Web3RSVP/Web3RSVP";
import { Event, Account, Registrant, Attendee } from "../generated/schema";
import { integer } from "@protofire/subgraph-toolkit";

export function handleNewAttendeeCheckIn(event: NewAttendeeCheckIn): void {}

export function handleNewEventCreated(event: NewEventCreated): void {
  let newEvent = Event.load(event.params.eID.toHex());
  if (newEvent == null) {
    newEvent = new Event(event.params.eID.toHex());
    newEvent.eID = event.params.eID;
    newEvent.eCreator = event.params.eCreator;
    newEvent.eTimeStart = event.params.eTimeStart;
    newEvent.eCapacity = event.params.eCapacity;
    newEvent.eDepositAmount = event.params.eDepositAmount;
    newEvent.isPaid = false;

    newEvent.totalRegistrants = integer.ZERO;
    newEvent.totalAttendees = integer.ZERO;

    newEvent.save();
  }
}

export function handleNewRegistrantAdded(event: NewRegistrantAdded): void {}

export function handleUnclaimedDepositPaidOut(
  event: UnclaimedDepositPaidOut
): void {}
