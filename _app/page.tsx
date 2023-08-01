// 新增 app/page.tsx

import Link from "next/link";

export default function Page() {
    return <>
        <h1>Hello NEXT.js</h1>
        <p>
            Go to <Link href="/product/testTid">/product/testTid</Link>
        </p>

        <p>
            Go to <Link href="/search?q=123">/search?q=123</Link>
        </p>
    </>;
}
