import { Nft } from './types'

export const EpicNftFarm = '0x6a63AF63675D3c9D498DF43Aa163F9243E7b4646'
export const NFT = '0x3F7C7C24fFA2ceFfaACE11B39D5b8a575A4B0674'
export const AMOUNT_TO_CLAIM = '10'

const Nfts: Nft[] = [
  {
    name: 'Silver Pepes',
    metadata: '',
    description:
      "The count has had an epic existence sure, but it has not been without many attempts at his life. This artist's rendition pays homage to the time he was frozen in Carbonite ...oh wait, wrong story. Our bad, pretty slick tho right?",
    previewImage: 'preview-silver-pepe.jpg',
    originalImage: 'https://gateway.pinata.cloud/ipfs/QmaPP3CqB8iNcB9b9NCZVytNiaxZcJWt7Kk1vnHWwRL7hQ',
    fileType: 'mp4',
    blurImage: '',
    sortOrder: 0,
    nftId: 0,
    tokenAmount: 350,
    tokenSupply: 66,
    nftFarmContract: '0x3627Ca89675b42489aD39619A92dd0Ce24CA90bB',
    nftContract: '0xa521D5FA64D0aAdB4ee607BAb20142aA173e4392',
  },
  {
    name: 'Bank of Vladhalla',
    metadata: '',
    description:
      "They say when you leave this life you can't take it with you... Well, who's leaving? That's for mortals to worry about.",
    previewImage: 'preview-bank-of-vlad.png',
    originalImage: 'https://gateway.pinata.cloud/ipfs/Qma87NMJAu33nQuCRvoAK4MwP9CBwhGsLkQdTptM6uxoyp',
    fileType: 'mp4',
    blurImage: '',
    sortOrder: 1,
    nftId: 1,
    tokenAmount: 350,
    tokenSupply: 66,
    nftFarmContract: '0x3627Ca89675b42489aD39619A92dd0Ce24CA90bB',
    nftContract: '0xa521D5FA64D0aAdB4ee607BAb20142aA173e4392',
  },
  {
    name: 'Gates of Vladhalla',
    metadata: '',
    description:
      'Tales have been written of the select few who have made it this far. The  sheer majesty of these very gates would make the hairs on their arms stand on end. Only the immortal shall pass through - will you?',
    previewImage: 'preview-gate-of-vlad.jpg',
    originalImage: 'https://gateway.pinata.cloud/ipfs/QmW1az8XriRqdx2zXY7w71XFxXUEfH5hUsyZTzwGBe7gfh',
    fileType: 'png',
    blurImage: '',
    sortOrder: 2,
    nftId: 2,
    tokenAmount: 350,
    tokenSupply: 66,
    nftFarmContract: '0x3627Ca89675b42489aD39619A92dd0Ce24CA90bB',
    nftContract: '0xa521D5FA64D0aAdB4ee607BAb20142aA173e4392',
  },
]

export default Nfts
