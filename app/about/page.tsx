import Title from "@/components/Title";
import rocketImage from "@/public/assets/imgs/rocket_midjourney.jpeg";
import Image from "next/image";

export default function page() {
  const model = Array.from({ length: 12 });

  return (
    <div>
      <Title text="About" />
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {model.map((_, index) => (
            <div key={index} className="group relative">
              <div className="w-full h-80 bg-gray-200 rounded-lg overflow-hidden group-hover:opacity-75 lg:h-96 xl:h-80">
                <Image
                  src={rocketImage}
                  alt="rocket"
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-500">
                <a href="#" className="font-medium text-gray-900">
                  <span className="absolute inset-0" />
                  Rocket
                </a>
              </h3>
              <p className="mt-1 text-lg font-medium text-gray-900">
                Discover the stars
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
