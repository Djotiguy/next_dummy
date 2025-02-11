import { Ayah, Surah } from "@/lib/type";

export default async function CoranDisplay()  {
    const data = await fetch("http://api.alquran.cloud/v1/quran/quran-uthmani");
    const response = await data.json();
    const surahs = response.data.surahs;
  return (
    <div>
 <ul className="flex justify-center items-center flex-col gap-y-4">
        {surahs.map((surah: Surah) => (
          <li key={surah.number}>
            <h1 className=" py-4 font-bold text-2xl">{surah.name} | {surah.englishName}</h1>
            <h2 className=" py-4  font-bold text-2xl"> {surah.englishNameTranslation} </h2>
            <ul className=" max-w-[500px] gap-y-4">
              {surah.ayahs.map((ayah: Ayah) => (
                // Ajout d'une clé unique pour chaque verset (Ayah)
                <li className="grid grid-cols-1" key={ayah.number}>
                    <p className="text-xl">{ayah.text}</p>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  )
}
