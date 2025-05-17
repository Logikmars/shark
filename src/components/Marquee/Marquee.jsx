import { useRef } from 'react';
import './Marquee.scss';
export default ({ type, decor }) => {


    return (
        <div className='Marquee'>
            <div className={`Marquee_inner Marquee_inner_${type}`}>
                {Array(20)
                    .fill(0)
                    .map((_, index) => {
                        return <img src={`/img/${type}.svg`} alt="" />
                    })}
            </div>
            <div className='Marquee_decor free_img'>
                <img src="/img/decor.png" alt="" className='Marquee_decor_img2' />
                <img src="/img/decor.png" alt="" />
            </div>
            <div className={`Marquee_inner2 Marquee_inner2_${type}`}>
                {Array(20)
                    .fill(0)
                    .map((_, index) => {
                        return <img src={`/img/${type}_colored.svg`} alt="" />
                    })}
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
