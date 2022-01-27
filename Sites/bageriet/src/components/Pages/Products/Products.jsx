import { Route, Switch, useRouteMatch, Redirect } from 'react-router-dom';
import { ProductNav } from '../../Elements/ProductNav/ProductNav';
import { ProductList } from '../../Elements/ProductList/ProductList';
import { CommentSection } from '../../Elements/CommentSection/CommentSection'
import styles from './Products.module.scss';
import { ProductDetails } from '../../Elements/ProductDetails/ProductDetails';

export const Products = () => {

    let { url } = useRouteMatch();

    return (
        <div className="container">
            <div>
                <h1>Vores elskede bagværk...</h1>
            </div>

            <div className={`${styles.products} grid`}>
                <aside>
                    <ProductNav />
                </aside>
                <section>
                    <Switch>
                        
                        <Route exact path={`${url}`}>
                            <Redirect to={`${url}/1`}></Redirect>
                        </Route>

                        <Route exact path={`${url}/:categoryId`}>
                            <ProductList />
                        </Route>

                        <Route exact path={`${url}/:categoryId/:productId`}>
                            <ProductDetails />
                            <CommentSection />
                        </Route>

                    </Switch>
            </section>
            </div>
        </div>
    )
}