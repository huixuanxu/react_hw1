import styles from "./footer.module.css"
import { Row, Col } from "antd"
export default function Footer() {
    return (
        <footer className="footer">
            <div className={styles.footerAbove}>
                <div className="container">
                    <Row gutter={[50, 50]}>
                        <Col
                            sm={{ span: 24 }}
                            lg={{ span: 16 }}
                        >
                            <h5 className={styles.footerDescription}>
                                臺北市和平東路二段134號，國立臺北教育大學 數位科技設計學系
                            </h5>
                        </Col>

                        <Col
                            sm={{ span: 24 }}
                            lg={{ span: 8 }}
                        >
                            <ul className={styles.footerList}>
                                <li className={styles.footerItem}><a href="" className={styles.footerLink}><i className="fab fa-facebook-f"></i></a></li>
                                <li className={styles.footerItem}><a href="" className={styles.footerLink}><i className="fab fa-google-plus-g"></i></a></li>
                                <li className={styles.footerItem}><a href="" className={styles.footerLink}><i className="fab fa-linkedin-in"></i></a></li>
                            </ul>
                        </Col>
                    </Row>
                </div>
            </div>

            <div className={styles.footerBelow}>
                <div className="container">
                    <h6>
                        &copy; Copyright All rights reserved.
                    </h6>
                </div>
            </div>
        </footer>
    );
}