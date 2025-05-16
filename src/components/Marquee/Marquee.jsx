import './Marquee.scss';
export default ({ text, decor }) => {

    const words = Array(30).fill(`${text}`).join('\u00A0');

    return (
        <div className='Marquee'>
            <div className="Marquee_inner">
                <span>{words}</span>
            </div>
            <div className='Marquee_decor free_img'>
                <img src="/img/decor.png" alt="" className='Marquee_decor_img2'/>
                <img src="/img/decor.png" alt="" />
            </div>
            <div className="Marquee_inner2">
                <span>{words}</span>
            </div>
            {
                decor && 
                <div className='Marquee_decor2 free_img'>
                    <div className='Marquee_decor2_fish free_img'>
                        <img src="/img/fishSup.webp" alt="" />
                    </div>
                </div>
            }
        </div>
    )
}