import React from 'react';
import useSWR from 'swr';
import { useRouter } from 'next/router';
import Link from 'next/link';

// API 太快了所以設 2 秒延遲比較一下。
const fetcher = (url) => fetch(`https://fakestoreapi.com${url}`).then((res) => new Promise (r => setTimeout(() => {
    r(res.json());
}, 2000)));

export default function Page() {
    const router = useRouter();
    const { tid } = router.query as {tid: string};
    const { data: product } = useSWR(tid ? `/products/${tid}` : null, fetcher) as any;

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
            <Link href={`/csr-products/swr/${parseInt(tid)-1}`}>上一個商品</Link>
            <Link href={`/csr-products/swr/${parseInt(tid)+1}`}>下一個商品</Link>
        </div>
    );
}
