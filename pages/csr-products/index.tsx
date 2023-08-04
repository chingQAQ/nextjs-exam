import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { fetchAllProduct } from '../api/products'

export default function Page() {
    const [products, setProducts] = useState(null) as any;

    useEffect(() => {
        fetchAllProduct().then(setProducts);
    }, []);

    if (!products) {
        return null;
    }

    return (
        <section>
            <h1>Products</h1>
            <div className="products">
                {products.map((product, idx) => (
                    <li className="products__item" key={idx}>
                        <Link href={'/csr-products/' + product.id}>
                            <img src={product.image} alt={product.title} />
                            <h3>{product.title}</h3>
                        </Link>
                    </li>
                ))}
            </div>
        </section>
    );
}
