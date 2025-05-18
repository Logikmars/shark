import './Hammer.scss';
import HammerEl from './HammerEl/HammerEl';
export default () => {

    const els = [
        {
            img: '/img/hammer.webp',
            title: 'HAMMER'
        },
        {
            img: '/img/wave.webp',
            title: 'WAVE'
        },
        {
            img: '/img/aqua.webp',
            title: 'AQUA'
        },
    ]

    return (
        <div className='Hammer'>
            <div className='Hammer_title'>
                <div className='Hammer_title_decor free_img'>
                    <div className='Hammer_title_decor_lineTop free_img'></div>
                </div>
                <div className='Hammer_title_text'>
                    <div className='LinkWithBorder_decor_top free_img'>
                        <div className='LinkWithBorder_decor_top_left free_img'>
                            <img src="/img/border.svg" alt="" />
                        </div>
                        <div className='LinkWithBorder_decor_top_right free_img'>
                            <img src="/img/border.svg" alt="" />
                        </div>
                    </div>
                    <div className='Hammer_title_text_content'>
                        HAMMER
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
                <div className='Hammer_title_decorBot free_img'>
                    <div className='Hammer_title_decor_lineBot free_img'></div>
                    <div className='Hammer_title_decorBot_img free_img'>
                        <img src="/img/goodJob.webp" alt="" />
                    </div>
                </div>
            </div>

            <div className='Hammer_decor free_img'>
                <div className='Hammer_decor_blue free_img'>
                    <img src="/img/decor.webp" alt="" className='Hammer_decor_blue_sec' />
                    <img src="/img/decor.webp" alt="" />
                </div>
            </div>

            <div className='Hammer_content'>
                {
                    els.map((el, index) => (
                        <HammerEl title={el.title} img={el.img} key={`HammerEl_${index}`} />
                    ))
                }
            </div>

            <div className='Hammer_decor free_img'>
                <div className='Hammer_decor_blue free_img'>
                    <img src="/img/decor.webp" alt="" className='Hammer_decor_blue_sec' />
                </div>
            </div>

            <div className='Hammer_description'>
                <div className='Hammer_description_left'>Adipisci sunt autem et maxime omnis officiis dolores maiores voluptas. Voluptatem velit id et fugit quo. Eos expedita tempore eius excepturi. Officiis molestias qui esse sit est facere. Minus consequatur dolorum deleniti perspiciatis.</div>
                <div className='Hammer_description_right'>Adipisci sunt autem et maxime omnis officiis dolores maiores voluptas. Voluptatem velit id et fugit quo. Eos expedita tempore eius excepturi. Officiis molestias qui esse sit est facere. Minus consequatur dolorum deleniti perspiciatis.</div>
            </div>
        </div>
    )
}