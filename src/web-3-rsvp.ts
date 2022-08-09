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

export function handleNewEventCreated(event: NewEventCreated): void {}

export function handleNewRegistrantAdded(event: NewRegistrantAdded): void {}

export function handleUnclaimedDepositPaidOut(
  event: UnclaimedDepositPaidOut
): void {}
