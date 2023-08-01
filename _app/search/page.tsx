// 新增 app/search/page.tsx
import Link from 'next/link';
import QueryText from './QueryText';

export default function Page() {
    return (
        <div>
            <h1>App Route: Search Page</h1>
            <p>Query: <QueryText /> </p>
            <p>Go to <Link href="/">Home</Link></p>
        </div>
    );
}
