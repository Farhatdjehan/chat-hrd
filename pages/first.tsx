import { useRouter } from "next/router";
import { useState } from "react";
import { getCookie, setCookie } from "../src/components/common/utils";
import FormInput from "../src/components/FormInput";

export default function First() {
  const router = useRouter();
  const [data, setData]: any = useState();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setCookie("data", JSON.stringify(data), 14);
    router.push('/');
    // if (getCookie("data") !== "") {
    //   setInput(false);
    // }
  };

  const handleChange = (e: any) => {
    const newData = { ...data };
    newData[e.target.name] = e.target.value;
    setData(newData);
  };

  return <FormInput handleSubmit={handleSubmit} handleChange={handleChange} />;
}
