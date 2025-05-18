import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Tokenomics.scss';

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

    imagesRef.current.forEach((img, i) => {
        const dir = directions[i % directions.length]; // повторяется после 4

        gsap.fromTo(
            img,
            { ...dir, opacity: 0 },
            {
                x: 0,
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: img,
                    start: 'top 50%',
                    end: 'bottom top',
                    toggleActions: 'play none none reverse',
                    markers: true,
                },
            }
        );
    });
}, []);

    return (
        <div className='Tokenomics container'>
            <div className='Tokenomics_title'>TOKENOMICS</div>
            <div className='Tokenomics_content'>
                {Array(10)
                    .fill(0)
                    .map((_, index) => (
                        <div className='Tokenomics_el free_img' key={`Tokenomics_${index}`}>
                            <img
                                src={`/img/tokenomics${index + 1}.svg`}
                                alt=""
                                ref={el => (imagesRef.current[index] = el)}
                            />
                        </div>
                    ))}
            </div>
        </div>
    );
};
