import './HowToBuy.scss';
import HowToBuyEl from './HowToBuyEl/HowToBuyEl';
export default () => {

    const elements = [
        {
            text: 'SET UP A SOLANA WALLET: ENSURE YOU HAVE A SOLANA-COMPATIBLE WALLET LIKE SOLLET OR PHANTOM.'
        },
        {
            text: 'ACCESS A DECENTRALIZED EXCHANGE (DEX): VISIT A REPUTABLE SOLANA-BASED DEX LIKE SERUM OR RAYDIUM.'
        },
        {
            text: 'CONNECT YOUR WALLET: CONNECT YOUR SOLANA WALLET TO THE DEX PLATFORM.'
        },
        {
            text: 'SWAP FOR $JAWS: USE YOUR SOL OR OTHER SUPPORTED TOKENS TO SWAP FOR $JAWS.'
        },
        {
            text: 'SECURE YOUR TOKENS: ONCE PURCHASED, TRANSFER YOUR $JAWS TOKENS TO YOUR SECURE SOLANA WALLET.'
        }
    ]

    return (
        <div className='HowToBuy container'>
            {
                elements.map((el, index) => (
                    <HowToBuyEl text={el.text} index={index + 1} key={`HowToBuyEl_${index}`} />
                ))
            }
            <div className='HowToBuy_decor free_img'>
                <div className='HowToBuy_decor_text free_img'>
                    <img src="/img/decorLast.png" alt="" />
                </div>
            </div>
        </div>
    )
}