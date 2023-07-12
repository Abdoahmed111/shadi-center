import Image from "next/image";

export default function Header() {
  return (
    <div
      className="relative isolate overflow-hidden bg-green-100 py-24 font-elmessiri"
      dir="rtl"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between px-6 md:flex-row lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-black sm:text-6xl">
            مركز شادي للطب البديل
          </h2>
          <p className="mt-6 text-lg leading-8 text-black">
            مركز شادي للطب البديل يقدم عدة خدمات منها الحجامة والابر الصينية
          </p>
        </div>
        <div className="h-100 w-100 rounded-2xl border-2 border-white bg-white object-cover shadow-2xl">
          <Image
            width={100}
            height={100}
            src="/dr-alaa-1.png"
            alt="Dr Alaa"
            className="object-fit h-[350px] w-[280px] rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
}
