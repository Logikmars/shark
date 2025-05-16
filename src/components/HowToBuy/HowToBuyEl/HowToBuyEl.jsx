import './HowToBuyEl.scss';
export default ({ index, text }) => {
    return (
        <div className='HowToBuyEl'>
            <div className='HowToBuyEl_decor free_img'>
                <div className='HowToBuyEl_decor_topStar free_img'>
                    <div className='HowToBuyEl_decor_topStar_topEl'>
                        <img src="/img/plus.svg" alt="" />
                        {/* <div className='HowToBuyEl_decor_topStar_topEl_line'></div> */}
                        <div className='HowToBuyEl_decor_topStar_topEl_vert free_img'>
                            <div className={`HowToBuyEl_decor_topStar_topEl_vert_inner ${index > 4 && 'HowToBuyEl_decor_topStar_topEl_vert_inner_last'}`}></div>
                        </div>
                    </div>
                    
                    <div className={`HowToBuyEl_decor_topLine free_img ${index > 4 && 'HowToBuyEl_decor_topLine_last'}`}></div>
                    <div className='HowToBuyEl_decor_topStar_topEl'>
                        {
                            index > 1 ? <img src="/img/plus.svg" alt="" /> : <img src="/img/plusGray.svg" alt="" />
                        }
                        <div className='HowToBuyEl_decor_topStar_topEl_vert free_img'>
                            <div className={`HowToBuyEl_decor_topStar_topEl_vert_inner ${index > 4 && 'HowToBuyEl_decor_topStar_topEl_vert_inner_last'}`}></div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className='HowToBuyEl_content'>
                <div className='HowToBuyEl_content_step'>0{index}</div>
                <div className='HowToBuyEl_content_description'>{text}</div>
            </div>
            <div className='HowToBuyEl_decor free_img'>
                <div className='HowToBuyEl_decor_topStar free_img'>
                    {
                        index > 2 ? <img src="/img/plus.svg" alt="" /> : <img src="/img/plusGray.svg" alt="" />
                    }
                    
                    <div className={`HowToBuyEl_decor_topLine free_img ${index > 4 && 'HowToBuyEl_decor_topLine_last'}`}></div>
                    {
                        index > 3 ? <img src="/img/plus.svg" alt="" /> : <img src="/img/plusGray.svg" alt="" />
                    }
                    
                </div>
            </div>
        </div>
    )
}