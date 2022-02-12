export function jwtDecrypt(access_token: string) {
  if (access_token) {
    console.log({ ok: "token: " + access_token });
    const base64Url = access_token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );
    return JSON.parse(jsonPayload);
  } else {
    console.log({ error: "no token supplied" });
    return { error: "no token supplied" };
  }
}
