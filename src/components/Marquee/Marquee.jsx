import './Marquee.scss';
export default () => {

    const words = Array(30).fill('$jaws').join('\u00A0');

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
        </div>
    )
}