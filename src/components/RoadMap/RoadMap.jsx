import './RoadMap.scss';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


export default () => {

    const imagesRef = useRef([]);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        imagesRef.current.forEach((img, i) => {
            const offset = 80 - i * 15;

            gsap.fromTo(
                img,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: img,
                        start: `top ${offset}%`,
                        end: `bottom top`,
                        toggleActions: 'play reverse play reverse',
                        // markers: true,
                    },
                }
            );
        });
    }, []);

    return (
        <div className='RoadMap container'>
            <div className='RoadMap_content'>
                <div className='RoadMap_content_decor free_img'>
                    <div className='RoadMap_content_decor_text free_img'>
                        <img src="/img/roadmap/decor.webp" alt="" />
                    </div>
                </div>
                <div>
                    {Array(10)
                        .fill(0)
                        .map((_, index) => (
                            <div className={`RoadMap_el free_img RoadMap_el_${index + 1}`} key={`RoadMap_${index}`}>
                                <img
                                    src={`/img/roadmap/${index + 1}.webp`}
                                    alt=""
                                    ref={el => (imagesRef.current[index] = el)}
                                    />
                            </div>
                        ))}
                </div>
                <div className='RoadMap_content_decor free_img'>
                </div>
            </div>
        </div>
    )
}