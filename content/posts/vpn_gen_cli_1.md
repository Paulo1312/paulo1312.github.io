+++
title = 'VPNGEN_Cli'
date = 2024-08-08T09:58:54+02:00
draft = false
+++

## [Библиотека-клиент для VPN Generator](https://github.com/Paulo1312/vpn_gen_cli)

### Установка

1. Устанавливаете rust [https://rustup.rs](https://rustup.rs)
2. Скачиваете архив, или клонируете репозиторий
3. Переходите в директорию, запускаете
```
cargo build --release
```
4. Копируете исполняемый файл из /target/release/ в удобное место. Если у вас линукс, то можно в /usr/bin/

### Использование
Всё происходит в терминале. Есть две опции. Первая - это просто включить VPN клиент с туннелированием (Outline, Amnezia, Wireguard) в системе, второй - включить VPN клиент как прокси (Shadowsocks-rust и т.д.) и добавить параметр --socks5 localhost:9052 (К примеру)

К примеру *vpngen_cli -af --config-dir vpn_configs* выдаст конфиги для Outline(ссылкой) в тексте и амнизии для обоих версий в папку vpn_configs (Папку нужно заранее создать) 

#### Команда
```
vpngen_cli [опции] -с <директория для конфигов> --template <VPN Template> -c <Directory for configs> --socks5 <Address:Port>
```

#### Опции:
```
Конфиги:

-s, --shadowsocks - Файл .json для ShadowSocks
-a, --amnezia - Файл Амнезия для версии 4.1.0.1 и старше
-f, --amnezia-fixer - Файл Амнезии для новых версий
-w, --wireguard - Конфиг Wireguard :)
--all Все возможные конфигурации

Прочее:
-t, --template <FILE> - файл шаблона в формате json для составления красивого вывода 
-c, --config-dir <FILE> - директория для сохранения конфигов в виде файлов
-р, --help - вывод справки
-V, --version - Версия
--socks5 - Настройка прокси
```


