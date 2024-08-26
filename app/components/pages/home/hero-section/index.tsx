'use client';

import Image from 'next/image';
import { TechBadge } from '../../../tech-badge';
import { Button } from '../../../button';
import { HiArrowNarrowRight } from 'react-icons/hi';
import {
  TbBrandGithub,
  TbBrandLinkedin,
  TbBrandYoutube,
  TbBrandWhatsapp,
} from 'react-icons/tb';

const MOCK_CONTACTS = [
  { url: 'http://github.com.br', icon: <TbBrandGithub /> },
  { url: 'http://github.com.br', icon: <TbBrandLinkedin /> },
  { url: 'http://github.com.br', icon: <TbBrandYoutube /> },
  { url: 'http://github.com.br', icon: <TbBrandWhatsapp /> },
];

export const HeroSection = () => {
  const handleContact = () => {
    const contactSection = document.querySelector('#contact');

    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section className="w-full lg:h-[755px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-10 sm:pb-32 py-32 lg:pb-[110px]">
      <div className="container flex items-start justify-between flex-col-reverse lg:flex-row">
        <div className="w-full lg:max-w-[530px]">
          <p className="font-mono text-emerald-400 ">Olá, meu nome é</p>
          <h2 className="text-4xl font-medium mt-2">Jander Liborio</h2>
          <p className="text-gray-400 my-6 text-sm sm:text-base">
            Olá, meu nome é Jander Liborio e sou um desenvolvedor front-end
            apaixonado por tecnologia. Com mais de 2 anos de experiência. Meu
            objetivo é criar interfaces de usuário bonitas e funcionais, além de
            liderar equipes técnicas em projetos desafiadores. Estou sempre
            aberto a novas oportunidades e desafios.
          </p>

          <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">
            {Array.from({ length: 5 }).map((_, index) => (
              <TechBadge name="Nest.js" key={`tect-${index}`} />
            ))}
          </div>

          <div className="mt-6 lg:mt-10 flex sm:items-center sm:gap-5 flex-col sm:flex-row">
            <Button className="w-max shadow-button" onClick={handleContact}>
              Entre em contato <HiArrowNarrowRight size={18} />
            </Button>

            <div className="text-2xl text-gray-600 flex items-center h-20 gap-3">
              {MOCK_CONTACTS.map((contact, index) => (
                <a
                  href={contact.url}
                  key={`contact-${index}`}
                  target="_blank"
                  className="hover:text-gray-100 transition-colors"
                  rel="noreferrer"
                >
                  {contact.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <Image
          width={420}
          height={404}
          src="/images/fotojped.jpeg"
          alt="foto de perfil do jander liborio"
          className="w-[300px] h-[300px] lg:w-[420px] lg:h-[404px] mb-6 lg:mb-0 shadow-2xl rounded-lg object-cover"
        />
      </div>
    </section>
  );
};
