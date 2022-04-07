import { useRef, useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/all';

import './Banner.scss';

export default function Banner(props) {

    const IntroVideoRef = useRef(null);
    const videoRef = useRef(null);
  
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        
        videoRef.current.currentTime = 0;
        
        ScrollTrigger.create({
            trigger: IntroVideoRef.current,
            scrub: true,
            pin: IntroVideoRef.current,
            start: 'center center',
            end: '+=20000',
            onUpdate: function(self) { 
                if(videoRef.current) {
                    let scrollPos = self.progress;
                    let videoDuration = videoRef.current.duration;
                    let videoCurrentTime = videoDuration + scrollPos;
                    
                    if(videoCurrentTime) {
                        videoRef.current.currentTime = videoCurrentTime;
                    }
                    
                    console.log(videoDuration, scrollPos, videoCurrentTime)
                }
            },
        })
    }, [IntroVideoRef, videoRef]);

    return <div className='Banner' ref={IntroVideoRef}>
        <video id="video" src="starry.mp4" ref={videoRef}></video>
        <img id='profile' src='profile.png' alt='Laurence Qi'/>
        <div id='blur'></div>
        <h1 id='name'>Laurence Qi</h1>
        <h2 id='sub-heading'>Junior Back-end Developer</h2>
    </div>
}