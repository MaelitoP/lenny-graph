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

export class AuctionCreated extends ethereum.Event {
  get params(): AuctionCreated__Params {
    return new AuctionCreated__Params(this);
  }
}

export class AuctionCreated__Params {
  _event: AuctionCreated;

  constructor(event: AuctionCreated) {
    this._event = event;
  }

  get AuctionId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get nftContract(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get owner(): Address {
    return this._event.parameters[3].value.toAddress();
  }

  get minPrice(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get endAuction(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }
}

export class BidCreated extends ethereum.Event {
  get params(): BidCreated__Params {
    return new BidCreated__Params(this);
  }
}

export class BidCreated__Params {
  _event: BidCreated;

  constructor(event: BidCreated) {
    this._event = event;
  }

  get AuctionId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get bidNumber(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get lastbuyer(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get lastbid(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class NFTClaimed extends ethereum.Event {
  get params(): NFTClaimed__Params {
    return new NFTClaimed__Params(this);
  }
}

export class NFTClaimed__Params {
  _event: NFTClaimed;

  constructor(event: NFTClaimed) {
    this._event = event;
  }

  get AuctionId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get winner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Withdraw extends ethereum.Event {
  get params(): Withdraw__Params {
    return new Withdraw__Params(this);
  }
}

export class Withdraw__Params {
  _event: Withdraw;

  constructor(event: Withdraw) {
    this._event = event;
  }

  get AuctionId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get participant(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class Market__AuctiontoInfoResult {
  value0: BigInt;
  value1: BigInt;
  value2: Address;
  value3: BigInt;

  constructor(value0: BigInt, value1: BigInt, value2: Address, value3: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromAddress(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    return map;
  }
}

export class Market__AuctiontoNFTResult {
  value0: BigInt;
  value1: Address;
  value2: BigInt;
  value3: BigInt;
  value4: Address;
  value5: BigInt;
  value6: boolean;

  constructor(
    value0: BigInt,
    value1: Address,
    value2: BigInt,
    value3: BigInt,
    value4: Address,
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
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromAddress(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromAddress(this.value4));
    map.set("value5", ethereum.Value.fromUnsignedBigInt(this.value5));
    map.set("value6", ethereum.Value.fromBoolean(this.value6));
    return map;
  }
}

export class Market__BuyerAuctionResult {
  value0: BigInt;
  value1: BigInt;
  value2: boolean;

  constructor(value0: BigInt, value1: BigInt, value2: boolean) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromBoolean(this.value2));
    return map;
  }
}

export class Market__NFTtoInfoResult {
  value0: BigInt;
  value1: Address;
  value2: BigInt;
  value3: string;

  constructor(value0: BigInt, value1: Address, value2: BigInt, value3: string) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromAddress(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromString(this.value3));
    return map;
  }
}

export class Market__getAllNFTResultValue0Struct extends ethereum.Tuple {
  get auctionId(): BigInt {
    return this[0].toBigInt();
  }

  get nftContract(): Address {
    return this[1].toAddress();
  }

  get tokenId(): BigInt {
    return this[2].toBigInt();
  }

  get tokenURI(): string {
    return this[3].toString();
  }
}

export class Market extends ethereum.SmartContract {
  static bind(address: Address): Market {
    return new Market("Market", address);
  }

  AuctiontoInfo(param0: BigInt): Market__AuctiontoInfoResult {
    let result = super.call(
      "AuctiontoInfo",
      "AuctiontoInfo(uint256):(uint256,uint256,address,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new Market__AuctiontoInfoResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toAddress(),
      result[3].toBigInt()
    );
  }

  try_AuctiontoInfo(
    param0: BigInt
  ): ethereum.CallResult<Market__AuctiontoInfoResult> {
    let result = super.tryCall(
      "AuctiontoInfo",
      "AuctiontoInfo(uint256):(uint256,uint256,address,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Market__AuctiontoInfoResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toAddress(),
        value[3].toBigInt()
      )
    );
  }

  AuctiontoNFT(param0: BigInt): Market__AuctiontoNFTResult {
    let result = super.call(
      "AuctiontoNFT",
      "AuctiontoNFT(uint256):(uint256,address,uint256,uint256,address,uint256,bool)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new Market__AuctiontoNFTResult(
      result[0].toBigInt(),
      result[1].toAddress(),
      result[2].toBigInt(),
      result[3].toBigInt(),
      result[4].toAddress(),
      result[5].toBigInt(),
      result[6].toBoolean()
    );
  }

  try_AuctiontoNFT(
    param0: BigInt
  ): ethereum.CallResult<Market__AuctiontoNFTResult> {
    let result = super.tryCall(
      "AuctiontoNFT",
      "AuctiontoNFT(uint256):(uint256,address,uint256,uint256,address,uint256,bool)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Market__AuctiontoNFTResult(
        value[0].toBigInt(),
        value[1].toAddress(),
        value[2].toBigInt(),
        value[3].toBigInt(),
        value[4].toAddress(),
        value[5].toBigInt(),
        value[6].toBoolean()
      )
    );
  }

  BuyerAuction(
    param0: Address,
    param1: Address,
    param2: BigInt
  ): Market__BuyerAuctionResult {
    let result = super.call(
      "BuyerAuction",
      "BuyerAuction(address,address,uint256):(uint256,uint256,bool)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigInt(param2)
      ]
    );

    return new Market__BuyerAuctionResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBoolean()
    );
  }

  try_BuyerAuction(
    param0: Address,
    param1: Address,
    param2: BigInt
  ): ethereum.CallResult<Market__BuyerAuctionResult> {
    let result = super.tryCall(
      "BuyerAuction",
      "BuyerAuction(address,address,uint256):(uint256,uint256,bool)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigInt(param2)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Market__BuyerAuctionResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBoolean()
      )
    );
  }

  ERC721Address(param0: Address): boolean {
    let result = super.call("ERC721Address", "ERC721Address(address):(bool)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toBoolean();
  }

  try_ERC721Address(param0: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "ERC721Address",
      "ERC721Address(address):(bool)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  ExistingAuctions(param0: Address, param1: BigInt): boolean {
    let result = super.call(
      "ExistingAuctions",
      "ExistingAuctions(address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );

    return result[0].toBoolean();
  }

  try_ExistingAuctions(
    param0: Address,
    param1: BigInt
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "ExistingAuctions",
      "ExistingAuctions(address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  NFTtoInfo(param0: BigInt): Market__NFTtoInfoResult {
    let result = super.call(
      "NFTtoInfo",
      "NFTtoInfo(uint256):(uint256,address,uint256,string)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new Market__NFTtoInfoResult(
      result[0].toBigInt(),
      result[1].toAddress(),
      result[2].toBigInt(),
      result[3].toString()
    );
  }

  try_NFTtoInfo(param0: BigInt): ethereum.CallResult<Market__NFTtoInfoResult> {
    let result = super.tryCall(
      "NFTtoInfo",
      "NFTtoInfo(uint256):(uint256,address,uint256,string)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Market__NFTtoInfoResult(
        value[0].toBigInt(),
        value[1].toAddress(),
        value[2].toBigInt(),
        value[3].toString()
      )
    );
  }

  createAuction(
    _nftContract: Address,
    _tokenId: BigInt,
    _minPrice: BigInt,
    _endAuction: BigInt
  ): BigInt {
    let result = super.call(
      "createAuction",
      "createAuction(address,uint256,uint256,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(_nftContract),
        ethereum.Value.fromUnsignedBigInt(_tokenId),
        ethereum.Value.fromUnsignedBigInt(_minPrice),
        ethereum.Value.fromUnsignedBigInt(_endAuction)
      ]
    );

    return result[0].toBigInt();
  }

  try_createAuction(
    _nftContract: Address,
    _tokenId: BigInt,
    _minPrice: BigInt,
    _endAuction: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "createAuction",
      "createAuction(address,uint256,uint256,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(_nftContract),
        ethereum.Value.fromUnsignedBigInt(_tokenId),
        ethereum.Value.fromUnsignedBigInt(_minPrice),
        ethereum.Value.fromUnsignedBigInt(_endAuction)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  createAuctionERC721(
    _owner: Address,
    _nftContract: Address,
    _tokenId: BigInt,
    _minPrice: BigInt,
    _endAuction: BigInt
  ): BigInt {
    let result = super.call(
      "createAuctionERC721",
      "createAuctionERC721(address,address,uint256,uint256,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(_owner),
        ethereum.Value.fromAddress(_nftContract),
        ethereum.Value.fromUnsignedBigInt(_tokenId),
        ethereum.Value.fromUnsignedBigInt(_minPrice),
        ethereum.Value.fromUnsignedBigInt(_endAuction)
      ]
    );

    return result[0].toBigInt();
  }

  try_createAuctionERC721(
    _owner: Address,
    _nftContract: Address,
    _tokenId: BigInt,
    _minPrice: BigInt,
    _endAuction: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "createAuctionERC721",
      "createAuctionERC721(address,address,uint256,uint256,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(_owner),
        ethereum.Value.fromAddress(_nftContract),
        ethereum.Value.fromUnsignedBigInt(_tokenId),
        ethereum.Value.fromUnsignedBigInt(_minPrice),
        ethereum.Value.fromUnsignedBigInt(_endAuction)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  doscAdd(): Address {
    let result = super.call("doscAdd", "doscAdd():(address)", []);

    return result[0].toAddress();
  }

  try_doscAdd(): ethereum.CallResult<Address> {
    let result = super.tryCall("doscAdd", "doscAdd():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getAllNFT(): Array<Market__getAllNFTResultValue0Struct> {
    let result = super.call(
      "getAllNFT",
      "getAllNFT():((uint256,address,uint256,string)[])",
      []
    );

    return result[0].toTupleArray<Market__getAllNFTResultValue0Struct>();
  }

  try_getAllNFT(): ethereum.CallResult<
    Array<Market__getAllNFTResultValue0Struct>
  > {
    let result = super.tryCall(
      "getAllNFT",
      "getAllNFT():((uint256,address,uint256,string)[])",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      value[0].toTupleArray<Market__getAllNFTResultValue0Struct>()
    );
  }

  lastAuthorizedAddress(): Address {
    let result = super.call(
      "lastAuthorizedAddress",
      "lastAuthorizedAddress():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_lastAuthorizedAddress(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "lastAuthorizedAddress",
      "lastAuthorizedAddress():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  lastChangingTime(): BigInt {
    let result = super.call(
      "lastChangingTime",
      "lastChangingTime():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_lastChangingTime(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "lastChangingTime",
      "lastChangingTime():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  maxPrice(): BigInt {
    let result = super.call("maxPrice", "maxPrice():(uint256)", []);

    return result[0].toBigInt();
  }

  try_maxPrice(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("maxPrice", "maxPrice():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  tokenAdd(): Address {
    let result = super.call("tokenAdd", "tokenAdd():(address)", []);

    return result[0].toAddress();
  }

  try_tokenAdd(): ethereum.CallResult<Address> {
    let result = super.tryCall("tokenAdd", "tokenAdd():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  totalAuctions(): BigInt {
    let result = super.call("totalAuctions", "totalAuctions():(uint32)", []);

    return result[0].toBigInt();
  }

  try_totalAuctions(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("totalAuctions", "totalAuctions():(uint32)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _maxPrice(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _doscAddress(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class AddTokenAddressCall extends ethereum.Call {
  get inputs(): AddTokenAddressCall__Inputs {
    return new AddTokenAddressCall__Inputs(this);
  }

  get outputs(): AddTokenAddressCall__Outputs {
    return new AddTokenAddressCall__Outputs(this);
  }
}

export class AddTokenAddressCall__Inputs {
  _call: AddTokenAddressCall;

  constructor(call: AddTokenAddressCall) {
    this._call = call;
  }

  get newAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class AddTokenAddressCall__Outputs {
  _call: AddTokenAddressCall;

  constructor(call: AddTokenAddressCall) {
    this._call = call;
  }
}

export class AuthorizeAddressesCall extends ethereum.Call {
  get inputs(): AuthorizeAddressesCall__Inputs {
    return new AuthorizeAddressesCall__Inputs(this);
  }

  get outputs(): AuthorizeAddressesCall__Outputs {
    return new AuthorizeAddressesCall__Outputs(this);
  }
}

export class AuthorizeAddressesCall__Inputs {
  _call: AuthorizeAddressesCall;

  constructor(call: AuthorizeAddressesCall) {
    this._call = call;
  }

  get newaddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class AuthorizeAddressesCall__Outputs {
  _call: AuthorizeAddressesCall;

  constructor(call: AuthorizeAddressesCall) {
    this._call = call;
  }
}

export class BidCall extends ethereum.Call {
  get inputs(): BidCall__Inputs {
    return new BidCall__Inputs(this);
  }

  get outputs(): BidCall__Outputs {
    return new BidCall__Outputs(this);
  }
}

export class BidCall__Inputs {
  _call: BidCall;

  constructor(call: BidCall) {
    this._call = call;
  }

  get _auctionId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _bidPrice(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class BidCall__Outputs {
  _call: BidCall;

  constructor(call: BidCall) {
    this._call = call;
  }
}

export class ClaimNFTCall extends ethereum.Call {
  get inputs(): ClaimNFTCall__Inputs {
    return new ClaimNFTCall__Inputs(this);
  }

  get outputs(): ClaimNFTCall__Outputs {
    return new ClaimNFTCall__Outputs(this);
  }
}

export class ClaimNFTCall__Inputs {
  _call: ClaimNFTCall;

  constructor(call: ClaimNFTCall) {
    this._call = call;
  }

  get _auctionId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class ClaimNFTCall__Outputs {
  _call: ClaimNFTCall;

  constructor(call: ClaimNFTCall) {
    this._call = call;
  }
}

export class CreateAuctionCall extends ethereum.Call {
  get inputs(): CreateAuctionCall__Inputs {
    return new CreateAuctionCall__Inputs(this);
  }

  get outputs(): CreateAuctionCall__Outputs {
    return new CreateAuctionCall__Outputs(this);
  }
}

export class CreateAuctionCall__Inputs {
  _call: CreateAuctionCall;

  constructor(call: CreateAuctionCall) {
    this._call = call;
  }

  get _nftContract(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _minPrice(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _endAuction(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }
}

export class CreateAuctionCall__Outputs {
  _call: CreateAuctionCall;

  constructor(call: CreateAuctionCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class CreateAuctionERC721Call extends ethereum.Call {
  get inputs(): CreateAuctionERC721Call__Inputs {
    return new CreateAuctionERC721Call__Inputs(this);
  }

  get outputs(): CreateAuctionERC721Call__Outputs {
    return new CreateAuctionERC721Call__Outputs(this);
  }
}

export class CreateAuctionERC721Call__Inputs {
  _call: CreateAuctionERC721Call;

  constructor(call: CreateAuctionERC721Call) {
    this._call = call;
  }

  get _owner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _nftContract(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _minPrice(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get _endAuction(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }
}

export class CreateAuctionERC721Call__Outputs {
  _call: CreateAuctionERC721Call;

  constructor(call: CreateAuctionERC721Call) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class SetMaxPriceCall extends ethereum.Call {
  get inputs(): SetMaxPriceCall__Inputs {
    return new SetMaxPriceCall__Inputs(this);
  }

  get outputs(): SetMaxPriceCall__Outputs {
    return new SetMaxPriceCall__Outputs(this);
  }
}

export class SetMaxPriceCall__Inputs {
  _call: SetMaxPriceCall;

  constructor(call: SetMaxPriceCall) {
    this._call = call;
  }

  get newMax(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetMaxPriceCall__Outputs {
  _call: SetMaxPriceCall;

  constructor(call: SetMaxPriceCall) {
    this._call = call;
  }
}

export class UpdateAuctionCall extends ethereum.Call {
  get inputs(): UpdateAuctionCall__Inputs {
    return new UpdateAuctionCall__Inputs(this);
  }

  get outputs(): UpdateAuctionCall__Outputs {
    return new UpdateAuctionCall__Outputs(this);
  }
}

export class UpdateAuctionCall__Inputs {
  _call: UpdateAuctionCall;

  constructor(call: UpdateAuctionCall) {
    this._call = call;
  }

  get _auctionId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _minPrice(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _endAuction(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class UpdateAuctionCall__Outputs {
  _call: UpdateAuctionCall;

  constructor(call: UpdateAuctionCall) {
    this._call = call;
  }
}

export class UpdateSCCall extends ethereum.Call {
  get inputs(): UpdateSCCall__Inputs {
    return new UpdateSCCall__Inputs(this);
  }

  get outputs(): UpdateSCCall__Outputs {
    return new UpdateSCCall__Outputs(this);
  }
}

export class UpdateSCCall__Inputs {
  _call: UpdateSCCall;

  constructor(call: UpdateSCCall) {
    this._call = call;
  }
}

export class UpdateSCCall__Outputs {
  _call: UpdateSCCall;

  constructor(call: UpdateSCCall) {
    this._call = call;
  }
}

export class WithdrawBetCall extends ethereum.Call {
  get inputs(): WithdrawBetCall__Inputs {
    return new WithdrawBetCall__Inputs(this);
  }

  get outputs(): WithdrawBetCall__Outputs {
    return new WithdrawBetCall__Outputs(this);
  }
}

export class WithdrawBetCall__Inputs {
  _call: WithdrawBetCall;

  constructor(call: WithdrawBetCall) {
    this._call = call;
  }

  get _auctionId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class WithdrawBetCall__Outputs {
  _call: WithdrawBetCall;

  constructor(call: WithdrawBetCall) {
    this._call = call;
  }
}
