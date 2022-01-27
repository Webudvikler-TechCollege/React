import styles from './Section.module.scss';

const Section = (props) => {

    return (
        <section className={`${styles[props.data.class]} ${styles.box}`}>
            <article>
                <h2>{props.data.header}</h2>
                <section className="flexbox iconwrapper">
                    <div>
                        <img src={'/images/layout/' + props.data.image} alt="Icon CO2" />
                    </div>
                </section>
            </article>
        </section>
    )
}

export default Section;