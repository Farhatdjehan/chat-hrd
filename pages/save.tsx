import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { deleteCookie, getCookie } from "../src/components/common/utils";
import DashboardLayout from "../src/components/DashboardLayout";
export default function Save() {
  const [listSaved, setListSaved]: any = useState();
  const router = useRouter();

  useEffect(() => {
    if (getCookie("messages") !== "") {
      let tmp = getCookie("messages");
      if (tmp !== undefined) {
        setListSaved(JSON.parse(tmp));
      }
    }
  }, []);

  const handleBack = () => {
    router.back();
  };

  const handleDelete = () => {
    deleteCookie("messages");
    router.reload();
  };

  return (
    <DashboardLayout pageTitle="Saved Template">
      <div className="saved-wrapper">
        <div>
          <div onClick={handleBack}>{`< Template Tersimpan`}</div>
          <div className="saved-chat__wrapper">
            {listSaved?.length > 0 &&
              listSaved.map((item: any, idx: any) => {
                return (
                  <div className="list-saved__chat" key={idx}>
                    <div dangerouslySetInnerHTML={{ __html: item }} />
                  </div>
                );
              })}
          </div>
        </div>
        <div>
          <button className="btn" onClick={handleDelete}>
            Hapus Template
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
}
