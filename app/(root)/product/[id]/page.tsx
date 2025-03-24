import { Container } from '@/components/shared/container';
import { Footer } from '@/components/shared/footer';
import { TableProduct } from '@/components/shared/table-product';
import { Button } from '@/components/ui/button';
import { categoryLabels } from '@/constants/categories';
import { prisma } from '@/prisma/prisma-client';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default async function ProductPage({ params }: { params: { id: string } }) {
  const id = params.id;

  const product = await prisma.product.findFirst({
    where: { id: Number(id) },
  });

  if (!product) {
    return notFound();
  }
  return (
    <>
      <Container className="mt-[50px] mb-[100px]">
        <div className="flex justify-around">
          <div className="max-w-[500px]">
            <Image width={420} height={500} src={product.imageUrl} alt={product.name_tr} />
          </div>
          <div>
            <h2 className="text-[26px] font-bold mb-2">{product.name_tr}</h2>
            <p className="w-[500px] mb-3">{product.description_tr}</p>
            <Link href="#!">
              <Button className="w-[200px] h-[50px] cursor-pointer">İletişime geç</Button>
            </Link>
          </div>
        </div>
        <div>
          <TableProduct
            category={categoryLabels[product.category]}
            size={product.size}
            koku={product.smellProduct_tr}
          />
        </div>
      </Container>
      <Footer />
    </>
  );
}
