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

## Changelog

<details>
  <summary>Versões</summary>
  <details>
    <summary>1.0.3</summary>
    - Imagens da logo, do seu sistema, foram corrigidas. #Regression.
    </details>
  <details>
    <summary>1.0.2</summary>
    - Novo layout adicionado para o programa.
    - Novos streams incluídas.
    - Compatível para Mac (Experimental).
  </details>
  <details>
    <summary>1.0.1/0</summary>
    - Versão simples web.
    - Programa para Windows e Linux.
  </details>

</details>

# Instalação

```bash
npm install --global yarn
yarn add electron-builder --dev
npm install
```

#

# Executar localmente

```bash
npm run start
```

# Compilação

- Windows e Linux

```bash
yarn build:win-linux
```

#

- Mac

```bash
yarn build:mac
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
