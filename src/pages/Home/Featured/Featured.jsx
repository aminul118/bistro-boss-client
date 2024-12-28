import SectionTitle from "../../../components/SectionTitle";
import featured from "../../../assets/home/featured.jpg";

const Featured = () => {
  return (
    <div className="bg-featured-img bg-fixed bg-cover bg-center bg-no-repeat text-white  ">
      <div className="bg-black bg-opacity-50 py-24">
        {/* Section Title */}
        <SectionTitle subtitle="Check it out" title="FROM OUR MENU" />

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row items-center gap-10 px-8 max-w-7xl mx-auto">
          {/* Image */}
          <img
            className="w-full lg:w-1/3 rounded-lg shadow-lg"
            src={featured}
            alt="Featured Dish"
          />

          {/* Description */}
          <div className="lg:w-1/2 text-justify ">
            <h2 className="text-2xl">Where Can i get some?</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              nostrum, aut omnis natus et vitae repellat fuga doloribus,
              corporis ad facilis voluptatem minima cum animi earum beatae
              eveniet. Omnis harum nemo facere quibusdam. Sapiente molestiae
              soluta dignissimos iusto, architecto labore obcaecati neque eius,
              consequuntur eligendi provident earum. Minus, necessitatibus sed
              dolores asperiores qui repellendus cumque? Illo, quaerat eligendi
              fuga deleniti assumenda debitis labore laboriosam earum error,
              quae, ratione praesentium.
            </p>
            <button className="btn btn-outline border-0  border-b-2 text-white">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
