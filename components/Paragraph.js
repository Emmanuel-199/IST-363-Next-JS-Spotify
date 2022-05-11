import classNames from 'classnames/bind'
import styles from './paragraph.module.scss'


let cx = classNames.bind(styles)

const Paragraph = ({ children, intro }) =>{
    let paragraphClasses = cx({
        paragraph : true,
        intro : intro
    })
    return <p className={styles.paragraph}>{children}</p>
}
export default Paragraph;