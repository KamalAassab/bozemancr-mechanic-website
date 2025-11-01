import Image from "next/image";

export const GlobalBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 h-full w-full overflow-hidden">
      <Image
        src="/images/hero/hero5.jpg"
        alt="Background"
        fill
        quality={75}
        priority
        className="object-cover brightness-[0.4] contrast-[1.1]"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-black/10 pointer-events-none"></div>
    </div>
  );
};
