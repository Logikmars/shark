import './RoadMap.scss';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

export default () => {
    const imagesRef = useRef([]);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const directions = [
            { x: -100, y: 0 },  // слева
            { x: 0, y: 100 },   // снизу
            { x: 0, y: -100 },  // сверху
            { x: 100, y: 0 },   // справа
        ];

        // Устанавливаем начальные позиции
        imagesRef.current.forEach((img, i) => {
            const dir = directions[i % directions.length];
            gsap.set(img, {
                ...dir,
                opacity: 0,
            });
        });

        // Единая анимация
        gsap.to(imagesRef.current, {
            x: 0,
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            stagger: 0.1, // можно убрать или увеличить
            scrollTrigger: {
                trigger: '.RoadMap_content',
                start: 'top 40%',
                toggleActions: 'play none none reverse',
                // markers: true,
            },
        });
    }, []);

    const [currentSlide, setcurrentSlide] = useState(0);
    const scope = useRef(null)

    // useGSAP(() => {
    //     gsap.to(`.RoadMap`, {
    //         opacity: 1,
    //         scrollTrigger: {
    //             trigger: '.RoadMap',
    //             start: '0% 20%',
    //             end: '50% 20%',
    //             markers: true,
    //             onUpdate: self => {
    //                 setcurrentSlide(Math.ceil(self.progress * 3))
    //             }
    //         },
    //     });
    // }, { scope: scope })



    useGSAP(() => {
        gsap.to('.RoadMap_way', {
            y: '0px',
            ease: 'none',
            scrollTrigger: {
                trigger: '.RoadMap_wrapper',
                scrub: 0,
                markers: true,
                pin: '.RoadMap_wrapper',
                pinSpacing: false,
                start: 'top 0%',
                end: 'bottom 100%',
                onUpdate: self => {
                    setcurrentSlide(Math.ceil(self.progress * 4) - 1)
                }
            }
        })
    }, { scope: scope })




    return (
        <div className='RoadMap_w' ref={scope}>
            <div className='RoadMap_wrapper'>

                <div className='RoadMap container'>
                    <div className='RoadMap_content'>
                        <div>
                            {Array(10)
                                .fill(0)
                                .map((_, index) => (
                                    <div className={`RoadMap_el free_img RoadMap_el_${index + 1}`} key={`RoadMap_${index}`}>
                                        <img
                                            src={`/img/roadmap/${index + 1}.svg`}
                                            alt=""
                                            ref={el => (imagesRef.current[index] = el)}
                                        />
                                    </div>
                                ))}

                        </div>
                    </div>
                    <div className='RoadMap_way'>
                        <div className='RoadMap_way_inner free_img' style={{
                            transform: `translate(${-180 - currentSlide * 420}px, 0px)`
                        }}>
                            <img src="/img/roadmap/list.svg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};
