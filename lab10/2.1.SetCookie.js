function setCookie(name, value, expiry)
{
    var d = new Date();
    d.setTime(d.getTime() + (expiry*24*60*60*1000));
    var expires - "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires;
}
