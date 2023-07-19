import Header from "../header/header";
import Pdf from "../pdfviewer/pdf";
import Footer from "../footer/footer";

const Docs = () => {
  return (
    <>
      <Header></Header>
      <Pdf></Pdf>
      <Footer></Footer>
      {/* <embed
        src="./src/components/header/docs.pdf#toolbar=0"
        width="70%"
        height="800px"
        type=""
      /> */}
      {/* <embed src="./src/components/header/docs.pdf" type="" /> */}
    </>
  );
};

export default Docs;
