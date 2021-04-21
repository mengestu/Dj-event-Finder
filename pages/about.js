import Link from "next/link";
import Layout from "../components/Layout";

export default function about() {
    return (
        <Layout title='About DJ Events'>
            <h1> About </h1>
            <p>This is an app to find the latest muscial events going around</p>
            <p>
                Version:1.0.0
            </p>
            <Link href='/'>Home</Link>
        </Layout>
    )
}
