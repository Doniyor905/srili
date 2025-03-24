import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Container } from './container';
import { Instagram, Mail } from 'lucide-react';

interface Props {
  className?: string;
}

export const Footer: React.FC<Props> = ({ className }) => {
  return (
    <div className="bg-secondary p-7">
      <Container>
        <div className={cn('flex justify-around items-center', className)}>
          <div className="w-[280px]">
            <Image src="/assets/images/footer-logo.png" alt="Logo" width={200} height={130} />
            <p className="mt-2 text-[14px] text-[#9A9A9A]">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Ipsum is
              simply dummy text of the printing and typesetting industry.
            </p>
          </div>
          <div className="flex justify-around w-[50%]">
            <div>
              <h3 className="text-2xl font-bold">Srılı Parfüm</h3>
              <ul className="mt-2">
                <li className="text-[#9A9A9A]">
                  <Link href="#!">Hakkımızda</Link>
                </li>
                <li className="text-[#9A9A9A]">
                  <Link href="#!">Faliyetimiz</Link>
                </li>
                <li className="text-[#9A9A9A]">
                  <Link href="#!">İletişim</Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold">Kategoriler</h3>
              <ul className="mt-2">
                <li className="text-[#9A9A9A]">
                  <Link href="#!">Erkek parfümler</Link>
                </li>
                <li className="text-[#9A9A9A]">
                  <Link href="#!">Kadın parfümler</Link>
                </li>
                <li className="text-[#9A9A9A]">
                  <Link href="#!">Başka ürünler</Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold">İletişim</h3>
              <ul className="mt-2">
                <li className="text-[#9A9A9A]">
                  <Link
                    className="flex items-center gap-2"
                    href="https://www.instagram.com/srilicosmetic/">
                    <Instagram size={16} />
                    srilicosmetic
                  </Link>
                </li>
                <li className="text-[#9A9A9A]">
                  <Link className="flex items-center gap-2" href="tel:+905308999912">
                    <Image width={16} height={16} src="/assets/whatsapp-icon.svg" alt="Whatsapp" />0
                    <p>530 899 99 12</p>
                  </Link>
                </li>
                <li className="text-[#9A9A9A] ">
                  <Link className="flex items-center gap-2" href="#!">
                    <Mail size={16} />
                    İletişim
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
