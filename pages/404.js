import Link from 'next/link';

export default function Error() {
    return (
        <section className="error">
            <span className="error__status">404</span>
            <h1 className="error__message">Страница не найдена 🙁</h1>
            <Link href="/"><a className="error__link">Вернуться на главную</a></Link>
        </section>
    )
}