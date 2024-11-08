function updateOutput() {

    const from_b58 = function (S, A) { var d = [], b = [], i, j, c, n; for (i in S) { j = 0, c = A.indexOf(S[i]); if (c < 0) return undefined; c || b.length ^ i ? i : b.push(0); while (j in d || c) { n = d[j]; n = n ? n * 58 + c : c; c = n >> 8; d[j] = n % 256; j++ } } while (j--) b.push(d[j]); return new Uint8Array(b) };
    const b58_map = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";

    function clipboardCopy(e) { let o = document.createElement("textarea"); o.value = e, document.body.appendChild(o), o.focus(), o.select(); try { document.execCommand("copy") } catch (c) { console.error("Unable to copy to clipboard", c) } document.body.removeChild(o) };

    const $html = document.querySelector('html');

    var utf8ArrayToStr=function(){var r=Array(128),$=String.fromCodePoint||String.fromCharCode,o=[];return function(x){var n,F,t=x.length;o.length=0;for(var e=0;e<t;)(F=x[e++])<=127?n=F:F<=223?n=(31&F)<<6|63&x[e++]:F<=239?n=(15&F)<<12|(63&x[e++])<<6|63&x[e++]:String.fromCodePoint?n=(7&F)<<18|(63&x[e++])<<12|(63&x[e++])<<6|63&x[e++]:(n=63,e+=3),o.push(r[n]||(r[n]=$(n)));return o.join("")}}();

    const pathName = document.getElementById('inputField').value.split('//')[2];
    console.log(pathName);
    const binData = new Uint8Array(from_b58(pathName, b58_map));
    const configData = pako.inflate(binData);
    const configStr = configData ? utf8ArrayToStr(configData) : false;
    const configObj = configStr ? JSON.parse(configStr) : false;
    let ssStr


    let os = '';

    const $header = document.querySelector('.header');
    const $headerLink = document.querySelector('.header__link');

    const langRu = {
        header: {
            link: 'ПОМОЩЬ',
        },
        intro: {
            title1: 'Привет!<br><span><b>Скачай и установи</b></span> приложение<br>для своей операционной системы,<br><span><b>добавь ключ</b></span> из буфера обмена,<br><span><b>пользуйся</b></span> Интернетом&nbsp;без&nbsp;границ',
            title2: 'Привет!<br><span><b>Скачай и установи</b></span> приложение <span><b>VPN Generator</b></span><br>для своей операционной системы,<br><span><b>пользуйся</b></span> Интернетом&nbsp;без&nbsp;границ<br>&nbsp;',
            items: [
                {
                    os: 'android',
                    text: 'Скачать для<br><b>Android</b>',
                },
                {
                    os: 'windows',
                    text: 'Скачать для<br><b>Windows</b>',
                },
                {
                    os: 'ios',
                    text: 'Скачать для<br><b>IOS</b>',
                },
                {
                    os: 'macos',
                    text: 'Скачать для<br><b>MacOS</b>',
                },
                {
                    os: 'linux',
                    text: 'Выбрать<br><b>Outline</b>',
                },
            ],
        },
        board: {
            config1: 'BAШ КЛЮЧ VLESS',
            config2: 'ВАШ КЛЮЧ VPN GENERATOR',
            download: 'СКАЧАТЬ',
            tooltip: 'скопировано',
        },
    };
    const langEn = {
        header: {
            link: 'SUPPORT',
        },
        intro: {
            title1: 'Hi! <br><span><b>Download and install</b></span> the app,<br><span><b>add the key</b></span> from the clipboard,<br><span><b>use</b></span> the Internet without borders',
            title2: 'Hi! <br><span><b>Download and install</b></span> the app <span><b>VPN Generator</b></span>,<br><span><b>use</b></span> the Internet without borders<br>&nbsp;',
            items: [
                {
                    os: 'android',
                    text: 'Download for<br><b>Android</b>',
                },
                {
                    os: 'windows',
                    text: 'Download for<br><b>Windows</b>',
                },
                {
                    os: 'ios',
                    text: 'Download for<br><b>IOS</b>',
                },
                {
                    os: 'macos',
                    text: 'Download for<br><b>MacOS</b>',
                },
                {
                    os: 'linux',
                    text: 'Get<br><b>Outline</b>',
                },
            ],
        },
        board: {
            config1: 'YOUR KEY VLESS',
            config2: 'YOUR KEY VPN GENERATOR',
            download: 'DOWNLOAD',
            tooltip: 'copied',
        },
    };

    let changeLang = (lang) => {
        $header.classList.add('is-change');

        setTimeout(() => {
            const langCurrent = lang === 'ru' ? 'en' : 'ru';
            const langData = lang === 'ru' ? langRu : langEn;

            $headerLang.dataset.lang = langCurrent;
            $headerLink.innerHTML = langData.header.link;
            $introTitle1.innerHTML = langData.intro.title1;
            $introTitle2.innerHTML = langData.intro.title2;
            langData.intro.items.filter((item) => {
                if (item.os === 'android') {
                    document.querySelector(`.intro__item--${item.os} .intro__item-text`).innerHTML = item.text;
                }
                if (item.os === 'windows') {
                    document.querySelector(`.intro__item--${item.os} .intro__item-text`).innerHTML = item.text;
                }
                if (item.os === 'ios') {
                    document.querySelector(`.intro__item--${item.os} .intro__item-text`).innerHTML = item.text;
                }
                if (item.os === 'macos') {
                    document.querySelector(`.intro__item--${item.os} .intro__item-text`).innerHTML = item.text;
                }
                if (item.os === 'linux') {
                    document.querySelector(`.intro__item--${item.os} .intro__item-text`).innerHTML = item.text;
                }
            });
            $boardTitle1.innerHTML = langData.board.config1;
            $boardTitle2.innerHTML = langData.board.config2;
            $boardButton.innerHTML = langData.board.download;
            $boardLink.dataset.tooltip = langData.board.tooltip;
            $header.classList.remove('is-change');
        }, 500);
    };

    const setSsStr = () => {
        if (configObj && typeof configObj.config != "undefined") {
            if (os === 'android') {
                ssStr = pathName
            } else if (typeof configObj.protocol0 != "undefined") {
                ssStr = 'vless://' +
                    configObj.protocol0.id + '@' +
                    configObj.protocol0.address + ':' +
                    configObj.protocol0.port +
                    '?security=reality&encryption=none&headerType=none&fp=chrome&type=tcp&flow=xtls-rprx-vision' +
                    '&pbk=' + configObj.protocol0.publicKey +
                    '&sni=' + configObj.protocol0.serverName +
                    '&sid=' + configObj.protocol0.shortId +
                    '#' + encodeURIComponent(configObj.config.name);
            } else {
                window.location.href = '/' + 'ss://' + btoa(
                    configObj.shadowsocks.cipher + ':' +
                    configObj.shadowsocks.password) + '@' +
                    configObj.shadowsocks.host + ':' +
                    configObj.shadowsocks.port +
                    (configObj.shadowsocks.outline?.prefix ?
                        ("/?outline=1&prefix=" + encodeURIComponent(configObj.shadowsocks.outline.prefix)) :
                        ""
                    ) +
                    '#' + encodeURIComponent(configObj.config.name);
            }
        } else {
            ssStr = String(window.location);
            ssStr = ssStr.replace(/^https?:\/\/[^\/]+\//, '');
        }

        $boardLinkText.innerHTML = ssStr;
    }

    const changeOs = () => {
        const $active = document.querySelector('.intro__item.is-active') ?? false;
        const $current = document.querySelector(`.intro__item--${os}`);

        if ($active) {
            $active.classList.remove('is-active');
        }

        if (!$current.classList.contains('is-disabled') && !$main.classList.contains('is-active')) {
            $main.classList.add('is-active');
        }

        //setSsStr()

        if (os === 'android') {
            $introTitle1.classList.add('is-hidden');
            $introTitle2.classList.remove('is-hidden');
            $boardTitle1.classList.add('is-hidden');
            $boardTitle2.classList.remove('is-hidden');

            $boardButton.classList.remove('is-hidden');

            setLink(`https://play.google.com/store/apps/details?id=org.iedn.vpngenerator&referrer=vgc%3D${pathName}`)
        }

        if (os === 'ios') {
            $introTitle1.classList.remove('is-hidden');
            $introTitle2.classList.add('is-hidden');
            $boardTitle1.classList.remove('is-hidden');
            $boardTitle2.classList.add('is-hidden');

            $boardButton.classList.remove('is-hidden');

            setLink(`https://apps.apple.com/ru/app/streisand/id6450534064`)
        }

        if (os === 'macos') {
            $introTitle1.classList.remove('is-hidden');
            $introTitle2.classList.add('is-hidden');
            $boardTitle1.classList.remove('is-hidden');
            $boardTitle2.classList.add('is-hidden');

            $boardButton.classList.remove('is-hidden');

            setLink(`https://apps.apple.com/ru/app/streisand/id6450534064`)
        }

        if (os === 'windows') {
            $introTitle1.classList.remove('is-hidden');
            $introTitle2.classList.add('is-hidden');
            $boardTitle1.classList.remove('is-hidden');
            $boardTitle2.classList.add('is-hidden');

            $boardButton.classList.remove('is-hidden');

            if (/Chrome/.test(navigator.userAgent) && location.protocol == 'http')
                setLink('https://s3.amazonaws.com/storage-current/amnezia-windows.html');
            else
                setLink('https://github.com/amnezia-vpn/amnezia-client/releases/download/4.8.1.9/AmneziaVPN_4.8.1.9_x64.exe');
        }

        if (os === 'linux') {
            window.location.href = '/' + 'ss://' + btoa(
                    configObj.shadowsocks.cipher + ':' +
                    configObj.shadowsocks.password) + '@' +
                    configObj.shadowsocks.host + ':' +
                    configObj.shadowsocks.port +
                    (configObj.shadowsocks.outline?.prefix ?
                        ("/?outline=1&prefix=" + encodeURIComponent(configObj.shadowsocks.outline.prefix)) :
                        ""
                    ) +
                    '#' + encodeURIComponent(configObj.config.name);

            $introTitle1.classList.remove('is-hidden');
            $introTitle2.classList.add('is-hidden');
            $boardTitle1.classList.remove('is-hidden');
            $boardTitle2.classList.add('is-hidden');

            $boardButton.classList.add('is-hidden');
            $boardConfig.classList.add('is-hidden');

            setLink('#')
        }

        if (!$current.classList.contains('is-disabled')) {
            $current.classList.add('is-active');
        }
    };

    const initBoard = () => {
        if ($html.classList.contains('is-os-android')) {
            os = 'android';
        }

        if ($html.classList.contains('is-os-ios')) {
            os = 'ios';
        }

        if ($html.classList.contains('is-os-mac-os')) {
            os = 'macos';
        }

        if ($html.classList.contains('is-os-windows')) {
            os = 'windows';
        }

        if ($html.classList.contains('is-os-linux')) {
            os = 'windows';
        }

        changeOs();

        $items.forEach((item) => {
            item.addEventListener('click', () => {
                
            });
        });

        $boardButton.addEventListener('click', () => {
            $boardDownload.classList.add('is-hidden');
            $boardConfig.classList.remove('is-hidden');

            clipboardCopy(ssStr);
        });

        $boardLink.addEventListener('click', () => {
            if (!$boardLink.classList.contains('is-active')) {
                $boardLink.classList.add('is-active');

                setTimeout(() => {
                    $boardLink.classList.remove('is-active');
                }, 2100);
                clipboardCopy(ssStr);
            }
        });
    };


    const initLang = () => {
        $headerLang.addEventListener('click', () => {
            const lang = $headerLang.dataset.lang;

            changeLang(lang);
        });
    };

    const initYear = () => {
        const year = new Date().getFullYear();

        if (document.querySelector('[data-year]')) {
            document.querySelector('[data-year]').textContent = year;
        }
    };

    document.addEventListener('DOMContentLoaded', () => {
        initYear();
        initLang();
        initBoard();
    });

        const inputValue = document.getElementById('inputField').value;

        // Обновление строк вывода
        document.getElementById('vless').textContent = 'vless://' +
                    configObj.protocol0.id + '@' +
                    configObj.protocol0.address + ':' +
                    configObj.protocol0.port +
                    '?security=reality&encryption=none&headerType=none&fp=chrome&type=tcp&flow=xtls-rprx-vision' +
                    '&pbk=' + configObj.protocol0.publicKey +
                    '&sni=' + configObj.protocol0.serverName +
                    '&sid=' + configObj.protocol0.shortId +
                    '#' + encodeURIComponent(configObj.config.name);

        document.getElementById('ss').textContent = 'ss://' + btoa(
                    configObj.shadowsocks.cipher + ':' +
                    configObj.shadowsocks.password) + '@' +
                    configObj.shadowsocks.host + ':' +
                    configObj.shadowsocks.port +
                    (configObj.shadowsocks.outline?.prefix ?
                        ("/?outline=1&prefix=" + encodeURIComponent(configObj.shadowsocks.outline.prefix)) :
                        ""
                    ) +
                    '#' + encodeURIComponent(configObj.config.name);

        document.getElementById('vgc').textContent = 'vgc://' + ((a) => a[a.length-1])(inputValue.split('//'));
}

/*

    Ты заглянул сюда и захотел выколоть себе глаза? Это нормально. 
    Я тоже... но этот кусок... кода хотя бы работает.

    Это сделано потому что я заебался отвечать людям как достать достать ебучий ключ.
    Не, ну ты попробуй получить ебучий Outline? Да так чтобы без ебли с тем чтобы 
    отменять скачивание уже 1000 раз скаченного клиента.

    И это я не говорю про тех у кого эта ссылка просто не открылась.

    Сделано за 20 минут на коленке из того что и так есть на этом замечательном куске UX.

    С любовью, ваш Abies

*/