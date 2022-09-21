import Link from "next/link";
import { templateChat } from "../../src/components/constants/template";
import DashboardLayout from "../../src/components/DashboardLayout";

export default function TemaChat() {
  return (
    <DashboardLayout pageTitle="Pilih Tema">
      {templateChat.map((item: any, index: any) => {
        return (
          <Link key={index} href={`/chat-hrd/${index + 1}`}>
            <a>
              <div className="template-messages">{item.title}</div>
            </a>
          </Link>
        );
      })}
    </DashboardLayout>
  );
}
