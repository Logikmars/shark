import './LinkWithBorder.scss';
export default ({ title, img, addittional = '', gray, type}) => {
    return (
        <div className={`LinkWithBorder ${gray && 'LinkWithBorder_gray'}`}  onClick={() => {
            if (type === 'tg') {
                window.open('https://t.me/JawsCoinPortal', '_blank');
                } else if (type === 'twitter') {
                window.open('https://x.com/JawsSolCoin', '_blank');
                } else if (type === 'dex'){
                    window.open('https://dexscreener.com/', '_blank');
                }
            }}
        >
            <div className='LinkWithBorder_decor_top free_img'>
                <div className='LinkWithBorder_decor_top_left free_img'>
                    <img src="/img/border.svg" alt="" />
                </div>
                <div className='LinkWithBorder_decor_top_right free_img'>
                    <img src="/img/border.svg" alt="" />
                </div>
            </div>
            <div className={`LinkWithBorder_content ${title && 'LinkWithBorder_content_text'} `}>
                {
                    img && <img src={img} className={`LinkWithBorder_content_${addittional}`} alt="" />
                }
                {
                    title && title
                }
            </div>
            <div className='LinkWithBorder_decor_bottom free_img'>
                <div className='LinkWithBorder_decor_bottom_left free_img'>
                    <img src="/img/border.svg" alt="" />
                </div>
                <div className='LinkWithBorder_decor_bottom_right free_img'>
                    <img src="/img/border.svg" alt="" />
                </div>
            </div>
        </div>
    )
}