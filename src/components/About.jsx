import gsap from "gsap";

import {useGSAP} from "@gsap/react";

import {ScrollTrigger} from "gsap/all";
import AnimatedTitle from "./AnimatedTitle.jsx";
import React from "react";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    useGSAP(() => {
        const clipAnimation = gsap.timeline({
            scrollTrigger: {
                trigger: '#clip',
                start: 'center center',
                end: '+=800 center',
                scrub: 0.5,
                pin: true,
                pinSpacing: true,
            }
        })

        clipAnimation.to('.mask-clip-path', {
            width: '100vw',
            height: '100vh',
            borderRadius: 0,
        })
    })

    return (
        <div id="parties" className="min-h-screen w-screen">
            <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
                <h2 className="font-general text-sm uppercase md:text-[10px]">Welcome to Bresh</h2>

                <AnimatedTitle title="Be yours<b>e</b>lf and P<b>a</b>rty anywhere <br/> in the w<b>o</b>rld" containerClass="mt-5 !text-black text-center" />

                <div className="about-subtext">
                    <p>Bresh, born in Buenos Aires in 2016, is a global party phenomenon.</p>
                    <p>It's famous for its inclusive atmosphere and eclectic mix of reggaeton, Latin pop, and old-school hits, creating a safe and enjoyable space for all.</p>
                </div>
            </div>

            <div className="h-dvh  w-screen" id="clip">
                <div className="mask-clip-path about-image">
                    <img src="img/about.webp" alt="Background" className="absolute left-0 top-0 size-full object-cover"/>
                </div>
            </div>
        </div>
    )
}
export default About
