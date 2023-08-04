import Link from 'next/link';
import { fetchAllProduct } from '../api/products'
import type { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async () => {
  const products = await fetchAllProduct();
 
  return {
    props: {
      products,
    },
  }
}

export default function Page({ products }) {
    return (
        <section>
            <h1>Products</h1>
            <div className="products">
                {products.map((product, idx) => (
                    <li className="products__item" key={idx}>
                        <Link href={'/isr-products/' + product.id}>
                            <img src={product.image} alt={product.title} />
                            <h3>{product.title}</h3>
                        </Link>
                    </li>
                ))}
            </div>
        </section>
    );
}
