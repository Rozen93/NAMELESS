import React from 'react'

type containerProps = {
    children: any,
    isNormal?: any,
    isFull?: any
}

function ContainerRhino({ children, isNormal, isFull }: containerProps) {
    return (
        <section className={`${isNormal? 'p-3 lg:p-4 mt-14' : 'pt-3 lg:pt-4 mt-14'} ${isFull? 'py-3 px-0 lg:py-4 lg:px-0 mt-14' : 'pt-3 lg:pt-4 mt-14'}`}>
            <div className={`${isNormal? 'container-rhino pt-9 mt-9' : 'container-full pt-9 mt-9'}`}>
                {children}
            </div>
        </section>
    )
}

export default ContainerRhino