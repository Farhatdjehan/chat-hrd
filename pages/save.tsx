// @ts-nocheck
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import BackNavigation from "../src/components/backNavigation";
import { deleteCookie, getCookie } from "../src/components/common/utils";
import DashboardLayout from "../src/components/DashboardLayout";
import copy from "./../public/assets/png/copy.png";
import arrowDown from "./../public/assets/png/arrowDown.png";

export default function Save() {
  const [listSaved, setListSaved]: any = useState();
  const [expand, setExpand]: any = useState(false);
  const [copied, setCopied]: any = useState(false);
  const [idExpanded, setIdExpanded]: any = useState();
  const router = useRouter();

  useEffect(() => {
    if (getCookie("data") !== "") {
      let tmp = getCookie("data");
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

  const handleDelete = () => {
    deleteCookie("data");
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
          <BackNavigation />
          <div className="saved-chat__wrapper">
            {listSaved?.message?.length > 0 ? (
              listSaved?.message?.map((item: any, idx: any) => {
                return (
                  <div className="list-saved__chat" key={idx}>
                    <div className="wrapper-saved__chat">
                      <div>Template {idx + 1}</div>
                      <div style={{ display: "flex" }}>
                        <CopyToClipboard
                          text={item?.replace(/<[^>]+>/g, "")}
                          onCopy={handleCopy}
                        >
                          <div className="saved-chat__btn">
                            <Image src={copy} />
                          </div>
                        </CopyToClipboard>
                        <div
                          className="saved-chat__btn"
                          onClick={() => handleExpand(idx)}
                        >
                          <Image src={arrowDown} />
                        </div>
                      </div>
                    </div>
                    {idExpanded === idx && expand && (
                      <div dangerouslySetInnerHTML={{ __html: item }} />
                    )}
                  </div>
                );
              })
            ) : (
              <div style={{ textAlign: "center" }}>Template Tidak Tersedia</div>
            )}
          </div>
        </div>
        {listSaved?.message?.length > 0 && (
          <div>
            <button
              style={{ width: "100%", marginBottom: "16px", marginTop: "24px" }}
              className="btn"
              onClick={handleDelete}
            >
              Hapus Template
            </button>
          </div>
        )}
      </div>

      {copied && <div className="popup-show">Berhasil Menyalin</div>}
    </DashboardLayout>
  );
}
