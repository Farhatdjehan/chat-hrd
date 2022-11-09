/** READ COOKIE */
export function getCookie(cname: string) {
  if (typeof document === "undefined") return;
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

/** CREATE COOKIE */
export function setCookie(cname: string, cvalue: string, exdays: number) {
  if (typeof document === "undefined") return;
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

/** DELETE COOKIE */
export function deleteCookie(cname: string) {
  if (typeof document === "undefined") return;
  let expires = "expires=" + "01 Jan 1970 00:00:00";
  document.cookie = cname + "=" + "" + ";" + expires + ";path=/";
}

export function slugify(str: string) {
  str = str.replace(/^\s+|\s+$/g, ""); // trim
  str = str.toLowerCase();

  // remove accents, swap ñ for n, etc
  var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
  var to = "aaaaeeeeiiiioooouuuunc------";
  for (var i = 0, l = from.length; i < l; i++) {
    str = str.replace(new RegExp(from.charAt(i), "g"), to.charAt(i));
  }

  str = str
    .replace(/[^a-z0-9 -]/g, "") // remove invalid chars
    .replace(/\s+/g, "-") // collapse whitespace and replace by -
    .replace(/-+/g, "-"); // collapse dashes

  return str;
}

export function formDynamic(
  id: string,
  placeholder: string,
  label: string,
  handleChange: any
) {
  return (
    <>
      <div className="data-label">{label}</div>
      <input
        className="data-input"
        id={id}
        name={id}
        onChange={handleChange}
        placeholder={placeholder}
        required
      />
    </>
  );
}
