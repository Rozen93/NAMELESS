

type myTextProps = {
    children: any,
    textClass?: string
};



function RhinoText({ textClass, children }: myTextProps) {

    const value = `paragraph-rhino ${textClass}`
    return (
        <>
            <p className={value}>{children}</p>
        </>
    )
}

export default RhinoText