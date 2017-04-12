function FindProxyForURL(url, host) {
    PROXY = "PROXY 203.195.204.168:8080"

    // music.163.com via proxy
    if (shExpMatch(host,"music.163.com")) {
        return PROXY;
    }

    // Everything else directly!
    return "DIRECT";
}
