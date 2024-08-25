"use client"

import TiltCard from "../02_tilt_card/TiltCardTwo";



function GroupTiltCard() {

   


    return (
        <section style={{overflow:'hidden', padding:'0rem 0 1rem'}}>
            <div className="grid grid-cols-4 gap-x-0">
                <TiltCard source='/gibraltar.webp' />
                <TiltCard source='/jets.webp' />
                <TiltCard source='/4media.webp' />
                <TiltCard source='/inter.webp' />
            </div>
        </section>
    )
}

export default GroupTiltCard