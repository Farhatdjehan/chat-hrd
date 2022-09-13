import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getCookie, setCookie } from "../../src/common/utils";
import Layout from "../../src/component/Layout";

export default function Form() {
    const router = useRouter();
    const [data, setData] = useState();

    useEffect(() => {
        setData(JSON.parse(getCookie("data")));
    }, []);

    const handleBack = () => {
        router.back();
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setCookie("data", JSON.stringify(data), 14);
        router.push('/result');
    }

    const handleChange = (e) => {
        const newData = { ...data };
        newData[e.target.name] = e.target.value;
        setData(newData);
    };

    return (
        <Layout>
            <div onClick={handleBack}>
                {`< Chat HRD`}
            </div>
            <form onSubmit={handleSubmit}>
                <div className='data-label'>Nama Perusahaan</div>
                <input className='data-input' id="perusahaan" name="perusahaan" onChange={handleChange} />
                <div className='data-label'>Divisi Melamar</div>
                <input className='data-input' id="divisi" name="divisi" onChange={handleChange} />
                <button type="submit">Simpan</button>
            </form>

        </Layout>
    )
}