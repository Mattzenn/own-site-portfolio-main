export default function Footer() {
    return (
        <section className="footer">
            <h4 className="footer__title">Официальная страница Зенина Матвея</h4>
            <div className="footer__container">
                <span className="footer__date">&copy; 2022</span>
                <div className="footer__items">
                    <div className="footer__item"><a target="_blank" rel="noreferrer" className="footer__link"
                                href="https://career.habr.com/mattzen">Habr
                                Карьера</a></div>
                    <div className="footer__item"><a target="_blank" rel="noreferrer" className="footer__link"
                                href="https://github.com/Mattzenn">Github</a>
                    </div>
                    <div className="footer__item"><a target="_blank" rel="noreferrer" className="footer__link"
                                href="https://t.me/matvey_zenin">Telegram</a>
                    </div>
                </div>
            </div>
        </section>
    )
}