import Link from "next/link";

interface CardProps {
  route?: any;
}

export default function Breadcrumb(props: CardProps) {
  const { route }: any = props;
  function unslugify(slug: any) {
    const result = slug?.replace(/\-/g, " ");
    return result?.replace(/\w\S*/g, function (txt: any) {
      return txt;
    });
  }
  return (
    <div className="breadcrumb-page">
      {route?.length > 0 &&
        route?.map((item: any, index: any) => {
          console.log(item.split("/").length > 1);
          return (
            <>
              {index !== 0 && <div className="breadcrumb-separator">/</div>}
              <div
                className={`breadcrumb-page__list ${
                  route?.length === index + 1 && "breadcrumb-page__active"
                }`}
                key={index}
              >
                <Link href={`/${item && item}`}>
                  <a>
                    {route?.length === index + 1 && item.split("/")?.length > 1
                      ? unslugify(item.split("/")[1])
                      : unslugify(item)}
                  </a>
                </Link>
              </div>
            </>
          );
        })}
    </div>
  );
}
