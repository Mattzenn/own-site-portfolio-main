import { Parallax } from "react-scroll-parallax";
import Aos, { AOS } from "aos";
import 'aos/dist/aos.css';

export default function Whyme() {
    return (
        <section className="whyme">
            <div className="whyme__content">
                <h2 className="whyme__title">Почему я?</h2>
                <div className="whyme__items">
                        <p className="whyme__text" data-aos="fade-up">У меня есть знания и практический опыт в различных сферах:
                            веб-разработка, управление IT проектамии, интернет-маркетинг.</p><br/><br/>
                        <p className="whyme__text" data-aos="fade-up">Я делаю проекты, которые помогают достигать
                            поставленных бизнес целей. Я всегда погружаюсь в продукт и бизнес для предоставления наилучшего результата.</p>
                        <br/><br/>
                        <p className="whyme__text" data-aos="fade-up">У меня есть опыт управления проектом создания крупного
                            интернет-магазина с 0 для международной компании Bosch.</p><br/><br/>
                        <p className="whyme__text" data-aos="fade-up">Я всегда делаю больше и лучше, чем это было нужно. Я
                            предлагаю идеи
                            и решения, а не просто выполняют очередную задачу.</p><br/><br/>
                        <p className="whyme__text" data-aos="fade-up">Я постоянно изучаю и интересуюсь новыми возможностями в направлении Frontend разработки, чтобы применять новые знания и навыки в своих проектах.
                        </p><br/><br/>
                        <p className="whyme__text" data-aos="fade-up">Я стремлюсь быть вашим надежным долгосрочным партнером и
                            делаю все возможное, чтобы достичь доверительных отношений.
                        </p><br/><br/>
                </div>
            </div>
            <div className="stages__content" id="calltoactionbox">
                    <h2 className="stages__title wow fadeIn">Контактная информация</h2>
                    <ul className="stages__cardlist">
                        <li className="stages__card">
                            <a className="stages__container" target="_blank" rel="noreferrer" href="https://career.habr.com/mattzen">
                                <h4 className="stages__card-title wow fadeIn">Habr Карьера</h4>
                            </a>
                        </li>
                        <li className="stages__card">
                            <a className="stages__container" target="_blank" rel="noreferrer" href="https://github.com/Mattzenn">
                                <h4 className="stages__card-title wow fadeIn">Github</h4>
                            </a>
                        </li>
                        <li className="stages__card">
                            <a className="stages__container" target="_blank" rel="noreferrer" href="https://t.me/matvey_zenin">
                                <h4 className="stages__card-title wow fadeIn">Telegram</h4>
                            </a>
                        </li>
                        <li className="stages__card">
                            <a className="stages__container" target="_blank" rel="noreferrer" href="https://disk.yandex.ru/i/N8m6UCNGYcRNPw">
                                <h4 className="stages__card-title wow fadeIn">Резюме</h4>
                            </a>
                        </li>
                    </ul>
                </div>  
        </section>
    )
}