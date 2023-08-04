const BASE_URL = 'https://fakestoreapi.com/products/';

async function fetchAllProduct() {
    const resp = await fetch(BASE_URL);

    return await resp.json();
}

async function fetchProduct(tid) {
    const resp = await fetch(BASE_URL + tid);
    const product = await resp.json();

    return {
        ...product,
        createTime: Date.now(),
    }
}

export {
    BASE_URL,
    fetchAllProduct,
    fetchProduct,
}
