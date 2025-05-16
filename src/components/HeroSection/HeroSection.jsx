import LinkWithBorder from '../LinkWithBorder/LinkWithBorder';
import './HeroSection.scss';
export default () => {
    return (
    <div className='HeroSection contaier'>
        <div className='HeroSection_decor_topline free_img'></div>
        {/* <div className='HeroSection_decor_leftline free_img'></div> */}
        <div className='HeroSection_content'>
            <div className='HeroSection_content_decor_top free_img'>
                <img src="/img/plus.svg" alt="" />
                <img src="/img/plus.svg" alt="" />
            </div>
            <div className='HeroSection_content_items'>
                <div className='HeroSection_content_items_title'>
                    WELCOME!
                </div>
                <div className='HeroSection_content_items_description'>
                    Adipisci sunt autem et maxime omnis officiis dolores maiores voluptas. Voluptatem velit id et fugit quo. Eos expedita tempore eius excepturi. Officiis molestias qui esse sit est facere. Minus consequatur dolorum deleniti perspiciatis.
                </div>
                <div className='HeroSection_content_items_links'>
                    {
                        ['About us', 'Products', 'Tokenimics', 'Roadmap', 'How to buy', 'Socials'].map((el, index) => (
                            <a href="" key={`HeroSection_content_items_links_${index}`}>{el}</a>
                        ))
                    }
                </div>
            </div>
            <div className='HeroSection_content_decor_bottom free_img'>
                <img src="/img/plus.svg" alt="" />
                <img src="/img/plus.svg" alt="" />
            </div>
        </div>
        <div className='HeroSection_decor_topline free_img'></div>
        <div className='HeroSection_btn'>
            <div className='HeroSection_btn_content'>
                <LinkWithBorder title={'SCROLL DOWN'} img={'/img/scroll.svg'}/>
            </div>
            <div className='HeroSection_btn_decor free_img'>
                <img src="/img/plus.svg" alt="" />
                <img src="/img/plus.svg" alt="" />
            </div>
        </div>
        <div className='HeroSection_decor_topline free_img'></div>
    </div>
    )
}