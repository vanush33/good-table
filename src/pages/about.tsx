import image1 from '/images/about1.png'
import image2 from '/images/about2.png'
import image3 from '/images/about3.png'
import image4 from '/images/about4.png'
import clock from '/images/clock.svg'
import list from '/images/list.png'
import hat from '/images/hat.png'
import './styles/about.scss'
import { Link } from 'react-router-dom'

export const About = () => {
    return (
        <>
            <div className="story">
                <div className="container">
                    <div className="story--heading heading">Наша история</div>
                    <div className="story--story">
                        <img src={image1} />
                        <p>Компания Good Table существует уже 20 лет.  За этот период у компании сформировался состав высококвафицированных специалистов, способных выполнить заказ любой сложности. Наше главное отличие - индивидуальный подход к клиенту. </p>
                    </div>
                </div>
            </div>
            <div className="achievements">
                <div className="container">
                    <div className="achievements--heading">Достижения</div>
                    <div className="achievements--body">
                        <div className="achievements--exp">
                            <h3><img src={clock} />20</h3>
                            <p>Лет на рынке</p>
                        </div>
                        <div className="achievements--projects">
                            <h3><img src={list} />20000+</h3>
                            <p>Выполненных проектов</p>
                        </div>
                        <div className="achievements--workers">
                            <h3><img src={hat} />300+</h3>
                            <p>Высококвалифицированных специалистов</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="design">
                    <div className="design--heading heading">Уникальный дизайн</div>
                    <p>Мы создадим индивидуальный дизайн столов под любой интерьер.</p>
                    <div className="design--images">
                        <img src={image2} />
                        <img src={image3} />
                    </div>
                </div>
                <div className="places">
                    <div className="places--heading heading">Студии</div>
                    <p>Наша компания владеет 3 филиалами: в Кишинёв, Киеве и Бухаресте. В любой рабочий день недели вы сможете посетить нашу студию.</p>
                    <Link to={'/contact'}><button className="button button--accent">Связаться с нами</button></Link>
                    <img style={{ maxWidth: "100%" }} src={image4} />
                </div>
            </div>
        </>
    )
}
