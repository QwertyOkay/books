import Cookies from 'js-cookie';

function GetCookies(cookiename) {
  return Cookies.get(cookiename);
}

function RemoveCookies(cookiename) {
  Cookies.remove(cookiename);
}

function SetCookies(cookiename, goldrushies) {
  Cookies.set(cookiename, goldrushies, {
    expires: 1,
    secure: true,
    sameSite: 'strict',
    path: '/',
  });
}

export { GetCookies, RemoveCookies, SetCookies };
