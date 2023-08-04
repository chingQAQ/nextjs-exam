import { useRouter } from 'next/router';
import { fetchProduct } from '../api/products';
import type { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async (req) => {
    const { params } = req;
    
    const product = await fetchProduct(params.tid);

    return { props: { product } }
}

export default function Page({ product }) {
    const router = useRouter();
    
    return (
        <div className="product">
            <button type="button" onClick={() => router.back()}>
                Go to products
            </button>
            <h1>{product.title}</h1>
            <img src={product.image} alt={product.title} />
        </div>
    );
}
