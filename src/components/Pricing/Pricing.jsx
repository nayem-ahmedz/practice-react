import { use } from 'react';
import Price from './Price';

export default function Pricing({pricingPromise}){
    // const pricingData = use(pricingPromise);
    const pricingDataPromise = use(pricingPromise);
    const pricingData = pricingDataPromise.data;
    return(
        <section>
            <h3 className='text-center text-3xl my-4 font-bold'>My Pricing</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6'>
                {
                    pricingData.pricing_plans.map(price => <Price key={price.id} price={price} />)
                }
            </div>
        </section>
    );
}