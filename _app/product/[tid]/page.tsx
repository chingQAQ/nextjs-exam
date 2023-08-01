// 新增 app/product/[tid]/page.tsx

import Link from 'next/link';
export default function Page({ params }: { params: { tid: string } }) {
    return (
        <div>
            <h1>App Route: Product Page</h1>
            <p>tid: {params.tid}</p>
            <p>Go to <Link href="/">Home</Link></p>
        </div>
    );
}
