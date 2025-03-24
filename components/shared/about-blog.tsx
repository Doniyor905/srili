'use client';
import { cn } from '@/lib/utils';
import React from 'react';
import { Title } from './title';
import Image from 'next/image';
import { Container } from './container';
import Link from 'next/link';
import { MoveRight } from 'lucide-react';
import { Api } from '@/services/api-client';
import { About } from '@prisma/client';
interface Props {
  className?: string;
}

export const AboutBlog: React.FC<Props> = ({ className }) => {
  const [about, setAbout] = React.useState<About[]>([]);
  React.useEffect(() => {
    async function fetchAbout() {
      try {
        const about = await Api.about.getAll();
        setAbout(about);
      } catch (error) {
        console.log(error);
      }
    }
    fetchAbout();
  }, []);
  const truncateText = (str: string) => {
    if (str.length >= 200) {
      return str.substring(0, 200) + '...';
    }
    return str;
  };
  return (
    <Container>
      <div className={cn('h-[800px] mt-12', className)}>
        <Title text="Biz Kimiz?" />
        <div className="mt-10 flex justify-around">
          {about.map((person, index) => (
            <div key={index} className="w-[350px]">
              <Image src={person.imageUrl} alt="image" width={350} height={350} />
              <h2 className="text-xl font-bold mt-2 mb-2">{person.title}</h2>
              <h3 className="uppercase text-primary font-bold text-[18px]">{person.name}</h3>
              <p className="text-base text-[#858585] mt-1 mb-2">{truncateText(person.text)}</p>
              <Link
                className="group flex items-center text-primary text-xl gap-2"
                href={`/about/${person.personId}`}>
                Devami oku <MoveRight className="group-hover:translate-x-1 transition" size={20} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};
