import { Alchemy } from  'alchemy-sdk';
import 'dotenv/config'

const main = async () => {

    const settings = {
        apiKey: process.env.ALCHEMY_API_KEY,
        network: process.env.ALCHEMY_API_NETWORK,
    };

    const alchemy = new Alchemy(settings);
    console.log("starting...",settings)
    const nfts = await alchemy.nft.getNftsForOwner('0xC36053102a04E365867dB9554E83d60d6E305231').then(console.log);
    console.log("nfts",nfts)
}
main()