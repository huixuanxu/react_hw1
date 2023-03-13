import Imageitem from "../Imageitem/Imageitem";
import images from "../../json/images.json";
import { Row, Col } from "antd";
import styles from "./ImageList.module.css";

export default function ImageList() {
    return (
        <div>
            <article className={styles.imageLayout}>
                <div className="container">
                    <h1 className={styles.slogan}>IMAGES</h1>
                    <hr className="divider--dark" />
                    <Row gutter={[32, 32]}>
                    {images.map(image => (
                        <Col
                            key={image.id}
                            sm={{ span: 12}}
                            lg={{ span: 8}}
                            xl={{ span: 6}}
                            >
                                <Imageitem key={image.id} image={image}/>
                        </Col>
                        ))}
                    </Row>
                </div>
            </article>
            <article className={styles.descriptionLayout}>
                <div className="container">
                    <h1 className={styles.slogan}>DESCRIPTIONS</h1>
                    <hr className="divider--light" />
                    <p className={styles.descriptionContent}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium laborum
                        corrupti ut iure aliquam. Quod, perferendis. Libero tempore iste, animi sint numquam illum quasi laboriosam
                        unde pariatur quidem! Suscipit consequatur nihil dolor impedit temporibus ad cum, voluptatum odit ratione
                        ullam
                        eligendi amet beatae aliquid eaque nesciunt optio nobis ducimus itaque. Voluptatibus aspernatur assumenda
                        quod
                        quo error consequuntur, vero iusto reprehenderit repellat maiores, sapiente dolores voluptates minima. Alias
                        dolore assumenda fuga quae repellat voluptatum quo, saepe exercitationem perspiciatis reiciendis modi
                        tempora.
                        Recusandae explicabo iusto corporis nam numquam dignissimos, necessitatibus, iure non culpa repellat
                        repudiandae temporibus! Saepe excepturi tempore iusto eos sit!</p>
                </div>
            </article>
        </div>
    );
}
 