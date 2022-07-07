import React, { Component } from 'react';

export default function Promo() {
    return (   
        <section className="promo">
            <h1 className="promo__title">Привет! Я <span className="gradient">Матвей</span>,
                    веб-разработчик из
                    Москвы. <br/>Я создаю технологичные, функциональные сайты и веб-приложения.
            </h1>
            <img src="/main_pic.jpeg" className="promo__logo"/>
        </section>
    )
}