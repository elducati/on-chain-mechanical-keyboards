import { ethers } from "ethers";

import abi from "./Keyboards.json"

const contractAddress = '0x0f76246c5CdF52A4C252e855fa0929AcE0C68BB9';
const contractABI = abi.abi;

export default function getKeyboardsContract(ethereum) {
  if(ethereum) {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    return new ethers.Contract(contractAddress, contractABI, signer);
  } else {
    return undefined;
  }
}
