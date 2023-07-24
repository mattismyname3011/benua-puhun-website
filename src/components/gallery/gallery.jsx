import Images from "./images";

const ImagesMap = () => {
  return (
    <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
      <div class="-m-1 flex flex-wrap md:-m-2">
        {Images &&
          Images.map((item) => (
            <div class="flex w-1/3 flex-wrap">
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src={item.image}
                />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ImagesMap;
