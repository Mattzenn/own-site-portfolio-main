import Aos, { AOS } from "aos";
import 'aos/dist/aos.css';

export default function Feedback() {
    return (
        <section className="feedback" id="feedback">
            <div className="feedback__content">
                <h2 className="feedback__title">Рекомендации</h2>
                <section className="feedback__items">
                    <ul className="feedback__cardlist">
                        <li className="feedback__card">
                                <div className="profile">
                                    <div className="profile__avatar-wrapper">
                                        <img className="profile__avatar" src="/km_e972j1A.jpg" alt="Аватар"></img>
                                    </div>
                                    <div className="profile__info">
                                        <h4 className="profile__name">Елена Волкова</h4>
                                        <h4 className="profile__about gradient">Руководитель отдела обучения в компании
                                            Bosch</h4>
                                    </div>
                                </div>
                                <div className="feedback__container">
                                    <h2 className="feedback__card-title" data-aos="fade-up">Лединг по продаже услуг
                                        обучения</h2>
                                    <p className="feedback__card-subtitle" data-aos="fade-up">Мы компания, оказывающая
                                        консалтинговые услуги по
                                        узкому профилю. Рынок крупный и конкурентность на нем высокая. Мы всегда
                                        работали с постоянной клиентурой, но появилось понимание, что пора расширяться и
                                        еще представить новые продукты.<br/><br/>Матвей полностью реализовал наш запрос
                                        с учетом поставленных бизнес целей. Матвей сделал работу качественно,
                                        профессионально, а также предлагал интересные и эффективные решения
                                        основываясь на своем опыте.<br/><br/>Хочу сказать отдельное спасибо
                                        Матвею за его внимательность к деталям и инициативность.
                                    </p>
                                </div>
                        </li>
                        <li className="feedback__card">
                            <div className="profile">
                                <div className="profile__avatar-wrapper">
                                    <img className="profile__avatar"
                                            src="/TPV9DP0N4-U011AN61Z47-4d97ac255ecf-192.jpeg"
                                            alt="Аватар" />
                                </div>
                                <div className="profile__info">
                                    <h4 className="profile__name">Вениамин Шитиков</h4>
                                    <h4 className="profile__about gradient">Наставник в Яндекс Практикум</h4>
                                </div>
                            </div>
                            <div className="feedback__container">
                                <h2 className="feedback__card-title" data-aos="fade-up">Обучение в Яндекс Парктикуме
                                        (веб-разработчик)</h2>
                                <p className="feedback__card-subtitle" data-aos="fade-up">Матвей, успешно прошел и завершил курс
                                        Веб-Разработки от Яндекс Практикума.<br/><br/>
                                        В рамках данного обучения Матвей освоил технологии для разработки frontend и
                                        backend частей и реализовал различные учебные проекты. Каждый проект успешно
                                        прошел код ревью. <br/><br/> В ходе обучения Матвей проявил различные личные
                                        качества такие
                                        как целеустремленность, коммуникабельность и проактивность.
                                </p>
                            </div>
                        </li>
                    </ul>
                </section>
            </div>
        </section>
    )
}