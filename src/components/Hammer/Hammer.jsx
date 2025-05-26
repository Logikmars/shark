import { useState } from 'react';
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

    const [showText, setshowText] = useState(false);

    return (
        <div className='Hammer' id='products'>
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
                    <div className='Hammer_title_text_content_text'>Hammer  – Boost Your Chat Engagement!</div>
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
                        <HammerEl title={el.title} img={el.img} key={`HammerEl_${index}`} onMouseEnter={() => { index === 0 && setshowText(true) }} onMouseLeave={() => { setshowText(false) }} />
                    ))
                }
            </div>

            <div className='Hammer_decor free_img'>
                <div className='Hammer_decor_blue free_img'>
                    <img src="/img/decor.webp" alt="" className='Hammer_decor_blue_sec' />
                </div>
            </div>

            <div className={`Hammer_description ${showText && 'Hammer_description_show'}`}>
                <div className='Hammer_description_left'>Hammer rewards you for what you love – chatting, inviting friends, and playing games in Telegram groups. Add the bot to your group to boost activity. With smart nudges, gamified challenges, and an active presence, Hammer keeps your community engaged and conversations alive.</div>
                {/* <div className='Hammer_description_right'>
                    <ul>
                        <li>✅Stimulates user engagement</li>
                        <li>✅Keeps the chat lively and active</li>
                        <li>✅Perfect for communities, teams, and interest groups</li>
                        <li>✅Easy to set up and fully automated</li>
                    </ul>
                    Bring your group to life with Hammer – your ultimate activity booster!
                </div> */}
            </div>
        </div>
    )
}