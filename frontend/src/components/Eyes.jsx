import { useEffect, useState } from "react";

function Eyes(){

    const [rotate, setRotate] = useState(0);
    const [transformX, setTransformX] = useState(0)
    const [transformY, setTransformY] = useState(0)
    useEffect(()=>{
        window.addEventListener('mousemove', (e)=>{
            var mouseX = e.clientX
            let mouseY = e.clientY
            
            let deltaX = mouseX - window.innerWidth/2
            let deltaY = mouseY - window.innerHeight/2
            var angle = Math.atan2(deltaY, deltaX) * (180/Math.PI);
            setRotate(angle - 180)
            setTransformX(deltaX/30)
            setTransformY(deltaY/30)
        })
    })

    return(
        <div className="eyes w-full h-full overflow-hidden">
            <div data-scroll data-section data-scroll-speed="-.4" className="relative w-full h-full bg-cover bg-center">
                <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] flex gap-10">
                    <div className="w-[13vw] h-[13vw] flex items-center justify-center rounded-full bg-zinc-100">
                    <div style={{transform: `translateX(${transformX}%) translateY(${transformY}%)`}} className="relative w-3/5 h-3/5 rounded-full bg-zinc-900">
                            <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10 ">
                                <div className="w-5 h-5 rounded-full bg-zinc-100"></div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[13vw] h-[13vw] flex items-center justify-center rounded-full bg-zinc-100">
                    <div style={{transform: `translateX(${transformX}%) translateY(${transformY}%)`}} className="relative w-3/5 h-3/5 rounded-full bg-zinc-900">
                            <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10 ">
                                <div className="w-5 h-5 rounded-full bg-zinc-100"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Eyes;