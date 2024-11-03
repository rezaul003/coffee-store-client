import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {

    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "bg-[#E3B577]",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        })
        .then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE'

                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "This Coffee has been deleted.",
                                icon: "success"
                            })
                           
                        
                        }
                        const remaining = coffees.filter(cof => cof._id !== _id);
                        setCoffees(remaining);
                        console.log(remaining);
                    })
            }
        });



    }
    return (
        <div className="flex items-center justify-between gap-x-8 bg-[#F5F4F1] rounded-md md:p-4">


            <div>
                <img src={photo} alt="" />
            </div>

            <div className="gap-6">
                <h1 className="py-1"><span className="font-semibold justify-center">Name:</span> {name}</h1>
                <h1 className="py-1"><span className="font-semibold justify-center">Supplier:</span> {supplier}</h1>
                <h1 className="py-1"><span className="font-semibold justify-center">details</span> {details}</h1>
                <h1 className="py-1"><span className="font-semibold justify-center">Quantity:</span> {quantity} pcs</h1>
            </div>

            <div className="join join-vertical justify-end gap-3">
                <button className="btn  bg-[#E3B577]">View</button>
                <button className="btn  bg-[#E3B577]"><Link to={`updateCoffee/${_id}`}>Edit</Link></button>
                <button onClick={() => handleDelete(_id)} className="btn bg-[#E3B577]">X</button>
            </div>


        </div>
    );
};

export default CoffeeCard;