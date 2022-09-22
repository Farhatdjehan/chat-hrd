import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { deleteCookie, getCookie } from "../src/components/common/utils";
import DashboardLayout from "../src/components/DashboardLayout";
export default function Save() {
  const [listSaved, setListSaved]: any = useState();
  const [expand, setExpand]: any = useState(false);
  const [copied, setCopied]: any = useState(false);
  const [idExpanded, setIdExpanded]: any = useState();
  const router = useRouter();

  useEffect(() => {
    if (getCookie("messages") !== "") {
      let tmp = getCookie("messages");
      if (tmp !== undefined) {
        setListSaved(JSON.parse(tmp));
      }
    }
  }, []);

  useEffect(() => {
    if (copied) {
      setTimeout(function () {
        setCopied(false);
      }, 2000);
    }
  }, [copied]);

  const handleBack = () => {
    router.back();
  };

  const handleDelete = () => {
    deleteCookie("messages");
    router.reload();
  };
  const handleCopy = () => {
    setCopied(true);
  };
  const handleExpand = (id: any) => {
    setExpand(!expand);
    setIdExpanded(id);
  };
  return (
    <DashboardLayout pageTitle="Saved Template">
      <div className="saved-wrapper">
        <div>
          <div onClick={handleBack}>{`< Kembali`}</div>
          <div className="saved-chat__wrapper">
            {listSaved?.length > 0 &&
              listSaved.map((item: any, idx: any) => {
                return (
                  <div className="list-saved__chat" key={idx}>
                    <div className="wrapper-saved__chat">
                      <div>Template {idx + 1}</div>
                      <div style={{ display: "flex" }}>
                        <CopyToClipboard
                          text={item?.replace(/<[^>]+>/g, "")}
                          onCopy={handleCopy}
                        >
                          <div className="saved-chat__btn">o</div>
                        </CopyToClipboard>
                        <div
                          className="saved-chat__btn"
                          onClick={() => handleExpand(idx)}
                        >
                          v
                        </div>
                      </div>
                    </div>
                    <br />
                    {idExpanded === idx && expand && (
                      <div dangerouslySetInnerHTML={{ __html: item }} />
                    )}
                  </div>
                );
              })}
          </div>
        </div>
        <div>
          <button
            style={{ width: "100%", marginBottom: "16px", marginTop: "24px" }}
            className="btn"
            onClick={handleDelete}
          >
            Hapus Template
          </button>
        </div>
      </div>

      {copied && <div className="popup-show">Berhasil Menyalin</div>}
    </DashboardLayout>
  );
}
