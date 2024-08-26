import Image from 'next/image';

const sections = [
  {
    title: 'Login',
    image: 'http://media.graphassets.com/7Kic5YHkQcmGrN57MSXw',
  },
  {
    title: 'Home',
    image: 'http://media.graphassets.com/7Kic5YHkQcmGrN57MSXw',
  },
];

export const ProjectSection = () => {
  return (
    <section className="container my-12 md:,y-32 flex flex-col gap-8 md:gap-32">
      {sections.map((section) => (
        <div
          key={section.title}
          className="flex flex-col items-center gap-6 md:gap-12"
        >
          <h2 className="text-2xl md:text-3xl font-medium text-gray-300">
            {section.title}
          </h2>

          <Image
            src={section.image}
            width={1080}
            height={672}
            className="w-full aspect-auto rounded-lg object-cover"
            alt={`Imagem da sessão ${section.title}`}
            unoptimized
          />
        </div>
      ))}
    </section>
  );
};
