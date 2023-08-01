import { useRouter } from 'next/router';
import { BASE_URL } from '../api/constants'
import type { GetStaticPaths, GetStaticProps } from "next";

// SSG - dynamic routes
export const getStaticPaths: GetStaticPaths = async () => {
    const res = await fetch(BASE_URL);
    const products = await res.json();

    const paths = products.map((i) => ({
        params: { tid: i.id + '' },
    }))

    return {
        paths,
        fallback: false,
        /* 
            What does fallback mean?
            false: 使用者瀏覽沒有定義在 getStaticPaths 中的頁面時，會回傳 404 的頁面
            true: [build] router.isFallback 會等於 true，並且會先顯示 fallback 的頁面，
                Next 也會認為這個頁面是需要動態產生的，所以會再走一次 getStaticProps，產生一個靜態頁面。
                *fallback 等待時所產生的頁面只會產生一次，之後就會直接使用靜態頁面。
                如果沒有這樣的設計, 當網站內容越來越大時, 我們必須要在 getStaticPaths 加入所有頁面的路徑,
                並且在build time時需要編譯/打包所有的頁面, 導致 server 需要花費大量的時候來編譯出所有的頁面.
            'blocking': 跟 true 很像，但是會等到 getStaticProps 取得資料後才會顯示頁面。
                *不會有 router.isFallback 的狀態，因為不會先顯示 fallback 的頁面。
        */
    }
}

export const getStaticProps: GetStaticProps = async (req) => {
    const { params } = req;
    // params contains the post `id`.
    // If the route is like /posts/1, then params.id is 1
    
    try {
        const res = await fetch(BASE_URL + `/${params.tid}`);
        const product = await res.json();
        return { props: { product } }
    } catch (error) {
        return { props: { product: null } }
        // return { notFound: true };
    }
}

export default function Product({ product }) {
    const router = useRouter();

    // if (router.isFallback) {
    //     return <div>Loading...</div>;
    // }

    if (!product) {
        return <div>找不到你要的商品喔喔喔喔喔ㄛ</div>;
    }
    
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
