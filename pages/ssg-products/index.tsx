import Link from 'next/link';
import { BASE_URL } from '../api/constants'
import type { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(BASE_URL)
  const products = await res.json()
 
  return {
    props: {
      products,
    },
  }
}

export default function Products({ products }) {
    // const router = useRouter();
    return (
        <section>
            <h1>Products</h1>
            <div className="products">
                {products.map((product, idx) => (
                    <li className="products__item" key={idx}>
                        <Link href={'/ssg-products/' + product.id}>
                            <img src={product.image} alt={product.title} />
                            <h3>{product.title}</h3>
                        </Link>
                    </li>
                ))}
            </div>
        </section>
    );
}
