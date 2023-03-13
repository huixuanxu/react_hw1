import styles from "./Imageitem.module.css";

export default function Imageitem({ image }) {
    return (
        <section className={styles.image}
            key={image.id}>
            <a href="" className={styles.imageLink}>
                <img src={image.image} alt="" className={styles.imageStyle}/>
            </a>
            <p className={styles.imageTitle}>{image.imagetitle}</p>

        </section>
    );
}