/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { LogParams } from "ethers/providers";
import {
  LogDeployEventObject,
  LogDepositEventObject,
  LogFlashLoanEventObject,
  LogRegisterProtocolEventObject,
  LogSetMasterContractApprovalEventObject,
  LogStrategyDivestEventObject,
  LogStrategyInvestEventObject,
  LogStrategyLossEventObject,
  LogStrategyProfitEventObject,
  LogStrategyQueuedEventObject,
  LogStrategySetEventObject,
  LogStrategyTargetPercentageEventObject,
  LogTransferEventObject,
  LogWhiteListMasterContractEventObject,
  LogWithdrawEventObject,
  OwnershipTransferredEventObject,
} from "./BentoBoxV1.js";
import { getBentoBoxV1Contract } from "./bentoboxv1-processor.js";
const mockField = {
  blockHash:
    "0x0000000000000000000000000000000000000000000000000000000000000000",
  blockNumber: 0,
  logIndex: 0,
  removed: false,
  transactionHash:
    "0x0000000000000000000000000000000000000000000000000000000000000000",
  transactionIndex: 0,
};

export function mockLogDeployLog(
  contractAddress: string,
  event: LogDeployEventObject
): LogParams {
  const contract = getBentoBoxV1Contract(1, contractAddress);
  const encodedLog = contract.rawContract.interface.encodeEventLog(
    "LogDeploy(address,bytes,address)",
    [event.masterContract, event.data, event.cloneAddress]
  );
  return {
    ...mockField,
    index: 0,
    address: contractAddress,
    data: encodedLog.data,
    topics: encodedLog.topics,
  };
}

export function mockLogDepositLog(
  contractAddress: string,
  event: LogDepositEventObject
): LogParams {
  const contract = getBentoBoxV1Contract(1, contractAddress);
  const encodedLog = contract.rawContract.interface.encodeEventLog(
    "LogDeposit(address,address,address,uint256,uint256)",
    [event.token, event.from, event.to, event.amount, event.share]
  );
  return {
    ...mockField,
    index: 0,
    address: contractAddress,
    data: encodedLog.data,
    topics: encodedLog.topics,
  };
}

export function mockLogFlashLoanLog(
  contractAddress: string,
  event: LogFlashLoanEventObject
): LogParams {
  const contract = getBentoBoxV1Contract(1, contractAddress);
  const encodedLog = contract.rawContract.interface.encodeEventLog(
    "LogFlashLoan(address,address,uint256,uint256,address)",
    [event.borrower, event.token, event.amount, event.feeAmount, event.receiver]
  );
  return {
    ...mockField,
    index: 0,
    address: contractAddress,
    data: encodedLog.data,
    topics: encodedLog.topics,
  };
}

export function mockLogRegisterProtocolLog(
  contractAddress: string,
  event: LogRegisterProtocolEventObject
): LogParams {
  const contract = getBentoBoxV1Contract(1, contractAddress);
  const encodedLog = contract.rawContract.interface.encodeEventLog(
    "LogRegisterProtocol(address)",
    [event.protocol]
  );
  return {
    ...mockField,
    index: 0,
    address: contractAddress,
    data: encodedLog.data,
    topics: encodedLog.topics,
  };
}

export function mockLogSetMasterContractApprovalLog(
  contractAddress: string,
  event: LogSetMasterContractApprovalEventObject
): LogParams {
  const contract = getBentoBoxV1Contract(1, contractAddress);
  const encodedLog = contract.rawContract.interface.encodeEventLog(
    "LogSetMasterContractApproval(address,address,bool)",
    [event.masterContract, event.user, event.approved]
  );
  return {
    ...mockField,
    index: 0,
    address: contractAddress,
    data: encodedLog.data,
    topics: encodedLog.topics,
  };
}

export function mockLogStrategyDivestLog(
  contractAddress: string,
  event: LogStrategyDivestEventObject
): LogParams {
  const contract = getBentoBoxV1Contract(1, contractAddress);
  const encodedLog = contract.rawContract.interface.encodeEventLog(
    "LogStrategyDivest(address,uint256)",
    [event.token, event.amount]
  );
  return {
    ...mockField,
    index: 0,
    address: contractAddress,
    data: encodedLog.data,
    topics: encodedLog.topics,
  };
}

export function mockLogStrategyInvestLog(
  contractAddress: string,
  event: LogStrategyInvestEventObject
): LogParams {
  const contract = getBentoBoxV1Contract(1, contractAddress);
  const encodedLog = contract.rawContract.interface.encodeEventLog(
    "LogStrategyInvest(address,uint256)",
    [event.token, event.amount]
  );
  return {
    ...mockField,
    index: 0,
    address: contractAddress,
    data: encodedLog.data,
    topics: encodedLog.topics,
  };
}

