import React from 'react'

function Quad() {
    return (
        <>
            <div className="pt-9 xl:pt-12 flex flex-wrap items-center flex-row" data-fade="" style={{ opacity: 1 }}>
                <div className="single relative w-[50%] flex transform translate-x-[7%] translate-y-[-3%] z-30">
                    <img width="298" height="168" loading="lazy" src="https://www.cbwebsitedesign.co.uk/img/cbd-mockups.jpg" alt="Web Design London" />
                </div>
                <div className="single relative w-[50%] flex transform translate-x-[-13%] translate-y-[11%] z-40">
                    <video playsInline autoPlay muted loop poster="https://www.cbwebsitedesign.co.uk/img/cbd-mockups.jpg" className="">
                        <source data-src="https://www.cbwebsitedesign.co.uk/vid/home-arsenal.mp4" type="video/mp4" src="https://www.cbwebsitedesign.co.uk/vid/home-arsenal.mp4" />
                        <source data-src="https://www.cbwebsitedesign.co.uk/vid/home-arsenal.webm" type="video/webm" src="https://www.cbwebsitedesign.co.uk/vid/home-arsenal.webm" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="single relative w-[50%] flex transform translate-x-[12%] translate-y-[-16%] z-10">
                    <video playsInline autoPlay muted loop poster="https://www.cbwebsitedesign.co.uk/img/cbd-mockups.jpg" className="">
                        <source data-src="https://www.cbwebsitedesign.co.uk/vid/genvid-concept.mp4" type="video/mp4" src="https://www.cbwebsitedesign.co.uk/vid/genvid-concept.mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="single relative w-[50%] flex transform translate-x-[2%] translate-y-[-6%] z-20">
                    <video playsInline autoPlay muted loop poster="https://www.cbwebsitedesign.co.uk/img/cbd-mockups.jpg" className="">
                        <source data-src="https://www.cbwebsitedesign.co.uk/vid/home-titan.mp4" type="video/mp4" src="https://www.cbwebsitedesign.co.uk/vid/home-titan.mp4" />
                        <source data-src="https://www.cbwebsitedesign.co.uk/vid/home-titan.webm" type="video/webm" src="https://www.cbwebsitedesign.co.uk/vid/home-titan.webm" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>


        </>
    )
}

export default Quad