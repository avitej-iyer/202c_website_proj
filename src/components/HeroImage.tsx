import Image from 'next/image';

type Props = { src: string; alt: string };

const HeroImage = ({ src, alt }: Props) => {
  return (
    <div className="group relative w-64 h-64 sm:h-auto sm:w-auto">
      <div className="relative z-10 overflow-hidden rounded shadow-xl transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] motion-safe:group-hover:-translate-y-2 motion-safe:group-hover:rotate-[1.5deg] motion-safe:group-hover:scale-[1.025] motion-reduce:transition-none">
        <Image
          src={src}
          alt={alt}
          width={300}
          height={300}
          className="rounded"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-[-20%] -left-[55%] w-[35%] -skew-x-12 bg-gradient-to-r from-transparent via-white/35 to-transparent opacity-0 transition-all duration-700 ease-out motion-safe:group-hover:left-[120%] motion-safe:group-hover:opacity-100 motion-reduce:transition-none"
        />
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden translate-x-6 translate-y-6 rounded border-[3px] border-accent transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] motion-safe:group-hover:translate-x-3 motion-safe:group-hover:translate-y-3 motion-safe:group-hover:-rotate-[1deg] sm:block motion-reduce:transition-none"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-3 hidden sm:block"
      >
        <span className="absolute left-0 top-0 h-7 w-7 border-l-[3px] border-t-[3px] border-accent opacity-0 transition-all delay-75 duration-300 ease-out motion-safe:group-hover:-translate-x-1 motion-safe:group-hover:-translate-y-1 motion-safe:group-hover:opacity-100 motion-reduce:transition-none" />
        <span className="absolute right-0 top-0 h-7 w-7 border-r-[3px] border-t-[3px] border-accent opacity-0 transition-all delay-100 duration-300 ease-out motion-safe:group-hover:translate-x-1 motion-safe:group-hover:-translate-y-1 motion-safe:group-hover:opacity-100 motion-reduce:transition-none" />
        <span className="absolute bottom-0 left-0 h-7 w-7 border-b-[3px] border-l-[3px] border-accent opacity-0 transition-all delay-150 duration-300 ease-out motion-safe:group-hover:-translate-x-1 motion-safe:group-hover:translate-y-1 motion-safe:group-hover:opacity-100 motion-reduce:transition-none" />
        <span className="absolute bottom-0 right-0 h-7 w-7 border-b-[3px] border-r-[3px] border-accent opacity-0 transition-all delay-200 duration-300 ease-out motion-safe:group-hover:translate-x-1 motion-safe:group-hover:translate-y-1 motion-safe:group-hover:opacity-100 motion-reduce:transition-none" />
      </div>
    </div>
  );
};

export default HeroImage;
