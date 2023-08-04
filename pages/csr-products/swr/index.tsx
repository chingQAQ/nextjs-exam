import React from 'react';
import useSWR from 'swr';
import Link from 'next/link';

const fetcher = (url) => fetch('https://fakestoreapi.com' + url).then((res) => res.json());

export default function Page() {
    const { data: products} = useSWR('/products', fetcher) as any;

    if (!products) {
        return null;
    }

    return (
        <section>
            <h1>Products</h1>
            <div className="products">
                {products.map((product, idx) => (
                    <li className="products__item" key={idx}>
                        <Link href={'/csr-products/swr/' + product.id}>
                            <img src={product.image} alt={product.title} />
                            <h3>{product.title}</h3>
                        </Link>
                    </li>
                ))}
            </div>
        </section>
    );
}
