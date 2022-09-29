import {
  ProSidebar,
  SidebarHeader,
  SidebarContent,
  Menu,
  MenuItem,
  SubMenu,
} from "react-pro-sidebar";
import styles from "./Sidebar.module.scss";
import { ReactNode, useEffect, useState } from "react";
import Link from "next/link";
import logoCompany from "./../../../../public/assets/png/logoCompany.png";
import Image from "next/image";
import { getCookie } from "../../common/utils";

interface SidebarProps {
  toggle: boolean;
  handleToggle: any;
}

export default function Sidebar(props: SidebarProps) {
  const { toggle, handleToggle } = props;
  const [data, setData]: any = useState();

  useEffect(() => {
    if (getCookie("data") !== "") {
      let tmp = getCookie("data");
      if (tmp !== undefined) {
        setData(JSON.parse(tmp));
      }
    }
  }, []);

  return (
    <aside className={styles.sidebar}>
      <ProSidebar breakPoint="xxl" toggled={toggle} onToggle={handleToggle}>
        <SidebarContent>
          <div className="header-sidebar">
            <div className="header-information">{data?.nama}</div>
            <div>{data?.telepon}</div>
          </div>
          <Menu className={`menu`}>
            <MenuItem>
              Halaman Awal
              <Link href="/">
                <a></a>
              </Link>
            </MenuItem>
            <MenuItem>
              Template Tersimpan
              <Link href="/save">
                <a></a>
              </Link>
            </MenuItem>
            <MenuItem>
              Beri Masukkan
              <Link href="#">
                <a></a>
              </Link>
            </MenuItem>
            <MenuItem>
              Bagikan Aplikasi
              <Link href="#">
                <a></a>
              </Link>
            </MenuItem>
            <MenuItem>
              Nilai Aplikasi
              <Link href="#">
                <a></a>
              </Link>
            </MenuItem>
          </Menu>
        </SidebarContent>
      </ProSidebar>
    </aside>
  );
}
