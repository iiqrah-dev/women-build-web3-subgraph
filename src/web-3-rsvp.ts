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

    let metadata = ipfs.cat(event.params.eDataCID + "/data.json");

    if (metadata) {
      const content = json.fromBytes(metadata).toObject();

      if (content) {
        const name = content.get("name");
        const description = content.get("description");
        const link = content.get("link");
        const image = content.get("image");

        if (name) {
          newEvent.eName = name.toString();
        }

        if (description) {
          newEvent.eDescription = description.toString();
        }

        if (link) {
          newEvent.eLink = link.toString();
        }

        if (image) {
          const imageURL =
            "https://ipfs.io/ipfs/" + event.params.eDataCID + image.toString();
          newEvent.eImage = imageURL;
        } else {
          const fallbackImageURL =
            "https://ipfs.io/ipfs/bafybeibssbrlptcefbqfh4vpw2wlmqfj2kgxt3nil4yujxbmdznau3t5wi/event.png";
          newEvent.eImage = fallbackImageURL;
        }
      }
    }

    newEvent.save();
  }
}

function getOrCreateAccount(address: Address): Account {
  let account = Account.load(address.toHex());
  if (account == null) {
    account = new Account(address.toHex());
    account.totalEventsRegistered = integer.ZERO;
    account.totalEventsAttended = integer.ZERO;
    account.save();
  }
  return account;
}

export function handleNewRegistrantAdded(event: NewRegistrantAdded): void {
  let newRegistrant = Registrant.load(event.transaction.from.toHex());
  let account = getOrCreateAccount(event.params.registrantAddress);
  let thisEvent = Event.load(event.params.eID.toHex());
  if (newRegistrant == null && thisEvent != null) {
    newRegistrant = new Registrant(event.transaction.from.toHex());
    newRegistrant.registrant = account.id;
    newRegistrant.event = thisEvent.id;

    newRegistrant.save();

    account.totalEventsRegistered = integer.increment(
      account.totalEventsRegistered
    );
    account.save();
  }
}

export function handleUnclaimedDepositPaidOut(
  event: UnclaimedDepositPaidOut
): void {}
