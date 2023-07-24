const Pdf = () => {
  return (
    <>
      <div className="w-full md:w-3/4 flex flex-row mx-auto text-white justify-evenly">
        <embed
          src="./src/components/header/docs.pdf"
          width="100%"
          height="800px"
          type=""
        />
      </div>
    </>
  );
};

export default Pdf;
