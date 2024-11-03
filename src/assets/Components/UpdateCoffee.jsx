import { useLoaderData } from "react-router-dom";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

const UpdateCoffee = () => {

    const coffee = useLoaderData();

    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;
    console.log(coffee);

    const handleUpdateCoffee = event => {
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const updatedCoffee = { name, quantity, supplier, taste, category, details, photo }

        console.log(updatedCoffee);

        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount>0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee Updated Successfully!',
                        icon: 'success', // lowercase
                        confirmButtonText: 'Done'
                    });
                }
            })

    }


    return (

        <div className=" bg-[#F4F3F0] p-24">
            <h1 className="text-3xl text-center font-semibold mt-8">Update Information of {name}</h1>

            <form onSubmit={handleUpdateCoffee}>

                {/* name and quantity row */}
                <div className="md:flex gap-8 my-8">

                    <div className="form-control md:w-1/2 mx-auto">
                        <label className="label font-semibold">
                            Coffee Name
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Coffee Name" defaultValue={name} className="input input-bordered w-full" />
                        </label>
                    </div>


                    <div className="form-control md:w-1/2 mx-auto">
                        <label className="label font-semibold">
                            Available Quantity
                        </label>
                        <label className="input-group">
                            <input type="text" name="quantity" placeholder="Available Quantity" defaultValue={quantity} className="input input-bordered w-full" />
                        </label>
                    </div>


                </div>


                {/* supplier and taste */}

                <div className="md:flex gap-8 my-8">

                    <div className="form-control md:w-1/2 mx-auto">
                        <label className="label font-semibold">
                            Supplier Name
                        </label>
                        <label className="input-group">
                            <input type="text" name="supplier" placeholder="Supplier Name" defaultValue={supplier} className="input input-bordered w-full" />
                        </label>
                    </div>


                    <div className="form-control md:w-1/2 mx-auto">
                        <label className="label font-semibold">
                            Taste
                        </label>
                        <label className="input-group">
                            <input type="text" name="taste" placeholder="Taste" defaultValue={taste} className="input input-bordered w-full" />
                        </label>
                    </div>

                </div>


                {/* category And details */}
                <div className="md:flex gap-8 my-8">

                    <div className="form-control md:w-1/2 mx-auto">
                        <label className="label font-semibold">
                            Category
                        </label>
                        <label className="input-group">
                            <input type="text" name="category" placeholder="Category" defaultValue={category} className="input input-bordered w-full" />
                        </label>
                    </div>


                    <div className="form-control md:w-1/2 mx-auto">
                        <label className="label font-semibold">
                            Details
                        </label>
                        <label className="input-group">
                            <input type="text" name="details" defaultValue={details} placeholder="Details" className="input input-bordered w-full" />
                        </label>
                    </div>


                </div>

                <div className="form-control md:w-full mx-auto">
                    <label className="label font-semibold">
                        Photo URL
                    </label>
                    <label className="input-group">
                        <input type="text" name="photo" placeholder="Photo URL" defaultValue={photo} className="input input-bordered w-full" />
                    </label>
                </div>

                <input type="submit" value="Update Coffee" className="btn btn-block my-12 bg-[#D2B48C]" />


            </form>

            <Link to='/'><button className='btn bg-[#D2B48C] content-center'>Home</button></Link>
        </div>
    );
};

export default UpdateCoffee;