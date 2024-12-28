const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="text-center py-8">
      <p className="py-2 text-yellow-500 italic">---{subtitle}---</p>
      <h1 className="text-4xl  border-y-2 w-96 mx-auto py-3 uppercase">
        {title}
      </h1>
    </div>
  );
};

export default SectionTitle;
