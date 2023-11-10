import Swal from 'sweetalert2'

const AddCoffe = () => {
    const handleAddCoffe = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const qyantity = form.qyantity.value;
        const suppliar = form.suppliar.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffe = { name, qyantity, suppliar, taste, category, details, photo };
        console.log(newCoffe);

        // Send data to the server

        fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newCoffe)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'success!',
                        text: 'User Added successfully',
                        icon: 'success',
                        confirmButtonText: 'OK',
                    })
                }
            })

    }
    return (
        <div className="bg-[#F4F3F0] p-24">
            <h2 className="text-3xl font-extrabold">Add Coffe</h2>

            <form onSubmit={handleAddCoffe}>
                {/* from row coffe */}
                <div className="md:flex mb-8">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Coffe Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="coffe Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="qyantity" placeholder="Available Quantity" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* from supliar row */}
                <div className="md:flex mb-8">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Suppliar Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="suppliar" placeholder="Suppliar Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="taste" placeholder="Teast" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* from category and details */}
                <div className="md:flex mb-8">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="category" placeholder="Category" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="details" placeholder="Details" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* from photo Url row  */}
                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" placeholder="photo url" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <input type="submit" value="Add Coffe" className="btn btn-block bg-black text-white" />
            </form>
        </div>


    );
};

export default AddCoffe;