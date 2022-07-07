import React, { useEffect } from "react";
import { useRef } from "react";
import { Parallax } from "react-scroll-parallax";
import Aos, { AOS } from "aos";
import 'aos/dist/aos.css';

export default function Aboutme() {

    const TranslateY_1 = () => (
        <Parallax translateY={[30, -20]}>
            <img src="/main_pic_3.jpeg" alt="Фотография" className="aboutme__photo aboutme__photo_type_big"/>
        </Parallax>
    );

    const TranslateY_2 = () => (
        <Parallax speed={20}>
          <img src="/main_pic_4.jpeg" alt="Фотография" className="aboutme__photo aboutme__photo_type_medium"/>
        </Parallax>
    );

    return (
        <section className="aboutme" id="aboutme">
                <h2 className="aboutme__title">Обо мне</h2>
                <div className="aboutme__content">
                    <div className="aboutme__container">
                        <img src="/Aswlz4p89MxdUsnLHKE4kOBLxHBC7c0Ha2fOH27f4B1CZ2Wqu7WvLPgtQKoP_VrKhmhyDUApAkKtCaS-4VC4ZP1u.jpeg" alt="Фотография студента" className="aboutme__photo_type_mobile"/>
                        <h3 className="aboutme__name" data-aos="fade-up">Матвей</h3>
                        <p className="aboutme__profession" data-aos="fade-up"><span className="gradient">Веб-разработчик</span>, 23 года
                        </p>
                        <p className="aboutme__info" data-aos="fade-up">Я родился и живу в Москве, получил высшее образование в
                            направлении
                            экономики и консалтинга. Дополнительно проходил обучение в Яндексе в
                            направлении веб-разработки (frontend и backend) и интернет-маркетинга.
                            <br/><br/>Последние 3 года я руковожу проектом по внедрению e-commerce платформы с 0 в
                            международной компании Bosch.<br/><br/>Я постоянно изучаю и интересуюсь новыми возможностями в направлении Frontend разработки, чтобы применять полученные знания и навыки в своих проектах.<br/><br/>Меня всегда привлекала смесь бизнеса, маркетинга и IT. 
                            Мне нравится создавать технологичные и функциональные сайты
                            с продуманный UI/UX дизайном, которые позволяют достигать поставленных бизнес-целей.
                            <br/><br/>
                            Моя миссия: менять мир за счет реализации инновационных проектов в сфере IT, которыми
                            пользуются множество людей. Я увлечен созданием сайтов и веб-приложений, которые делают нашу
                            жизнь лучше.

                            <br/><br/>Основной стек технологий: <br/><br/> <span className="gradient">HTML,
                                CSS, JS, React</span><br/><br/>
                            Дополнительный стек технологий: <br/><br/> <span className="gradient">Node JS,
                            Express, MongoDB</span>
                        </p>
                        <div className="aboutme__social" data-aos="fade-up">
                            <div className="aboutme__social-item">
                                <a target="_blank" rel="noreferrer" href="https://career.habr.com/mattzen"
                                    className="aboutme__link">Habr Карьера</a>
                            </div>
                            <div className="aboutme__social-item">
                                <a target="_blank" rel="noreferrer" href="https://github.com/Mattzenn"
                                    className="aboutme__link">Github</a>
                            </div>
                            <div className="aboutme__social-item">
                                <a target="_blank" rel="noreferrer" href="https://t.me/matvey_zenin"
                                    className="aboutme__link">Telegram</a>
                            </div>
                        </div>
                    </div>
                    <div>
                    <TranslateY_1/>
                    <TranslateY_2/>                    
                    </div>
                </div>
        </section>
    )
  }