/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type { BaseContract, Interface } from "ethers";
import type { ContractRunner } from "ethers/providers";
import type { TypedEventFilter, TypedEvent, PromiseOrValue } from "./common.js";

export interface SushipairInterface extends Interface {}

export interface ApprovalEventObject {
  owner: string;
  spender: string;
  value: bigint;
}
export type ApprovalEvent = TypedEvent<
  [string, string, bigint],
  ApprovalEventObject
>;

export type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>;

export interface BurnEventObject {
  sender: string;
  amount0: bigint;
  amount1: bigint;
  to: string;
}
export type BurnEvent = TypedEvent<
  [string, bigint, bigint, string],
  BurnEventObject
>;

export type BurnEventFilter = TypedEventFilter<BurnEvent>;

export interface MintEventObject {
  sender: string;
  amount0: bigint;
  amount1: bigint;
}
export type MintEvent = TypedEvent<[string, bigint, bigint], MintEventObject>;

export type MintEventFilter = TypedEventFilter<MintEvent>;

export interface SwapEventObject {
  sender: string;
  amount0In: bigint;
  amount1In: bigint;
  amount0Out: bigint;
  amount1Out: bigint;
  to: string;
}
export type SwapEvent = TypedEvent<
  [string, bigint, bigint, bigint, bigint, string],
  SwapEventObject
>;

export type SwapEventFilter = TypedEventFilter<SwapEvent>;

export interface SyncEventObject {
  reserve0: bigint;
  reserve1: bigint;
}
export type SyncEvent = TypedEvent<[bigint, bigint], SyncEventObject>;

export type SyncEventFilter = TypedEventFilter<SyncEvent>;

export interface TransferEventObject {
  from: string;
  to: string;
  value: bigint;
}
export type TransferEvent = TypedEvent<
  [string, string, bigint],
  TransferEventObject
>;

export type TransferEventFilter = TypedEventFilter<TransferEvent>;

export interface Sushipair extends BaseContract {
  connect(runner: null | ContractRunner): this;

  interface: SushipairInterface;
}
