import './RoadMap.scss';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
                start: 'top 50%',
                toggleActions: 'play none none reverse',
                // markers: true,
            },
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
                                    src={`/img/roadmap/${index + 1}.svg`}
                                    alt=""
                                    ref={el => (imagesRef.current[index] = el)}
                                />
                            </div>
                        ))}

                </div>
                <div className='RoadMap_content_decor free_img'></div>
            </div>
        </div>
    );
};
