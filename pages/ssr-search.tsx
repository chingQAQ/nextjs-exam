import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async (req) => {
    return {
        props: {
            query: req.query,
        },
    };
};

export default function Page({ query }) {
    return (
        <div>
            <h1>Search Page</h1>
            {query.q && <span>{query.q}</span>}
        </div>
    );
}
