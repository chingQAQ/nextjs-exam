import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Page() {
    const router = useRouter();
    return (
        <div>
            <h1>Search Page</h1>
            <p>Query: {router.query.q}</p>
            <p>Go to <Link href="/">Home</Link></p>
        </div>
    );
}
