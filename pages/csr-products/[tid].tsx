import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { fetchProduct } from '../api/products'
import Link from 'next/link';

export default function Page() {
    const [product, setProduct] = useState(null) as any;
    const router = useRouter();

    useEffect(() => {
        if (!router.query.tid) {
            return;
        }

        fetchProduct(router.query.tid).then((product) => {
            // setProduct(product)

            // 跟 SWR 比較用的
            setTimeout(() => {
                setProduct(product)
            }, 2000);
        });
    }, [router]);

    if (!product) {
        return <div>找不到你要的商品喔喔喔喔喔ㄛ</div>;
    }

    console.log('render');

    return (
        <div className="product">
            <button type="button" onClick={() => router.back()}>
                Go to products
            </button>
            <h1>{product.title}</h1>
            <img src={product.image} alt={product.title} />
            <Link href={`/csr-products/${parseInt(router.query.tid as string)-1}`}>上一個商品</Link>
            <Link href={`/csr-products/${parseInt(router.query.tid as string)+1}`}>下一個商品</Link>
        </div>
    );
}