export function mockLogStrategyLossLog(
  contractAddress: string,
  event: LogStrategyLossEventObject
): LogParams {
  const contract = getBentoBoxV1Contract(1, contractAddress);
  const encodedLog = contract.rawContract.interface.encodeEventLog(
    "LogStrategyLoss(address,uint256)",
    [event.token, event.amount]
  );
  return {
    ...mockField,
    index: 0,
    address: contractAddress,
    data: encodedLog.data,
    topics: encodedLog.topics,
  };
}

export function mockLogStrategyProfitLog(
  contractAddress: string,
  event: LogStrategyProfitEventObject
): LogParams {
  const contract = getBentoBoxV1Contract(1, contractAddress);
  const encodedLog = contract.rawContract.interface.encodeEventLog(
    "LogStrategyProfit(address,uint256)",
    [event.token, event.amount]
  );
  return {
    ...mockField,
    index: 0,
    address: contractAddress,
    data: encodedLog.data,
    topics: encodedLog.topics,
  };
}

export function mockLogStrategyQueuedLog(
  contractAddress: string,
  event: LogStrategyQueuedEventObject
): LogParams {
  const contract = getBentoBoxV1Contract(1, contractAddress);
  const encodedLog = contract.rawContract.interface.encodeEventLog(
    "LogStrategyQueued(address,address)",
    [event.token, event.strategy]
  );
  return {
    ...mockField,
    index: 0,
    address: contractAddress,
    data: encodedLog.data,
    topics: encodedLog.topics,
  };
}

export function mockLogStrategySetLog(
  contractAddress: string,
  event: LogStrategySetEventObject
): LogParams {
  const contract = getBentoBoxV1Contract(1, contractAddress);
  const encodedLog = contract.rawContract.interface.encodeEventLog(
    "LogStrategySet(address,address)",
    [event.token, event.strategy]
  );
  return {
    ...mockField,
    index: 0,
    address: contractAddress,
    data: encodedLog.data,
    topics: encodedLog.topics,
  };
}

export function mockLogStrategyTargetPercentageLog(
  contractAddress: string,
  event: LogStrategyTargetPercentageEventObject
): LogParams {
  const contract = getBentoBoxV1Contract(1, contractAddress);
  const encodedLog = contract.rawContract.interface.encodeEventLog(
    "LogStrategyTargetPercentage(address,uint256)",
    [event.token, event.targetPercentage]
  );
  return {
    ...mockField,
    index: 0,
    address: contractAddress,
    data: encodedLog.data,
    topics: encodedLog.topics,
  };
}

export function mockLogTransferLog(
  contractAddress: string,
  event: LogTransferEventObject
): LogParams {
  const contract = getBentoBoxV1Contract(1, contractAddress);
  const encodedLog = contract.rawContract.interface.encodeEventLog(
    "LogTransfer(address,address,address,uint256)",
    [event.token, event.from, event.to, event.share]
  );
  return {
    ...mockField,
    index: 0,
    address: contractAddress,
    data: encodedLog.data,
    topics: encodedLog.topics,
  };
}

export function mockLogWhiteListMasterContractLog(
  contractAddress: string,
  event: LogWhiteListMasterContractEventObject
): LogParams {
  const contract = getBentoBoxV1Contract(1, contractAddress);
  const encodedLog = contract.rawContract.interface.encodeEventLog(
    "LogWhiteListMasterContract(address,bool)",
    [event.masterContract, event.approved]
  );
  return {
    ...mockField,
    index: 0,
    address: contractAddress,
    data: encodedLog.data,
    topics: encodedLog.topics,
  };
}

export function mockLogWithdrawLog(
  contractAddress: string,
  event: LogWithdrawEventObject
): LogParams {
  const contract = getBentoBoxV1Contract(1, contractAddress);
  const encodedLog = contract.rawContract.interface.encodeEventLog(
    "LogWithdraw(address,address,address,uint256,uint256)",
    [event.token, event.from, event.to, event.amount, event.share]
  );
  return {
    ...mockField,
    index: 0,
    address: contractAddress,
    data: encodedLog.data,
    topics: encodedLog.topics,
  };
}

export function mockOwnershipTransferredLog(
  contractAddress: string,
  event: OwnershipTransferredEventObject
): LogParams {
  const contract = getBentoBoxV1Contract(1, contractAddress);
  const encodedLog = contract.rawContract.interface.encodeEventLog(
    "OwnershipTransferred(address,address)",
    [event.previousOwner, event.newOwner]
  );
  return {
    ...mockField,
    index: 0,
    address: contractAddress,
    data: encodedLog.data,
    topics: encodedLog.topics,
  };
}