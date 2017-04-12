function FindProxyForURL(url, host) {
    PROXY = "PROXY 121.199.38.96:8081"

    // music.163.com via proxy
    if (shExpMatch(host,"music.163.com")) {
        return PROXY;
    }

    // Everything else directly!
    return "DIRECT";
}
