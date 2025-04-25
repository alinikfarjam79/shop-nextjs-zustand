import DetailSlider from "@/components/DetailSlider";
import ProductInformation from "@/components/ProductInformation";
import { RiArrowGoBackLine } from "react-icons/ri";
import { CiCreditCard1 } from "react-icons/ci";
import { applyDiscount, formatTomanFa } from "@/helper/functions";
import { FaBox } from "react-icons/fa";
import { IoWallet } from "react-icons/io5";
import { AiFillShop } from "react-icons/ai";
import AddButton from "@/components/AddButton";
export async function generateStaticParams() {
  const res = await fetch(
    "https://67f53936913986b16fa3c7b5.mockapi.io/products"
  );
  const products = await res.json();

  return products.map((product) => ({
    id: product.id,
  }));
}
async function getProduct(id) {
  const data = await fetch(
    `https://67f53936913986b16fa3c7b5.mockapi.io/products?id=${id}`
  );
  const product = await data.json();
  return product;
}
async function DetailProduct({ params }) {
  const services = [
    {
      title: "امکان بازگشت کالا",
      text: "تا 14 روز",
      icon: FaBox,
    },
    {
      title: "پرداخت درب محل",
      text: "فقط برای شهر تهران",
      icon: IoWallet,
    },
    {
      title: "خرید حضوری (حتی در روزهای تعطیل)",
      text: "18 شعبه در تهران (کلیک کنید)",
      icon: AiFillShop,
    },
    {
      title: "ارسال به سراسر ایران",
      text: "تهران با پیک | شهرستان با پست",
      icon: FaBox,
    },
  ];
  const { id } = await params;

  const product = await getProduct(id);
  return (
    <div className="w-full mx-auto mt-6">
      <div className="w-[100%] p-3 flex flex-col md:flex-row justify-center gap-2 rounded-xl  border border-gray-500/30">
        <div className="w-full md:w-[60%] xl:w-[70%] flex flex-col  p-3">
          <p className="text-xl">{product[0].Persian_title}</p>
          <div className="w-full flex flex-wrap">
            <div className="w-full xl:w-[60%] py-3 border-l border-gray-500/30 ">
              <DetailSlider images={product[0].image} />
            </div>
            <div className="w-full xl:w-[40%] h-[600px] flex flex-col gap-8 p-5">
              <ProductInformation product={product[0]} />
            </div>
          </div>
        </div>
        <div className="w-full md:w-[40%] xl:w-[28%] flex flex-col items-center  gap-5 py-5">
          <div className="w-[90%] flex  gap-4 p-3 border-b border-gray-400/40">
            <RiArrowGoBackLine className="text-blue-700 text-xl" />
            <p>ضمانت ویژه ۱۴ روز مهلت بازگشت</p>
          </div>
          <div className="w-[90%] flex  gap-4 p-3 border-b border-gray-400/40">
            <CiCreditCard1 className="text-blue-700 text-3xl" />
            <p>ضمانت ویژه ۱۴ روز مهلت بازگشت</p>
          </div>
          <div className="w-full flex flex-col mt-2 justify-start items-end px-4">
            <p className="text-sm text-gray-400 line-through">
              {formatTomanFa(parseInt(product[0].price))}
            </p>
            <div className="flex w-full items-center justify-between mt-4">
              <span className="bg-red-500 text-white rounded text-base p-1">
                {product[0].discount}
              </span>
              <p className="text-xl">
                {formatTomanFa(
                  applyDiscount(
                    parseInt(product[0].price),
                    parseInt(product[0].discount)
                  )
                )}
              </p>
            </div>
          </div>
          <AddButton product={product[0]} />
        </div>
      </div>
      <div className="hidden md:w-[100%] border gap-3 md:flex p-4 mt-8 rounded-xl border-gray-500/30 mb-4">
        {services.map((service, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center gap-6 border border-gray-500/30 p-3 py-8 rounded-xl w-[26%]"
            >
              {<service.icon className="text-2xl text-blue-700" />}
              <p className="font-bold">{service.title}</p>
              <p className="text-sm">{service.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DetailProduct;
