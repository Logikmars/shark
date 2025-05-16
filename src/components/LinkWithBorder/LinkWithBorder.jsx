import './LinkWithBorder.scss';
export default ({ title, img }) => {
    return (
        <div className='LinkWithBorder'>
            <div className='LinkWithBorder_decor_top free_img'>
                <div className='LinkWithBorder_decor_top_left free_img'>
                    <img src="/img/border.svg" alt="" />
                </div>
                <div className='LinkWithBorder_decor_top_right free_img'>
                    <img src="/img/border.svg" alt="" />
                </div>
            </div>
            <div className={`LinkWithBorder_content ${title && 'LinkWithBorder_content_text'}`}>
                {
                    img && <img src={img} alt="" />
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