import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

const CoffeCard = ({ coffee, coffees,setCoffees }) => {

    const { _id, name, qyantity, suppliar, taste, category, details, photo } = coffee;

    const handleDelete = _id => {

        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: "DELETE",

                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your coffee has been deleted.",
                                icon: "success"
                            });

                            const remaining = coffees.filter(cof => cof._id !== _id);
                            setCoffees(remaining)
                        }
                    })
            }
        });

    }


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
                        <Link to={`updateCoffee/${_id}`}>
                            <button className="btn btn-info">Edit</button>
                        </Link>
                        <button
                            onClick={() => handleDelete(_id)}
                            className="btn btn-error">XX</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeCard;