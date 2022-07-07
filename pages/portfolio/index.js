import Link from 'next/link';

export default function PortfolioPage() {
  return (
    <main className="content">
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
                <div className="portfolio__item">
                    <h3 target="_blank" className="portfolio__link" href="">Веб-приложение «Mesto»
                            (социальная сеть
                            для публикации фотографий)</h3>
                    <img className="portfolio__image" src="/mesto.png" alt="Картинка портфолио" data-aos="fade-up"></img>
                    <p className="portfolio__text" data-aos="fade-up">"Mesto" – это одностраничное приложение по типу Instagram
                            с
                            возможностью изменения данных профиля, добавления и удаления новых картинок. В рамках
                            данного проекта был реализован фронтенд (с использованием фреймворка React.js) и бэкенд
                            (Node.js, Express, MongodDB). <br/><br/>В рамках данного проекта был реализован фронтенд (с
                            использованием фреймворка React.js) и бэкенд (Node.js, Express, MongodDB).<br/><br/>В проекте
                            была применена работа с макетом в Figma + Pixel Perfect, построение сложных сеток,
                            расширенные возможности HTML и CSS, реализация адаптивной вёрстки посредством Flexbox, Grid
                            Layout и Media queries.<br/><br/>В проектной работе
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
                                href="https://github.com/Mattzenn/react-mesto-auth">Ссылка
                                на проект
                        </a><br/><br/>
                        <a className="button button_type_big" href="https://github.com/Mattzenn/react-mesto-api-full">
                                Ссылка на репозиторий в GitHub</a>
                    </div>
                </div>
                <div className="portfolio__item">
                    <h3 target="_blank" className="portfolio__link" href="">Лединг "Путешествие по России"</h3>
                    <img className="portfolio__image" src="/russian_travel_photo.png" alt="Картинка портфолио" data-aos="fade-up"></img>
                    <p className="portfolio__text" data-aos="fade-up">"Путешествие по России" - это типовой одностраничный сайт
                            про
                            российский внутренний туризм с полезными ресурсами для путешествия. <br/><br/>В проекте была
                            применена работа с макетом в Figma + Pixel Perfect, построение сложных сеток,
                            расширенные возможности HTML и CSS, реализация адаптивной вёрстки под различные виды
                            устройств посредством Flexbox, Grid Layout и Media queries.
                            <strong><br/><br/>Технологии:</strong> Frontend: HTML, CSS (Flexbox, Positioning
                            Elements,
                            Animation and Transform using CSS, Iframe), BEM Methodology<br/><br/>
                    </p>
                    <div className="button__container">
                        <a className="button button_type_exception button_type_big button_type_dark" 
                                href="https://mattzenn.github.io/russian-travel/index.html">Ссылка
                                на проект</a><br/><br/>
                        <a className="button button_type_big" href="https://github.com/Mattzenn/russian-travel">
                                Ссылка на репозиторий в GitHub</a>
                    </div>
                </div>
                <div className="portfolio__item">
                    <h3 target="_blank" className="portfolio__linkn" href="">Лединг "How to learn" </h3>
                    <img className="portfolio__image" src="/how_to_learn.png" alt="Картинка портфолио" data-aos="fade-up"></img>
                    <p className="portfolio__text" data-aos="fade-up">"How to learn" - это типовой однастраничный сайт (лединг)
                            про
                            методики обучения.<br/><br/>Данная страница описывает разлиные эффективные подходы к обучению.
                            На страницы рассматриваются различные техники обучения: пять практик от Барбары Оакли, видео
                            нa TED, метод Фейнмана, методика Салмана Хана, принципы обучения от Джоша
                            Кауфмана.<br/><br/>Сайт создан по методологии BEM с файловой структурой Nested BEM с
                            использованием технологий HTML и CSS. Также на сайте используется анимация объектов и
                            интеграции через iframe. В проектной работе была применена работа с макетом в Figma.<br/><br/>
                            <strong>Технологии:</strong> Frontend: HTML, CSS, BEM Methodology<br/><br/>
                    </p>
                    <div className="button__container">
                        <a className="button button_type_exception button_type_big button_type_dark"
                                href="https://mattzenn.github.io/how-to-learn/">Ссылка
                                на проект</a><br/><br/>
                        <a className="button button_type_big" href="https://github.com/Mattzenn/how-to-learn">
                                Ссылка на репозиторий в GitHub</a>
                    </div>
                </div>
            </div>
            <div className="button__container">
            <Link href="/"><a className="button__more">Вернуться на главную страницу</a></Link>
            </div>
        </section>
    </main>
  )
}