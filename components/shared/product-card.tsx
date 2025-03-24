import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface Props {
  className?: string;
  id?: number;
  title: string;
  imageUrl: string;
  text: string;
}

export const ProductCard: React.FC<Props> = ({ id, imageUrl, title, text, className }) => {
  return (
    <div className={cn('w-[280px] flex flex-col justify-between bg-white p-3 ', className)}>
      <Image width={280} height={330} src={imageUrl} alt={title} />
      <h2 className="text-[20px] text-black font-semibold mb-2">{title}</h2>
      <p className="text-sm text-[#9A9A9A] mb-2">{text}</p>
      <Link
        className="w-full h-[44px] border-2 border-primary hover:bg-transparent transition hover:text-primary bg-primary text-white flex justify-center items-center"
        href={`/product/${id}`}>
        Ürünü bak
      </Link>
    </div>
  );
};
