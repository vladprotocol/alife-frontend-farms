import addresses from 'config/constants/contracts'

const chainId = process.env.REACT_APP_CHAIN_ID

export const getCakeAddress = () => {
  return addresses.cake[chainId]
}
export const getLifeAddress = () => {
  return addresses.life[chainId]
}
export const getMasterChefAddress = () => {
  return addresses.masterChef[chainId]
}
export const getLifeMasterChefAddress = () => {
  return addresses.lifeMasterChef[chainId]
}
export const getMulticallAddress = () => {
  return addresses.mulltiCall[chainId]
}
export const getWbnbAddress = () => {
  return addresses.wbnb[chainId]
}
export const getLotteryAddress = () => {
  return addresses.lottery[chainId]
}
export const getLotteryTicketAddress = () => {
  return addresses.lotteryNFT[chainId]
}
export const getGiftNftAddress = (id: string | number) => {
  return addresses.giftNFT[id]
}
export const getNftLiteMarketPlaceAddress = (id: string | number) => {
  return addresses.nft_lite_market[id]
}
