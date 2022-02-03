export function jwtDecrypt(token: string) {
  if (token) {
    // console.log({ ok: "token: " + token });
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );
    // console.log({ tokenData: jsonPayload });
    return JSON.parse(jsonPayload);
  } else {
    console.log({ error: "no token supplied" });
    return { error: "no token supplied" };
  }
}
