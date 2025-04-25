import CategorySlider from "@/components/CategorySlider"
import Slider from "../components/MainSlider"
import SliderSection from "@/components/SliderSection";


async function GetAllProduct() {
  const data = await fetch('https://67f53936913986b16fa3c7b5.mockapi.io/products')
  const results = data.json();
  return results;
}
async function Home() {
  const products = await GetAllProduct();
  return (
    <div>
      <div className="w-full flex justify-center items-center h-96 mt-6">
        <Slider />
      </div>
      <div className="w-full h-52 mt-6">
        <CategorySlider />
      </div>
      {/* plazTime section */}
      <div className="w-full h-[560px]  mt-4 ParentSlider">
        <SliderSection products={products.slice(0, 10)} title={'پلازا تایم'} />
      </div>
      {/* best seller laptop section */}
      <div className="w-full h-[560px]  mt-4 ParentSlider">
        <SliderSection products={products.filter((item) => item.category == 'لپ‌تاپ')} title={'فروش ویژه لپ تاپ'} />
      </div>
      {/* poster */}
      <div className="w-full h-82 px-9 mt-12 rounded-2xl">
        <img src="https://plazadigital.ir/wp-content/uploads/2025/04/Monitor-Desktop-scaled.avif" className="w-full h-full rounded-2xl" />
      </div>
      {/* best headphone section */}
      <div className="w-full h-[560px]  mt-4 ParentSlider">
        <SliderSection products={products.filter((item) => item.category == 'هدفون')} title={'فروش ویژه هدفون'} />
      </div>
      {/* poster */}
      <div className="w-full h-78 px-9 mt-12 rounded-2xl flex gap-4">
        <img src="https://plazadigital.ir/wp-content/uploads/2025/04/Twin-tablet02.avif" className="w-[49%] h-full rounded-2xl" />
        <img src="https://plazadigital.ir/wp-content/uploads/2025/04/Twin-watch.avif" className="w-[49%] h-full rounded-2xl" />
      </div>
      <div className=" flex items-center  justify-center  py-3  mt-3">
        <p className="text-xl">developed by <a href="https://github.com/alinikfarjam79/shop-nextjs-zustand" target="_blank" className="text-blue-600">AliNikfarjam</a></p>
      </div>
    </div>
  )
}

export default Home
