import LinkWithBorder from '../LinkWithBorder/LinkWithBorder';
import './AboutUs.scss';
export default () => {
    return (
        <div className='AboutUs'>
            <div className='AboutUs_content'>
                <div className='AboutUs_content_container'>
                    <div className='AboutUs_content_title'>
                        ABOUT US
                    </div>
                    <div className='AboutUs_content_text'>
                        <span className='AboutUs_content_text_el'>
                            $JAWS is an innovative social-fi brand tool on Solana, powered by Escape Labs. Unleash the power of Chat2Earn for epic rewards!
                        </span>
                        <span className='AboutUs_content_text_el AboutUs_content_text_el_2'>
                            At $JAWS we’re not just fishing around for success, - we’re making it real. Stay floating and never get sunk.
                        </span>
                    </div>
                </div>
                <div className='AboutUs_content_btn'>
                    <div className='AboutUs_content_btn_el'>
                        <LinkWithBorder title={'SCROLL DOWN'} img={'/img/scroll.svg'} />
                    </div>
                </div>
                <div className='AboutUs_content_decor free_img'>
                    <div className='AboutUs_content_decor_plusBot1 free_img'>
                        <img src="/img/plus.svg" alt="" />
                    </div>
                    <div className='AboutUs_content_decor_plusBot2 free_img'>
                        <img src="/img/plus.svg" alt="" />
                    </div>
                </div>
            </div>
            <div className='AboutUs_img free_img'>
                <img src="/img/sharkDecor.webp" alt="" />
            </div>
        </div>
    )
}