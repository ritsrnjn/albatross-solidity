
import { PushAPI } from '@pushprotocol/restapi';
import { ethers } from 'ethers';

const signer = ethers.Wallet.createRandom();

const userRandom = await PushAPI.initialize(signer, { env: 'staging' });


// send a notification when user carbon score has breaced a certain threshold
const apiResponse = await userRandom.channel.send(['*'], { 
  notification: {
    title: 'Carbon score breached!',
    body: 'Your carbon score has breached the threshold of 1000. Please take action to reduce your carbon footprint.',
  }
});