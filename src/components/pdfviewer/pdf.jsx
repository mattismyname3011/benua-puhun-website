const Pdf = () => {
  return (
    <>
      <div className="w-full md:w-3/4 flex flex-row mx-auto text-white justify-evenly">
        {/* <div className="uppercase text-lg">TES</div> */}
        <embed
          // src="./src/components/header/docs.pdf#toolbar=0"
          src="./src/components/header/docs.pdf"
          width="100%"
          height="800px"
          type=""
        />
        {/* <embed src="./src/components/header/docs.pdf" type="" /> */}
      </div>
    </>
  );
};

export default Pdf;
