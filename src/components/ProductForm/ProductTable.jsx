export default function PorductTable({ products }) {
    return (
        <div className="mt-10">
            <h3>Product : {products.length}</h3>
            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 max-w-lg mt-3">
                <table className="table">
                    <thead>
                        <tr>
                            <td>Serial</td>
                            <td>Name</td>
                            <td>Price</td>
                            <td>Quantity</td>
                            <td>Status</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((item, index) => <tr key={index}>
                                <td> {index} </td>
                                <td> {item.name} </td>
                                <td> {item.price} </td>
                                <td> {item.quantity} </td>
                                <td> - </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}