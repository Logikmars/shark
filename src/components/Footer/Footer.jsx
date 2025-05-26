import LinkWithBorder from '../LinkWithBorder/LinkWithBorder';
import './Footer.scss';
export default () => {

    const els = [
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
    ]

    return (
        <div className='Footer'>
            <div className='Footer_wrapper container'>
                <div className='Footer_decor_topline free_img'></div>
                <div className='Footer_decor free_img'>
                    <div className='Footer_decor_plus free_img'>
                        <div className='Footer_decor_plus_topEl'>
                            <img src="/img/plusWhite.svg" alt="" />
                            <div className='Footer_decor_plus_vert free_img'>
                                <div className='Footer_decor_plus_vert_inner'></div>
                            </div>
                        </div>
                        <div className='Footer_decor_plus_topEl'>
                            <img src="/img/plusWhite.svg" alt="" />
                            <div className='Footer_decor_plus_vert free_img'>
                                <div className='Footer_decor_plus_vert_inner'></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='Footer_title'>
                    OUR Socials
                    <div className='Footer_title_decor free_img'>
                        <div className='Footer_title_decor_img free_img'>
                            <img src="/img/gn.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className='Footer_decor_topline free_img'></div>
                <div className='Footer_decor free_img'>
                    <div className='Footer_decor_plus free_img'>
                        <div className='Footer_decor_plus_topEl'>
                            <img src="/img/plusWhite.svg" alt="" />
                        </div>
                        <div className='Footer_decor_plus_topEl'>
                            <img src="/img/plusWhite.svg" alt="" />
                        </div>
                    </div>
                </div>
                <div className='Footer_content'>
                    <div className='Footer_content_media'>
                        {/* <LinkWithBorder title={'Contact us'} /> */}
                        <div className='Footer_content_media_el'>
                            <LinkWithBorder img={'/img/tg.svg'} type={'tg'} />
                            <LinkWithBorder img={'/img/twitter.svg'} type={'twitter'} addittional='twitter' />
                            <LinkWithBorder img={'/img/dex.svg'} type={'dex'} addittional='dex' />
                        </div>
                    </div>
                    <div className='Footer_content_title'>
                        Join the Cabal
                        {/* <div className='Footer_content_title_text'>
                            Adipisci sunt autem et maxime omnis officiis dolores maiores voluptas. Voluptatem velit id et fugit quo. Eos expedita tempore eius excepturi. Officiis molestias qui esse sit est facere. Minus consequatur dolorum deleniti perspiciatis.
                        </div> */}
                    </div>
                    <div className='Footer_content_nav'>
                        {
                            els.map((el, index) => (
                                <a href={`#${el.id}`} key={`HeroSection_content_items_links_${index}`}>{el.title}</a>
                            ))
                        }
                    </div>
                    <div className='Footer_content_copy'>
                        Copyright 2025, Escape Labs
                    </div>
                </div>
                <div className='Footer_decor free_img'>
                    <div className='Footer_decor_plus free_img'>
                        <div className='Footer_decor_plus_topEl'>
                            <img src="/img/plusWhite.svg" alt="" />
                        </div>
                        <div className='Footer_decor_plus_topEl'>
                            <img src="/img/plusWhite.svg" alt="" />
                        </div>
                    </div>
                </div>
                <div className='Footer_decor_topline free_img'></div>
            </div>
        </div>
    )
}