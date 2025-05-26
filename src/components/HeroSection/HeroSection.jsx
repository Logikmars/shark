import LinkWithBorder from '../LinkWithBorder/LinkWithBorder';
import './HeroSection.scss';
export default () => {
    return (
        <div className='HeroSection contaier'>
            <div className='HeroSection_decor_topline free_img'></div>
            <div className='HeroSection_decor_blurLeft free_img'>
                <img src="/img/decor.webp" alt="" className='HeroSection_decor_blurLeft_img2' />
                <img src="/img/decor.webp" alt="" />
            </div>
            <div className='HeroSection_content'>
                <div className='HeroSection_content_decor_top free_img'>
                    <div className='HeroSection_content_decor_top_el'>
                        <img src="/img/plus.svg" alt="" />
                        <div className='HeroSection_content_decor_top_vert free_img'>
                            <div className='HeroSection_content_decor_top_vert_inner'></div>
                        </div>
                    </div>
                    <div className='HeroSection_content_decor_top_el'>
                        <img src="/img/plus.svg" alt="" />
                        <div className='HeroSection_content_decor_top_vert free_img'>
                            <div className='HeroSection_content_decor_top_vert_inner'></div>
                        </div>
                    </div>
                </div>
                <div className='HeroSection_content_items'>
                    <div className='HeroSection_content_items_title'>
                        WELCOME!
                    </div>
                    <div className='HeroSection_content_items_description'>
                        {/* Adipisci sunt autem et maxime omnis officiis dolores maiores voluptas. Voluptatem velit id et fugit quo. Eos expedita tempore eius excepturi. Officiis molestias qui esse sit est facere. Minus consequatur dolorum deleniti perspiciatis. */}
                        Meet the Solana's Ocean Greatest Predator - JAWS, the First Chat2Earn TG solution for your favorite memecoins!
                    </div>
                    <div className='HeroSection_content_items_links'>
                        {

                            [
                                {
                                    title: 'About us',
                                    id: 'about'
                                },
                                {
                                    title: 'Products',
                                    id: 'products'
                                },
                                {
                                    title: 'Tokenomics',
                                    id: 'tokenomics'
                                },
                                {
                                    title: 'How to buy',
                                    id: 'htb'
                                },
                                {
                                    title: 'Socials',
                                    id: 'social'
                                }
                            ].map((el, index) => (
                                <a href={`#${el.id}`} key={`HeroSection_content_items_links_${index}`}>{el.title}</a>
                            ))
                        }
                    </div>
                </div>
                <div className='HeroSection_content_decor_bottom free_img'>
                    <img src="/img/plus.svg" alt="" />
                    <img src="/img/plus.svg" alt="" />
                </div>
            </div>
            <div className='HeroSection_decor_blurLeft HeroSection_decor_blurLeft_sec free_img'>
                <img src="/img/decor.webp" alt="" className='HeroSection_decor_blurLeft_img2 HeroSection_decor_blurLeft_sec_img2 ' />
                <img src="/img/decor.webp" alt="" />
            </div>
            <div className='HeroSection_decor_topline free_img'></div>
            <div className='HeroSection_btn'>
                <div className='HeroSection_btn_content'>
                    <LinkWithBorder title={'SCROLL DOWN'} addittional='SCROLL' img={'/img/scroll.svg'} />
                </div>
                <div className='HeroSection_btn_decor free_img'>
                    <img src="/img/plus.svg" alt="" />
                    <img src="/img/plus.svg" alt="" />
                </div>
            </div>
            <div className='HeroSection_decor_topline free_img'></div>
            <div className='HeroSection_decor_blurLeft free_img'>
                <img src="/img/decor.webp" alt="" className='HeroSection_decor_blurLeft_img2 ' />
                <img src="/img/decor.webp" alt="" />
            </div>
        </div>
    )
}