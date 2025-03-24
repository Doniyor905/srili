'use client';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';
import { Container } from './container';
import Link from 'next/link';
import { Language } from './language';
import { ChevronDown, Menu } from 'lucide-react';
import { InputSearch } from './input-search';

interface Props {
  className?: string;
}

const category = [
  { key: 'MALE', label: 'Erkek Parfümler' },
  { key: 'FEMALE', label: 'Kadın Parfümler' },
  { key: 'UNISEX', label: 'Unisex Parfümler' },
  { key: 'COSMETICS', label: 'Güzellik & Bakım' },
];

const navList = [
  { name: 'Ana sayfa', href: '/' },
  {
    name: 'Ürünler',
    href: null,
    hasDropdown: true,
    dropdownItems: category,
  },
  { name: 'Faliyetimiz', href: '/' },
  { name: 'İletişim', href: '/' },
];

export const Nav: React.FC<Props> = ({ className }) => {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const [openMenu, setOpenMenu] = React.useState(false);
  return (
    <div className={cn('bg-white shadow-md sm:relative z-50', className)}>
      <Container className="h-20 flex justify-between items-center">
        <Link href="/">
          <Image width={99} height={60} src="/assets/images/logo.svg" alt="Logo" />
        </Link>
        <ul
          className={
            openMenu === true
              ? 'sm:flex sm:gap-6 absolute sm:static top-[80px] transition-all p-4 left-0 justify-center items-center w-full bg-amber-50 sm:bg-white sm:h-[80px] h-[150px] flex-col sm:flex-row gap-3 z-10'
              : 'sm:flex sm:gap-6 absolute sm:static -top-[100%] transition-all p-4 left-0 justify-center items-center w-full bg-amber-50 sm:bg-white sm:h-[80px] h-[150px] flex-col sm:flex-row gap-3 z-10'
          }>
          {navList.map((item) => (
            <li
              key={item.name}
              onMouseEnter={() => item.dropdownItems && setIsDropdownOpen(true)}
              onMouseLeave={() => item.dropdownItems && setIsDropdownOpen(false)}
              className="relative after:block after:w-full after:h-[2px] after:bg-primary after:scale-x-0 after:origin-center after:transition-transform after:duration-300 hover:after:scale-x-100">
              <Link className="text-primary flex items-center gap-1" href={item.href || ''}>
                {item.name}
                {item.dropdownItems && <ChevronDown size={16} />}
              </Link>

              {item.dropdownItems && isDropdownOpen && (
                <ul className={'absolute z-10 left-0 w-48 bg-white shadow-lg'}>
                  {item.dropdownItems?.map((subItem, subIndex) => (
                    <li key={subIndex} className="border-b last:border-none">
                      <Link
                        href={`/category/${subItem.key.toLowerCase()}`}
                        className="block px-4 py-2 text-gray-800 hover:bg-secondary">
                        {subItem.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        <div className="flex gap-3 items-center">
          <InputSearch />
          <Language />
          <div className="sm:hidden block" onClick={() => setOpenMenu(!openMenu)}>
            <Menu />
          </div>
        </div>
      </Container>
    </div>
  );
};
