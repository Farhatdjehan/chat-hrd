import { Router, useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getCookie } from "../src/common/utils";
import Layout from "../src/component/Layout";

export default function Result() {
    const [data, setData] = useState();
    const router = useRouter();

    useEffect(() => {
        setData(JSON.parse(getCookie("data")));
    }, []);

    useEffect(() => {
        console.log(data?.perusahaan);
    }, [data])

    const handleBack = () => {
        router.back();
    }

    return (
        <Layout>
            <>
                <div>
                    Saya adalah {data?.nama}, saya melamar jadi divisi {data?.divisi} di perusahaan {data?.perusahaan}
                </div>
                <button onClick={handleBack}>Kembali</button>

            </>
        </Layout>
    )
}