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

export class ClaimCreated extends ethereum.Event {
  get params(): ClaimCreated__Params {
    return new ClaimCreated__Params(this);
  }
}

export class ClaimCreated__Params {
  _event: ClaimCreated;

  constructor(event: ClaimCreated) {
    this._event = event;
  }

  get id(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get amountToken(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get amountPairToken(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class ContributionConfirmed extends ethereum.Event {
  get params(): ContributionConfirmed__Params {
    return new ContributionConfirmed__Params(this);
  }
}

export class ContributionConfirmed__Params {
  _event: ContributionConfirmed;

  constructor(event: ContributionConfirmed) {
    this._event = event;
  }

  get participant(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get contributionAmount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class PairClaimedConfirmed extends ethereum.Event {
  get params(): PairClaimedConfirmed__Params {
    return new PairClaimedConfirmed__Params(this);
  }
}

export class PairClaimedConfirmed__Params {
  _event: PairClaimedConfirmed;

  constructor(event: PairClaimedConfirmed) {
    this._event = event;
  }

  get participant(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get pairTokenClaimed(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class RemovalConfirmed extends ethereum.Event {
  get params(): RemovalConfirmed__Params {
    return new RemovalConfirmed__Params(this);
  }
}

export class RemovalConfirmed__Params {
  _event: RemovalConfirmed;

  constructor(event: RemovalConfirmed) {
    this._event = event;
  }

  get participant(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get removalAmount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class TokenClaimedConfirmed extends ethereum.Event {
  get params(): TokenClaimedConfirmed__Params {
    return new TokenClaimedConfirmed__Params(this);
  }
}

export class TokenClaimedConfirmed__Params {
  _event: TokenClaimedConfirmed;

  constructor(event: TokenClaimedConfirmed) {
    this._event = event;
  }

  get participant(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get tokenClaimed(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class CommunityIDO__CheckClaimInfoResultValue0Struct extends ethereum.Tuple {
  get claimId(): BigInt {
    return this[0].toBigInt();
  }

  get amountToken(): BigInt {
    return this[1].toBigInt();
  }

  get amountPairToken(): BigInt {
    return this[2].toBigInt();
  }

  get date(): BigInt {
    return this[3].toBigInt();
  }
}

export class CommunityIDO__CheckParticipantInfoResultValue0Struct extends ethereum.Tuple {
  get participant(): Address {
    return this[0].toAddress();
  }

  get contributionAmount(): BigInt {
    return this[1].toBigInt();
  }

  get tokensWithdrawn(): boolean {
    return this[2].toBoolean();
  }

  get claimId(): BigInt {
    return this[3].toBigInt();
  }
}

export class CommunityIDO extends ethereum.SmartContract {
  static bind(address: Address): CommunityIDO {
    return new CommunityIDO("CommunityIDO", address);
  }

  CheckClaimInfo(
    claimNumber: BigInt
  ): CommunityIDO__CheckClaimInfoResultValue0Struct {
    let result = super.call(
      "CheckClaimInfo",
      "CheckClaimInfo(uint32):((uint32,uint256,uint256,uint256))",
      [ethereum.Value.fromUnsignedBigInt(claimNumber)]
    );

    return changetype<CommunityIDO__CheckClaimInfoResultValue0Struct>(
      result[0].toTuple()
    );
  }

  try_CheckClaimInfo(
    claimNumber: BigInt
  ): ethereum.CallResult<CommunityIDO__CheckClaimInfoResultValue0Struct> {
    let result = super.tryCall(
      "CheckClaimInfo",
      "CheckClaimInfo(uint32):((uint32,uint256,uint256,uint256))",
      [ethereum.Value.fromUnsignedBigInt(claimNumber)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<CommunityIDO__CheckClaimInfoResultValue0Struct>(
        value[0].toTuple()
      )
    );
  }

  CheckParticipantInfo(
    account: Address
  ): CommunityIDO__CheckParticipantInfoResultValue0Struct {
    let result = super.call(
      "CheckParticipantInfo",
      "CheckParticipantInfo(address):((address,uint256,bool,uint32))",
      [ethereum.Value.fromAddress(account)]
    );

    return changetype<CommunityIDO__CheckParticipantInfoResultValue0Struct>(
      result[0].toTuple()
    );
  }

  try_CheckParticipantInfo(
    account: Address
  ): ethereum.CallResult<CommunityIDO__CheckParticipantInfoResultValue0Struct> {
    let result = super.tryCall(
      "CheckParticipantInfo",
      "CheckParticipantInfo(address):((address,uint256,bool,uint32))",
      [ethereum.Value.fromAddress(account)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<CommunityIDO__CheckParticipantInfoResultValue0Struct>(
        value[0].toTuple()
      )
    );
  }

  abortedIDO(): boolean {
    let result = super.call("abortedIDO", "abortedIDO():(bool)", []);

    return result[0].toBoolean();
  }

  try_abortedIDO(): ethereum.CallResult<boolean> {
    let result = super.tryCall("abortedIDO", "abortedIDO():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  availableContribution(): BigInt {
    let result = super.call(
      "availableContribution",
      "availableContribution():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_availableContribution(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "availableContribution",
      "availableContribution():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  claimIdDev(): BigInt {
    let result = super.call("claimIdDev", "claimIdDev():(uint32)", []);

    return result[0].toBigInt();
  }

  try_claimIdDev(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("claimIdDev", "claimIdDev():(uint32)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  claimLatency(): BigInt {
    let result = super.call("claimLatency", "claimLatency():(uint256)", []);

    return result[0].toBigInt();
  }

  try_claimLatency(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("claimLatency", "claimLatency():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  contTokenAdd(): Address {
    let result = super.call("contTokenAdd", "contTokenAdd():(address)", []);

    return result[0].toAddress();
  }

  try_contTokenAdd(): ethereum.CallResult<Address> {
    let result = super.tryCall("contTokenAdd", "contTokenAdd():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  contractClaimId(): BigInt {
    let result = super.call(
      "contractClaimId",
      "contractClaimId():(uint32)",
      []
    );

    return result[0].toBigInt();
  }

  try_contractClaimId(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "contractClaimId",
      "contractClaimId():(uint32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  contributionBalance(): BigInt {
    let result = super.call(
      "contributionBalance",
      "contributionBalance():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_contributionBalance(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "contributionBalance",
      "contributionBalance():(uint256)",
      []
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

  getDeployment(): boolean {
    let result = super.call("getDeployment", "getDeployment():(bool)", []);

    return result[0].toBoolean();
  }

  try_getDeployment(): ethereum.CallResult<boolean> {
    let result = super.tryCall("getDeployment", "getDeployment():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  goalSuccess(): BigInt {
    let result = super.call("goalSuccess", "goalSuccess():(uint256)", []);

    return result[0].toBigInt();
  }

  try_goalSuccess(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("goalSuccess", "goalSuccess():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  initialLiquidityToken(): BigInt {
    let result = super.call(
      "initialLiquidityToken",
      "initialLiquidityToken():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_initialLiquidityToken(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "initialLiquidityToken",
      "initialLiquidityToken():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
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

  liquidityDeployed(): boolean {
    let result = super.call(
      "liquidityDeployed",
      "liquidityDeployed():(bool)",
      []
    );

    return result[0].toBoolean();
  }

  try_liquidityDeployed(): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "liquidityDeployed",
      "liquidityDeployed():(bool)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  liquidityPairCreated(): boolean {
    let result = super.call(
      "liquidityPairCreated",
      "liquidityPairCreated():(bool)",
      []
    );

    return result[0].toBoolean();
  }

  try_liquidityPairCreated(): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "liquidityPairCreated",
      "liquidityPairCreated():(bool)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  liquidityPoolCreated(): boolean {
    let result = super.call(
      "liquidityPoolCreated",
      "liquidityPoolCreated():(bool)",
      []
    );

    return result[0].toBoolean();
  }

  try_liquidityPoolCreated(): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "liquidityPoolCreated",
      "liquidityPoolCreated():(bool)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  maxPurchasePerAddress(): BigInt {
    let result = super.call(
      "maxPurchasePerAddress",
      "maxPurchasePerAddress():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_maxPurchasePerAddress(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "maxPurchasePerAddress",
      "maxPurchasePerAddress():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  pairAdd(): Address {
    let result = super.call("pairAdd", "pairAdd():(address)", []);

    return result[0].toAddress();
  }

  try_pairAdd(): ethereum.CallResult<Address> {
    let result = super.tryCall("pairAdd", "pairAdd():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  pairTokenToDistribute(): BigInt {
    let result = super.call(
      "pairTokenToDistribute",
      "pairTokenToDistribute():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_pairTokenToDistribute(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "pairTokenToDistribute",
      "pairTokenToDistribute():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  pauseIDO(): boolean {
    let result = super.call("pauseIDO", "pauseIDO():(bool)", []);

    return result[0].toBoolean();
  }

  try_pauseIDO(): ethereum.CallResult<boolean> {
    let result = super.tryCall("pauseIDO", "pauseIDO():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  remainingOnDate(): BigInt {
    let result = super.call(
      "remainingOnDate",
      "remainingOnDate():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_remainingOnDate(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "remainingOnDate",
      "remainingOnDate():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  remainingOnLocked(): BigInt {
    let result = super.call(
      "remainingOnLocked",
      "remainingOnLocked():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_remainingOnLocked(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "remainingOnLocked",
      "remainingOnLocked():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  successIDO(): boolean {
    let result = super.call("successIDO", "successIDO():(bool)", []);

    return result[0].toBoolean();
  }

  try_successIDO(): ethereum.CallResult<boolean> {
    let result = super.tryCall("successIDO", "successIDO():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  swapFactoryAdd(): Address {
    let result = super.call("swapFactoryAdd", "swapFactoryAdd():(address)", []);

    return result[0].toAddress();
  }

  try_swapFactoryAdd(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "swapFactoryAdd",
      "swapFactoryAdd():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  swapRouterAdd(): Address {
    let result = super.call("swapRouterAdd", "swapRouterAdd():(address)", []);

    return result[0].toAddress();
  }

  try_swapRouterAdd(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "swapRouterAdd",
      "swapRouterAdd():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  timeBeforeClaim(): BigInt {
    let result = super.call(
      "timeBeforeClaim",
      "timeBeforeClaim():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_timeBeforeClaim(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "timeBeforeClaim",
      "timeBeforeClaim():(uint256)",
      []
    );
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

  tokenLocked(): BigInt {
    let result = super.call("tokenLocked", "tokenLocked():(uint256)", []);

    return result[0].toBigInt();
  }

  try_tokenLocked(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("tokenLocked", "tokenLocked():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  tokenProvided(): BigInt {
    let result = super.call("tokenProvided", "tokenProvided():(uint256)", []);

    return result[0].toBigInt();
  }

  try_tokenProvided(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "tokenProvided",
      "tokenProvided():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  tokenSoldOnDate(): BigInt {
    let result = super.call(
      "tokenSoldOnDate",
      "tokenSoldOnDate():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_tokenSoldOnDate(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "tokenSoldOnDate",
      "tokenSoldOnDate():(uint256)",
      []
    );
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

  get _tokenProvided(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _tokenSoldOnDate(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _tokenLocked(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _goalSuccess(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get _maxPurchasePerAddress(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get _claimLatency(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }

  get _doscAddress(): Address {
    return this._call.inputValues[6].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class AbortIDOCall extends ethereum.Call {
  get inputs(): AbortIDOCall__Inputs {
    return new AbortIDOCall__Inputs(this);
  }

  get outputs(): AbortIDOCall__Outputs {
    return new AbortIDOCall__Outputs(this);
  }
}

export class AbortIDOCall__Inputs {
  _call: AbortIDOCall;

  constructor(call: AbortIDOCall) {
    this._call = call;
  }
}

export class AbortIDOCall__Outputs {
  _call: AbortIDOCall;

  constructor(call: AbortIDOCall) {
    this._call = call;
  }
}

export class ClaimTokensCall extends ethereum.Call {
  get inputs(): ClaimTokensCall__Inputs {
    return new ClaimTokensCall__Inputs(this);
  }

  get outputs(): ClaimTokensCall__Outputs {
    return new ClaimTokensCall__Outputs(this);
  }
}

export class ClaimTokensCall__Inputs {
  _call: ClaimTokensCall;

  constructor(call: ClaimTokensCall) {
    this._call = call;
  }
}

export class ClaimTokensCall__Outputs {
  _call: ClaimTokensCall;

  constructor(call: ClaimTokensCall) {
    this._call = call;
  }
}

export class ClaimTokensDevCall extends ethereum.Call {
  get inputs(): ClaimTokensDevCall__Inputs {
    return new ClaimTokensDevCall__Inputs(this);
  }

  get outputs(): ClaimTokensDevCall__Outputs {
    return new ClaimTokensDevCall__Outputs(this);
  }
}

export class ClaimTokensDevCall__Inputs {
  _call: ClaimTokensDevCall;

  constructor(call: ClaimTokensDevCall) {
    this._call = call;
  }
}

export class ClaimTokensDevCall__Outputs {
  _call: ClaimTokensDevCall;

  constructor(call: ClaimTokensDevCall) {
    this._call = call;
  }
}

export class CreateClaimCall extends ethereum.Call {
  get inputs(): CreateClaimCall__Inputs {
    return new CreateClaimCall__Inputs(this);
  }

  get outputs(): CreateClaimCall__Outputs {
    return new CreateClaimCall__Outputs(this);
  }
}

export class CreateClaimCall__Inputs {
  _call: CreateClaimCall;

  constructor(call: CreateClaimCall) {
    this._call = call;
  }
}

export class CreateClaimCall__Outputs {
  _call: CreateClaimCall;

  constructor(call: CreateClaimCall) {
    this._call = call;
  }
}

export class CreateLiquidityPairCall extends ethereum.Call {
  get inputs(): CreateLiquidityPairCall__Inputs {
    return new CreateLiquidityPairCall__Inputs(this);
  }

  get outputs(): CreateLiquidityPairCall__Outputs {
    return new CreateLiquidityPairCall__Outputs(this);
  }
}

export class CreateLiquidityPairCall__Inputs {
  _call: CreateLiquidityPairCall;

  constructor(call: CreateLiquidityPairCall) {
    this._call = call;
  }
}

export class CreateLiquidityPairCall__Outputs {
  _call: CreateLiquidityPairCall;

  constructor(call: CreateLiquidityPairCall) {
    this._call = call;
  }
}

export class CreateLiquidityPoolCall extends ethereum.Call {
  get inputs(): CreateLiquidityPoolCall__Inputs {
    return new CreateLiquidityPoolCall__Inputs(this);
  }

  get outputs(): CreateLiquidityPoolCall__Outputs {
    return new CreateLiquidityPoolCall__Outputs(this);
  }
}

export class CreateLiquidityPoolCall__Inputs {
  _call: CreateLiquidityPoolCall;

  constructor(call: CreateLiquidityPoolCall) {
    this._call = call;
  }
}

export class CreateLiquidityPoolCall__Outputs {
  _call: CreateLiquidityPoolCall;

  constructor(call: CreateLiquidityPoolCall) {
    this._call = call;
  }
}

export class ExitCIDOCall extends ethereum.Call {
  get inputs(): ExitCIDOCall__Inputs {
    return new ExitCIDOCall__Inputs(this);
  }

  get outputs(): ExitCIDOCall__Outputs {
    return new ExitCIDOCall__Outputs(this);
  }
}

export class ExitCIDOCall__Inputs {
  _call: ExitCIDOCall;

  constructor(call: ExitCIDOCall) {
    this._call = call;
  }
}

export class ExitCIDOCall__Outputs {
  _call: ExitCIDOCall;

  constructor(call: ExitCIDOCall) {
    this._call = call;
  }
}

export class InitializeLPTokenCall extends ethereum.Call {
  get inputs(): InitializeLPTokenCall__Inputs {
    return new InitializeLPTokenCall__Inputs(this);
  }

  get outputs(): InitializeLPTokenCall__Outputs {
    return new InitializeLPTokenCall__Outputs(this);
  }
}

export class InitializeLPTokenCall__Inputs {
  _call: InitializeLPTokenCall;

  constructor(call: InitializeLPTokenCall) {
    this._call = call;
  }

  get toRoundUp(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class InitializeLPTokenCall__Outputs {
  _call: InitializeLPTokenCall;

  constructor(call: InitializeLPTokenCall) {
    this._call = call;
  }
}

export class ParticipateCall extends ethereum.Call {
  get inputs(): ParticipateCall__Inputs {
    return new ParticipateCall__Inputs(this);
  }

  get outputs(): ParticipateCall__Outputs {
    return new ParticipateCall__Outputs(this);
  }
}

export class ParticipateCall__Inputs {
  _call: ParticipateCall;

  constructor(call: ParticipateCall) {
    this._call = call;
  }

  get amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class ParticipateCall__Outputs {
  _call: ParticipateCall;

  constructor(call: ParticipateCall) {
    this._call = call;
  }
}

export class RemoveParticipationCall extends ethereum.Call {
  get inputs(): RemoveParticipationCall__Inputs {
    return new RemoveParticipationCall__Inputs(this);
  }

  get outputs(): RemoveParticipationCall__Outputs {
    return new RemoveParticipationCall__Outputs(this);
  }
}

export class RemoveParticipationCall__Inputs {
  _call: RemoveParticipationCall;

  constructor(call: RemoveParticipationCall) {
    this._call = call;
  }

  get amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class RemoveParticipationCall__Outputs {
  _call: RemoveParticipationCall;

  constructor(call: RemoveParticipationCall) {
    this._call = call;
  }
}

export class SendBackAnyTokenCall extends ethereum.Call {
  get inputs(): SendBackAnyTokenCall__Inputs {
    return new SendBackAnyTokenCall__Inputs(this);
  }

  get outputs(): SendBackAnyTokenCall__Outputs {
    return new SendBackAnyTokenCall__Outputs(this);
  }
}

export class SendBackAnyTokenCall__Inputs {
  _call: SendBackAnyTokenCall;

  constructor(call: SendBackAnyTokenCall) {
    this._call = call;
  }

  get wrongTokenAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get recipient(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class SendBackAnyTokenCall__Outputs {
  _call: SendBackAnyTokenCall;

  constructor(call: SendBackAnyTokenCall) {
    this._call = call;
  }
}

export class SendBackCoinCall extends ethereum.Call {
  get inputs(): SendBackCoinCall__Inputs {
    return new SendBackCoinCall__Inputs(this);
  }

  get outputs(): SendBackCoinCall__Outputs {
    return new SendBackCoinCall__Outputs(this);
  }
}

export class SendBackCoinCall__Inputs {
  _call: SendBackCoinCall;

  constructor(call: SendBackCoinCall) {
    this._call = call;
  }

  get recipient(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class SendBackCoinCall__Outputs {
  _call: SendBackCoinCall;

  constructor(call: SendBackCoinCall) {
    this._call = call;
  }
}

export class SetContractAddressesCall extends ethereum.Call {
  get inputs(): SetContractAddressesCall__Inputs {
    return new SetContractAddressesCall__Inputs(this);
  }

  get outputs(): SetContractAddressesCall__Outputs {
    return new SetContractAddressesCall__Outputs(this);
  }
}

export class SetContractAddressesCall__Inputs {
  _call: SetContractAddressesCall;

  constructor(call: SetContractAddressesCall) {
    this._call = call;
  }

  get tokenAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get contTokenAddress(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get swapFactoryAddress(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get swapRouterAddress(): Address {
    return this._call.inputValues[3].value.toAddress();
  }
}

export class SetContractAddressesCall__Outputs {
  _call: SetContractAddressesCall;

  constructor(call: SetContractAddressesCall) {
    this._call = call;
  }
}

export class StopIDOCall extends ethereum.Call {
  get inputs(): StopIDOCall__Inputs {
    return new StopIDOCall__Inputs(this);
  }

  get outputs(): StopIDOCall__Outputs {
    return new StopIDOCall__Outputs(this);
  }
}

export class StopIDOCall__Inputs {
  _call: StopIDOCall;

  constructor(call: StopIDOCall) {
    this._call = call;
  }
}

export class StopIDOCall__Outputs {
  _call: StopIDOCall;

  constructor(call: StopIDOCall) {
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

export class WithdrawTokenCall extends ethereum.Call {
  get inputs(): WithdrawTokenCall__Inputs {
    return new WithdrawTokenCall__Inputs(this);
  }

  get outputs(): WithdrawTokenCall__Outputs {
    return new WithdrawTokenCall__Outputs(this);
  }
}

export class WithdrawTokenCall__Inputs {
  _call: WithdrawTokenCall;

  constructor(call: WithdrawTokenCall) {
    this._call = call;
  }
}

export class WithdrawTokenCall__Outputs {
  _call: WithdrawTokenCall;

  constructor(call: WithdrawTokenCall) {
    this._call = call;
  }
}