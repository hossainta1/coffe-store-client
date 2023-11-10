

const CoffeCard = ({ coffee }) => {

    const { name, qyantity, suppliar, taste, category, details, photo } = coffee;
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img src={photo} alt="Movie" /></figure>
            <div className="flex justify-between w-full pr-4">
                <div>
                    <h2 className="card-title">Name:{name}</h2>
                    <p>Quantity:{qyantity}</p>
                    <p>Suppliar:{suppliar}</p>
                    <p>Taste: {taste}</p>
                </div>
                <div className="card-actions justify-end">
                    <div className="btn-group btn-group-vertical space-y-4">
                        <button className="btn btn-active">View</button>
                        <button className="btn btn-info">Edit</button>
                        <button className="btn btn-error">XX</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeCard;