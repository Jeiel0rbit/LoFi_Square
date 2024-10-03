> [!NOTE]  
> Contribuição simples, para adicionar mais streams, você pode está editando o arquivo `renderer.js`.
> ```js
> const categories = {
>  Ambientes: [
>    "http://radio.stereoscenic.com/ama-h",
>    "http://radio.stereoscenic.com:80/am-h.mp3",
>    "http://163.172.169.217:80/asp-s",
>    "http://radio.stereoscenic.com:80/am-l.mp3",
>  ],
>  Jazz: [
>    "http://icecast.radiofrance.fr/fip-midfi.mp3",
>    "https://icecast.radiofrance.fr/fipjazz-midfi.mp3",
>    "https://icecast.radiofrance.fr/fipgroove-midfi.mp3",
>  ],
>  Eletronica: ["http://nl.ah.fm:8000/live", "http://fr2.ah.fm:8000/live"],
>};

# Instalação

```bash
npm install --save-dev electron
```

#

# Executar localmente

```bash
npm start
```

# Compilação

- Windows e Linux

```bash
npm build:win-linux
```

#

- Mac

```bash
npm build:mac
```

# Atualização

Desinstale o programa anterior por completo. Pois o programa não tem sistema de atualização nativo.
No Linux por exemplo seria o comando:

```bash
sudo dpkg --purge lofi-radio
```

> Se baixado `.deb`.


> [!WARNING]  
> O software não tem licença. Por esse motivo, ignore o aviso do seu anti-malware. 