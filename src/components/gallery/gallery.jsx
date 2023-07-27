import Images from "./images";

const ImagesMap = () => {
  return (
    <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
      <div class="-m-1 flex flex-wrap md:-m-2">
        {Images &&
          Images.map((item) => (
            <div class="group flex w-1/3 flex-wrap">
              <div class=" w-full p-1 md:p-2 m-2">
                <img
                  alt="gallery"
                  class="flex h-64 md:h-80 lg:h-96 bg-white w-full rounded-lg object-cover object-center"
                  src={item.image}
                />
                <div className="px-2 py-2 text-white font-semibold italic text-center">
                  <h4>
                    <b4>{item.title}</b4>
                  </h4>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ImagesMap;
