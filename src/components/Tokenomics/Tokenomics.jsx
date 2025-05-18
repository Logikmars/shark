import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Tokenomics.scss';

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
