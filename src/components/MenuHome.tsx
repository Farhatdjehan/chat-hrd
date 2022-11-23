import Image from "next/image";
import Link from "next/link";

interface menuHome {
  id?: string;
  illustration?: any;
  title?: string;
  subtitle?: string;
  type?: string;
  color?: string;
}

export default function MenuHome(props: menuHome) {
  const { title, subtitle, illustration, id, type, color } = props;

  return (
    <Link href={`/chat-${type}?id=${id}`}>
      <a style={{ backgroundColor: `${color}` }} className="card-template">
        <div className="card-illustration">
          <Image
            src={illustration}
            width={24}
            height={24}
            objectFit="contain"
          />
        </div>
        <div className="card-wrapper__text">
          <div className="card-text">{title}</div>
          <div className="card-subtext">{subtitle}</div>
        </div>
      </a>
    </Link>
  );
}
