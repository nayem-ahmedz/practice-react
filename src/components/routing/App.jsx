import { Outlet, useNavigation } from 'react-router';
import {Nav} from './Nav';
import './styles.css';
import Footer from './Footer';

export default function App(){
    // const navigation = useNavigation();
    // const isNagating = Boolean(navigation.location);
    return(
        <section className='max-w-lg mx-auto border mt-5 p-5'>
            <h1>Nayems Canvas</h1>
            <Nav />
            {/* {
                isNagating && <div>Loading...</div>
            } */}
            <Outlet />
            <Footer />
        </section>
    );
}