const VisiMisi = () => {
  return (
    <div className="wrapper pb-36">
      {/* bg-gradient-to-r from-green-400 to-cyan-500 */}
      <div className="lg:w-auto h-40 flex items-center justify-center">
        <span class="text-5xl italic font-semibold whitespace-nowrap text-white">
          <p class="underline ">Visi dan Misi</p>
          <div class="animate__animated animate__lightSpeedInRight mx-auto lg:mx-0 w-full pt-3 border-b-2 border-black opacity-25"></div>
        </span>
      </div>

      <div class="italic w-full h-80 flex flex-col items-center justify-center text-white">
        <span class="  w-full md:w-2/4 self-center text-lg font-semibold whitespace-nowrap rounded-md ">
          <div>Visi</div>
          <div class="pl-14  w-full text-md self-center sm:text-lg font-semibold whitespace-nowrap ">
            "Mewujudkan Desa Benua Puhun Yang Mandiri, Maju, Damai dan
            Sejahtera"
          </div>
        </span>
        <span class="  w-full md:w-2/4 self-center text-lg font-semibold whitespace-nowrap ">
          <div>Misi</div>
          <div class="pl-14  w-full text-md self-center sm:text-lg font-semibold whitespace-nowrap rounded-md ">
            • Meningkatkan pelayanan yang partisipatif dan berkelanjutan.
            <br />
            • Bersama masyarakat dan kelembagaan desa dalam meningkatkan
            kesejahteraan masyarakat.
            <br />
            • Meningkatkan infrastruktur jalan dan pembangunan.
            <br />
            • Meningkatkan pembangunan ekonomi kerakyatan berbasis pertanian,
            perkebunan dan perikanan.
            <br />• Peningkatan pembinaan pemuda dan pemberdayaan perempuan di
            berbagai bidang.
          </div>
        </span>
      </div>
    </div>
  );
};

export default VisiMisi;
