const Cover = ({ image, tittle, text, backgroundColour }) => {
  return (
    <div
      className="hero h-[700px]"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className={`bg-opacity-60`}></div>
      <div
        className={`hero-content  text-center lg:w-full lg:max-w-2xl ${backgroundColour}`}
      >
        <div className="max-w-2xl p-6">
          <h1 className="mb-5 text-5xl font-bold uppercase">{tittle}</h1>
          <p className="mb-5">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Cover;
