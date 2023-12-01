import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x7De132fa9996E3526fd7d5247C2cE15344C736e4'
);

export default instance;
