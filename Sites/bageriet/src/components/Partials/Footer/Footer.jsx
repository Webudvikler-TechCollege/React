import tothetop from '../../Assets/images/icons/icon-top.png'

export const Footer = () => {
    return (
        <footer>
            <figure>
                <a href="\#">
                    <img src={tothetop} alt="Til toppen"/>
                </a>
            </figure>
            <section>
                <h2>bageriet</h2>
                <address>
                    Bispensgade 132 &#8226; 9800 Hjørring<br />
                    Telefon: +45 1122 3344 &#8226; Email: info@bageriet.dk
                </address>
            </section>
        </footer>        
    )    
}