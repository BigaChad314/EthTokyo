/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  DeployContractOptions,
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomicfoundation/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "L2StorageForReputation",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.L2StorageForReputation__factory>;
    getContractFactory(
      name: "ReputationSystem",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ReputationSystem__factory>;

    getContractAt(
      name: "L2StorageForReputation",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.L2StorageForReputation>;
    getContractAt(
      name: "ReputationSystem",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.ReputationSystem>;

    deployContract(
      name: "L2StorageForReputation",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.L2StorageForReputation>;
    deployContract(
      name: "ReputationSystem",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ReputationSystem>;

    deployContract(
      name: "L2StorageForReputation",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.L2StorageForReputation>;
    deployContract(
      name: "ReputationSystem",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ReputationSystem>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
    deployContract(
      name: string,
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<ethers.Contract>;
    deployContract(
      name: string,
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<ethers.Contract>;
  }
}
