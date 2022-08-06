// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class NewAttendeeCheckIn extends ethereum.Event {
  get params(): NewAttendeeCheckIn__Params {
    return new NewAttendeeCheckIn__Params(this);
  }
}

export class NewAttendeeCheckIn__Params {
  _event: NewAttendeeCheckIn;

  constructor(event: NewAttendeeCheckIn) {
    this._event = event;
  }

  get eID(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get attendeeAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class NewEventCreated extends ethereum.Event {
  get params(): NewEventCreated__Params {
    return new NewEventCreated__Params(this);
  }
}

export class NewEventCreated__Params {
  _event: NewEventCreated;

  constructor(event: NewEventCreated) {
    this._event = event;
  }

  get eID(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get eDataCID(): string {
    return this._event.parameters[1].value.toString();
  }

  get eCreator(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get eTimeStart(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get eCapacity(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get eDepositAmount(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }
}

export class NewRegistrantAdded extends ethereum.Event {
  get params(): NewRegistrantAdded__Params {
    return new NewRegistrantAdded__Params(this);
  }
}

export class NewRegistrantAdded__Params {
  _event: NewRegistrantAdded;

  constructor(event: NewRegistrantAdded) {
    this._event = event;
  }

  get eID(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get registrantAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class UnclaimedDepositPaidOut extends ethereum.Event {
  get params(): UnclaimedDepositPaidOut__Params {
    return new UnclaimedDepositPaidOut__Params(this);
  }
}

export class UnclaimedDepositPaidOut__Params {
  _event: UnclaimedDepositPaidOut;

  constructor(event: UnclaimedDepositPaidOut) {
    this._event = event;
  }

  get eID(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get unclaimedDepositAmount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class Web3RSVP__idToEventMappingResult {
  value0: Bytes;
  value1: string;
  value2: Address;
  value3: BigInt;
  value4: BigInt;
  value5: BigInt;
  value6: boolean;

  constructor(
    value0: Bytes,
    value1: string,
    value2: Address,
    value3: BigInt,
    value4: BigInt,
    value5: BigInt,
    value6: boolean
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromFixedBytes(this.value0));
    map.set("value1", ethereum.Value.fromString(this.value1));
    map.set("value2", ethereum.Value.fromAddress(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    map.set("value5", ethereum.Value.fromUnsignedBigInt(this.value5));
    map.set("value6", ethereum.Value.fromBoolean(this.value6));
    return map;
  }

  getEID(): Bytes {
    return this.value0;
  }

  getEDataCID(): string {
    return this.value1;
  }

  getECreator(): Address {
    return this.value2;
  }

  getETimeStart(): BigInt {
    return this.value3;
  }

  getECapacity(): BigInt {
    return this.value4;
  }

  getEDepositAmount(): BigInt {
    return this.value5;
  }

  getIsPaid(): boolean {
    return this.value6;
  }
}

export class Web3RSVP extends ethereum.SmartContract {
  static bind(address: Address): Web3RSVP {
    return new Web3RSVP("Web3RSVP", address);
  }

  idToEventMapping(param0: Bytes): Web3RSVP__idToEventMappingResult {
    let result = super.call(
      "idToEventMapping",
      "idToEventMapping(bytes32):(bytes32,string,address,uint256,uint256,uint256,bool)",
      [ethereum.Value.fromFixedBytes(param0)]
    );

    return new Web3RSVP__idToEventMappingResult(
      result[0].toBytes(),
      result[1].toString(),
      result[2].toAddress(),
      result[3].toBigInt(),
      result[4].toBigInt(),
      result[5].toBigInt(),
      result[6].toBoolean()
    );
  }

  try_idToEventMapping(
    param0: Bytes
  ): ethereum.CallResult<Web3RSVP__idToEventMappingResult> {
    let result = super.tryCall(
      "idToEventMapping",
      "idToEventMapping(bytes32):(bytes32,string,address,uint256,uint256,uint256,bool)",
      [ethereum.Value.fromFixedBytes(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Web3RSVP__idToEventMappingResult(
        value[0].toBytes(),
        value[1].toString(),
        value[2].toAddress(),
        value[3].toBigInt(),
        value[4].toBigInt(),
        value[5].toBigInt(),
        value[6].toBoolean()
      )
    );
  }
}

export class AddNewRegistrantCall extends ethereum.Call {
  get inputs(): AddNewRegistrantCall__Inputs {
    return new AddNewRegistrantCall__Inputs(this);
  }

  get outputs(): AddNewRegistrantCall__Outputs {
    return new AddNewRegistrantCall__Outputs(this);
  }
}

export class AddNewRegistrantCall__Inputs {
  _call: AddNewRegistrantCall;

  constructor(call: AddNewRegistrantCall) {
    this._call = call;
  }

  get eID(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }
}

export class AddNewRegistrantCall__Outputs {
  _call: AddNewRegistrantCall;

  constructor(call: AddNewRegistrantCall) {
    this._call = call;
  }
}

export class CheckInAllRegistrantsCall extends ethereum.Call {
  get inputs(): CheckInAllRegistrantsCall__Inputs {
    return new CheckInAllRegistrantsCall__Inputs(this);
  }

  get outputs(): CheckInAllRegistrantsCall__Outputs {
    return new CheckInAllRegistrantsCall__Outputs(this);
  }
}

export class CheckInAllRegistrantsCall__Inputs {
  _call: CheckInAllRegistrantsCall;

  constructor(call: CheckInAllRegistrantsCall) {
    this._call = call;
  }

  get eID(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }
}

export class CheckInAllRegistrantsCall__Outputs {
  _call: CheckInAllRegistrantsCall;

  constructor(call: CheckInAllRegistrantsCall) {
    this._call = call;
  }
}

export class CheckInRegistrantCall extends ethereum.Call {
  get inputs(): CheckInRegistrantCall__Inputs {
    return new CheckInRegistrantCall__Inputs(this);
  }

  get outputs(): CheckInRegistrantCall__Outputs {
    return new CheckInRegistrantCall__Outputs(this);
  }
}

export class CheckInRegistrantCall__Inputs {
  _call: CheckInRegistrantCall;

  constructor(call: CheckInRegistrantCall) {
    this._call = call;
  }

  get eID(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get registrant(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class CheckInRegistrantCall__Outputs {
  _call: CheckInRegistrantCall;

  constructor(call: CheckInRegistrantCall) {
    this._call = call;
  }
}

export class CreateEventCall extends ethereum.Call {
  get inputs(): CreateEventCall__Inputs {
    return new CreateEventCall__Inputs(this);
  }

  get outputs(): CreateEventCall__Outputs {
    return new CreateEventCall__Outputs(this);
  }
}

export class CreateEventCall__Inputs {
  _call: CreateEventCall;

  constructor(call: CreateEventCall) {
    this._call = call;
  }

  get eDataCID(): string {
    return this._call.inputValues[0].value.toString();
  }

  get eTimeStart(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get eCapacity(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get eDepositAmount(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }
}

export class CreateEventCall__Outputs {
  _call: CreateEventCall;

  constructor(call: CreateEventCall) {
    this._call = call;
  }
}

export class WithdrawUnclaimedDepositCall extends ethereum.Call {
  get inputs(): WithdrawUnclaimedDepositCall__Inputs {
    return new WithdrawUnclaimedDepositCall__Inputs(this);
  }

  get outputs(): WithdrawUnclaimedDepositCall__Outputs {
    return new WithdrawUnclaimedDepositCall__Outputs(this);
  }
}

export class WithdrawUnclaimedDepositCall__Inputs {
  _call: WithdrawUnclaimedDepositCall;

  constructor(call: WithdrawUnclaimedDepositCall) {
    this._call = call;
  }

  get eID(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }
}

export class WithdrawUnclaimedDepositCall__Outputs {
  _call: WithdrawUnclaimedDepositCall;

  constructor(call: WithdrawUnclaimedDepositCall) {
    this._call = call;
  }
}