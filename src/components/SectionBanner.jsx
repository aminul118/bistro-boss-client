const SectionBanner = ({ image, tittle, text, backgroundColour }) => {
  return (
    <div
      className="bg-cover bg-center py-12 lg:py-40 "
      style={{ backgroundImage: `url(${image})` }}
    >
      <div
        className={`max-w-2xl w-full mx-auto text-center p-6 space-y-3  ${backgroundColour}`}
      >
        <h1 className="text-4xl uppercase">{tittle}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default SectionBanner;
