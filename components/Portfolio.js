import Link from "next/link";
import Aos, { AOS } from "aos";
import 'aos/dist/aos.css';

export default function Portfolio() {
    return (
        <section className="portfolio" id="portfolio">
            <h2 className="portfolio__title">Портфолио</h2>
            <div className="portfolio__items">
                <div className="portfolio__item">
                    <h3 target="_blank" className="portfolio__link" href="">Лединг по продаже услуг обучения
                            для
                            компании Bosch</h3>
                    <img className="portfolio__image" src="/B2B_Bosch_Rexroth_Didactics_Landing_page_2022.png" data-aos="fade-up" alt="Картинка портфолио"></img>
                    <p className="portfolio__text" data-aos="fade-up">Данный проект – это одностраничный сайт с проработанным
                            контентом,
                            удобным UI/UX дизайном. В проекте реализована адаптивная верстка под разные виды устройств.
                            На странице реализована базовая SEO оптимизация и подключен сервис аналитики Яндекс
                            Метрика.<br/><br/>Данный лединг направлен на привлечение потенциальных клиентов за счет
                            проработанной
                            структуры и работой с драйверами и барьерами целевой аудитории. Данный проект позволил
                            заказчику добиться поставленных бизнес целей и получить новых
                            клиентов.<br/><br/><strong>Технологии:</strong> HTML, CSS (Flexbox, Positioning Elements,
                            Animation and Transform using CSS, Iframe), BEM Methodology, JS.<br/><br/>
                            <strong>CMS:</strong> 1С-Битрикс<br/><br/>
                    </p>
                    <div className="button__container">
                            <a className="button button_type_exception button_type_big button_type_dark"
                                href="https://mattzenn.github.io/B2B_Bosch_Rexroth_Didactics_Landing_page_2022/src/">Ссылка
                                на проект</a><br/><br/>
                            <a className="button button_type_big"
                                href="https://github.com/Mattzenn/B2B_Bosch_Rexroth_Didactics_Landing_page_2022">
                                Ссылка на репозиторий в GitHub</a>
                    </div>
                </div>
                <div className="portfolio__item">
                    <h3 target="_blank" className="portfolio__link" href="">Основная страница сайта B2B -
                            Bosch Rexroth
                    </h3>
                    <img className="portfolio__image" src="/B2B_main_page.png" alt="Картинка портфолио" data-aos="fade-up"></img>
                    <p className="portfolio__text" data-aos="fade-up">Основная страница сайта B2B была создана и разработана в
                            соответствии
                            с гайдлайном компании. Данная страница реализована с удобным UI/UX дизайном и адаптивным
                            интерфейсом под разные типы устройств. <br/><br/>Реализована для удобной навигации по сайту и
                            предоставления посетителям сайта информацию о товарах и услугах компании. На странице
                            реализована «карусель» с баннерами, адаптивные интерфейсные элементы, базовая SEO
                            оптимизация и подключен сервис аналитики Яндекс Метрика.<br/><br/><strong>Технологии:</strong>
                            HTML, CSS (Flexbox, Positioning Elements, Animation and Transform using CSS, Iframe), BEM
                            Methodology, JS.<br/><br/>
                            <strong>CMS:</strong> 1С-Битрикс<br/><br/>
                    </p>
                    <div className="button__container">
                        <a className="button button_type_exception button_type_big button_type_dark" 
                                href="https://mattzenn.github.io/B2B_main_page/">Ссылка
                                на проект</a><br/><br/>
                        <a className="button button_type_big" href="https://github.com/Mattzenn/B2B_main_page">Ссылка на
                                репозиторий в GitHub</a>
                    </div>
                </div>
                <div className="portfolio__item">
                    <h3 target="_blank" className="portfolio__link" href="">Веб-приложение «Movies-explorer»
                            (онлайн
                            кинотеатр)</h3>
                    <img className="portfolio__image" src="/movies_explorer.png" alt="Картинка портфолио" data-aos="fade-up"></img>
                    <p className="portfolio__text" data-aos="fade-up">"Movies Explorer" - это приложение схоже по функционалу с
                            онлайн
                            кинотеатром.<br/><br/>В данном сервисе реализована возможность аутентификации пользователей,
                            сохранения фильмов в избранном и поиском фильмов по ключевым
                            словам.<br/><br/>В рамках данного проекта был реализован фронтенд (с использованием фреймворка
                            React.js) и бэкенд (Node.js, Express, MongodDB).<br/><br/>В проектной работе
                            была применена работа с макетом в Figma + Pixel Perfect, построение сложных сеток,
                            расширенные возможности HTML и CSS, реализация адаптивной вёрстки посредством Flexbox, Grid
                            Layout и Media queries.<br/><br/>
                            <strong>Технологии:</strong> Frontend: HTML, CSS (Flexbox, Positioning Elements,
                            Animation and Transform using CSS, Iframe), BEM Methodology, JavaScript (Asynchronous JS,
                            OOP, Fetch API), React JS, Functional Components, Functional Components. <br/><br/>Backend:
                            Nodejs, Expressjs, MongoDB, Mongoose, Cors<br/><br/>
                    </p>
                    <div className="button__container">
                        <a className="button button_type_exception button_type_big button_type_dark"
                                href="https://mattzenn-movies.nomoredomains.rocks/">Ссылка
                                на проект</a><br/><br/>
                        <a className="button button_type_big"
                                href="https://github.com/Mattzenn/movies-explorer-frontend">
                                Ссылка на репозиторий в GitHub</a>
                    </div>
                </div>
            </div>
            <div className="button__container">
            <Link href="/portfolio"><a className="button__more">Посмотреть все проекты</a></Link>
            </div>
        </section>
    )
}