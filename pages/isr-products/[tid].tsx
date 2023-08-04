import { useRouter } from 'next/router';
import { fetchAllProduct, fetchProduct } from '../api/products'
import type { GetStaticPaths, GetStaticProps } from "next";

// ISG
export const getStaticPaths: GetStaticPaths = async () => {
    const products = await fetchAllProduct();

    const paths = products.map((i) => ({
        params: { tid: i.id + '' },
    }))

    return {
        paths,
        fallback: 'blocking', // ISG 必定要是 true or 'blocking' <- 官方推薦
    }
}

export const getStaticProps: GetStaticProps = async (req) => {
    const { params } = req;
    
    try {
        const product = await fetchProduct(params.tid);

        return { props: { product }, revalidate: 30 }
    } catch (error) {
        return { props: { product: null } }
    }
}

export default function Page({ product }) {
    const router = useRouter();

    if (!product) {
        return <div>找不到你要的商品喔喔喔喔喔ㄛ</div>;
    }
    
    return (
        <div className="product">
            <button type="button" onClick={() => router.back()}>
                Go to products
            </button>
            <time>{product.createTime}</time>
            <h1>{product.title}</h1>
            <img src={product.image} alt={product.title} />
        </div>
    );
}
