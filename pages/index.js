
import Link from 'next/link';
import { useEffect, useState } from 'react'
import { getCookie, setCookie } from '../src/common/utils';
import FormInput from '../src/component/FormInput';
import Layout from '../src/component/Layout'

export default function Home() {
  const [input, setInput] = useState(false);
  const [data, setData] = useState();

  useEffect(() => {
    if (getCookie("data") === "") {
      setInput(true)
    }
  }, [data]);

  useEffect(() => {
  }, [data])

  const handleSubmit = (e) => {
    e.preventDefault();
    setCookie("data", JSON.stringify(data), 14);
    if (getCookie("data") !== "") {
      setInput(false)
    }
  }

  const handleChange = (e) => {
    const newData = { ...data };
    newData[e.target.name] = e.target.value;
    setData(newData);
  };

  return (

    <>
      {!input &&
        <Layout>
          <div className='card-list__wrapper'>
            <Link href="/chat-hrd/input">
              <a className='card-template'>
                <div>
                  Menu 1
                </div>
              </a>
            </Link>
            <Link href="/chat-hrd/input">
              <a className='card-template'>
                <div >
                  Menu 2
                </div>
              </a>
            </Link>
          </div>
        </Layout>
      }

      {input &&
        <FormInput handleSubmit={handleSubmit} handleChange={handleChange} />
      }
    </>
  )
}
