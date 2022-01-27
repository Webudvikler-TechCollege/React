import { News } from '../../Elements/News/News'
import { SignUp } from '../../Elements/SignUp/SignUp'
import { ProductListLatest } from '../../Elements/ProductListLatest/ProductListLatest'

export const Home = () => {

    return (
        <>
            <section className="container">
                <h1>Velkommen til bageriet</h1>
                <News />
            </section>
            <SignUp />
            <section className="container">
                <h2>Nyeste produkter</h2>
                <ProductListLatest />
            </section>
        </>
    )
}