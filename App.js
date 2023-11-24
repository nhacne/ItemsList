import './App.css';

const itemList = () => {
    const item = [
        {
            id: 1,
            Image: ' https://picsum.photos/200/300',
            name: 'Item 1',
            price: 23.99,
            rating: 3.5,
        },
        {
            id: 2,
            Image: ' https://picsum.photos/200/300',
            name: 'Item 2',
            price: 22.99,
            rating: 3.5,

        },
        {
            id: 3,
            Image: ' https://picsum.photos/200/300',
            name: 'Item 3',
            price: 25.99,
            rating: 3.5,
        },
        {
            id: 4,
            Image: ' https://picsum.photos/200/300',
            name: 'Item 4',
            price: 26.99,
            rating: 3.5,
        },
        {
            id: 5,
            Image: ' https://picsum.photos/200/300',
            name: 'Item 5',
            price: 27.99,
            rating: 3.5,
        },
        {
            id: 6,
            Image: ' https://picsum.photos/200/300',
            name: 'Item 6',
            price: 25.99,
            rating: 4.5,
        },
        {
            id: 7,
            Image: ' https://picsum.photos/200/300',
            name: 'Item 7',
            price: 25.88,
            rating: 4.5,
        },
        {
            id: 8,
            Image: 'https://picsum.photos/200/300',
            name: 'Item 8',
            price: 25.9,
            rating: 4.5,
        },
    ]

    return (
        <div className="container-fluid" >
            <div className="container">
                <div className="row">
                    {item.map((Item, index) => (
                        <div className="col-lg-3 text-center px-5 py-2 "  >
                        <div style={{ border: "1px solid #9a9595"   }} className="p-3" >
                            <img src={Item.Image} />
                            <p>{Item.name}</p>
                            <p>Price: ${Item.price}</p>
                            <p>Rating: {Item.rating}</p>
                       </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default itemList;