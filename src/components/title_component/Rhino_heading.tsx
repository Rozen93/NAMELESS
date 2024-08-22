import styles from './title.module.css'


type myProps = {
    subHeading: string,
    heading: string,
    subClass?: string,
    headClass?:string
}



function RhinoHeading({ subHeading, heading, subClass, headClass }: myProps) {

    const subHeadingClass = `subheading-rhino ${subClass}`
    const headingClass = `heading-rhino ${styles.text_gradient} ${headClass}`
    return (
        <>
            <h4 className={subHeadingClass}>
                {subHeading}
            </h4>
            <h2 className={headingClass}>{heading}</h2>
        </>
    )
}

export default RhinoHeading