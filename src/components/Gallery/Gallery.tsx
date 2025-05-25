import instafoto1 from "../../../public/img/instafoto1.webp";
import instafoto2 from "../../../public/img/instafoto2.webp";
import instafoto3 from "../../../public/img/instafoto3.webp";
import instafoto4 from "../../../public/img/instafoto4.webp";


function Gallery() {
  return (
    <>
      <section className="h-[40vh] flex justify-center items-center">
      <div className="flex w-full h-full">
        <figure className="w-full h-full">
          <img src={instafoto1} alt="" className="w-full h-full object-cover object-[center_70%]" />
        </figure>
        <figure className="w-full h-full">
          <img src={instafoto2} alt="" className="w-full h-full object-cover object-[center_40%]" />
        </figure>
        <figure className="w-full h-full">
          <img src={instafoto3} alt="" className="w-full h-full object-cover object-[center_80%]" />
        </figure>
        <figure className="w-full h-full">
          <img src={instafoto4} alt="" className="w-full h-full object-cover object-[center_60%]" />
        </figure>
      </div>
    </section>
    </>
  );
}

export default Gallery;
