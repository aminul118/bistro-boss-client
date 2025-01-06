import SectionTitle from "../../../components/SectionTitle";
import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AddItems = () => {
  const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
  const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key} `;
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    // Image upload to the Imagbb. Then send URL to the database
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    console.log(res.data);
    console.log(data);
    if (res.data.success) {
      const menuItem = {
        recipe: data.recipe,
        category: data.category,
        price: parseFloat(data.price),
        details: data.details,
        image: res.data.data.display_url,
      };
      const resMenu = await axiosSecure.post("/menu", menuItem);
      console.log(resMenu.data);
      if (resMenu.data.insertedId) {
        Swal.fire({
          title: "Good job!",
          text: "Product added sucessfully!",
          icon: "success",
        });
      }
    }
  };

  return (
    <div>
      <SectionTitle title="Add an Items" subtitle="What's new?" />
      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Recipe Name */}
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">Recipe Name*</span>
            </div>
            <input
              {...register("recipe")}
              type="text"
              placeholder="Recipe Name"
              className="input input-bordered w-full "
            />
          </label>
          <div className="flex gap-4 items-end">
            {/* Category Select */}
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">Select Category*</span>
              </div>
              <select
                {...register("category")}
                defaultValue=""
                className="select input-bordered w-full  "
              >
                <option value="" disabled>
                  Select category
                </option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soups">Soups</option>
                <option value="deserts">Deserts</option>
                <option value="drinks">Drinks</option>
              </select>
            </label>

            {/* Price */}
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">Price*</span>
              </div>
              <input
                {...register("price")}
                type="text"
                placeholder="Recipe Name"
                className="input input-bordered w-full "
              />
            </label>
          </div>

          {/* Details */}
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">Details*</span>
            </div>
            <textarea
              {...register("details")}
              type="text"
              placeholder="Recipe Name"
              className="input input-bordered w-full h-36"
            />
          </label>
          {/* File Input */}
          <input
            {...register("image")}
            type="file"
            className="file-input w-full "
          />

          {/* Submit button */}
          <button type="submit" className="btn btn-warning">
            <FaUtensils /> Add Item
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
