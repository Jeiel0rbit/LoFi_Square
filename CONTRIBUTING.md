# --- Guia de Contribuição para o LoFi Square ---

Olá! Fico muito feliz com o seu interesse em contribuir com o LoFi Square. Toda ajuda é bem-vinda, seja reportando um bug, sugerindo uma melhoria ou escrevendo código.

Para garantir um ambiente colaborativo e respeitoso, peço que você siga este guia e o [Código de Conduta](CODE_OF_CONDUCT.md).

## Sumário

- [Como Posso Contribuir?](#como-posso-contribuir)
  - [Reportando Bugs](#reportando-bugs)
  - [Sugerindo Melhorias](#sugerindo-melhorias)
  - [Fazendo sua Primeira Contribuição](#fazendo-sua-primeira-contribuição)
- [Guias de Estilo](#guias-de-estilo)
  - [Mensagens de Commit](#mensagens-de-commit)
  - [Estilo de Código](#estilo-de-código)
- [Estrutura do Projeto](#estrutura-do-projeto)

## Como Posso Contribuir?

### Reportando Bugs

Se você encontrar um bug, por favor, verifique primeiro se ele já não foi reportado na seção Issues do repositório.

Se não houver um reporte, abra uma nova issue, incluindo o máximo de detalhes possível:

- Descrição clara e concisa do bug.
- Passos para reproduzir o comportamento.
- Comportamento esperado vs. comportamento atual.
- Capturas de tela (se aplicável).
- Contexto (navegador, sistema operacional, etc.).

### Sugerindo Melhorias

Adoro novas ideias! Se você tem uma sugestão para melhorar o LoFi Square:

- Abra uma nova issue na seção Issues.
- Use o título "Sugestão:" para identificar facilmente a sua ideia.
- Descreva a sua sugestão em detalhes, explicando o problema que ela resolve e os benefícios.

### Fazendo sua Primeira Contribuição

Está pronto para colocar a mão na massa? Veja como:

1. Faça um Fork do repositório: Clique no botão "Fork" no canto superior direito da página do repositório.
2. Clone o seu fork: `git clone https://github.com/Jeiel0rbit/LoFi_Square.git`
3. Crie uma nova branch: `git checkout -b minha-feature-incrivel`
4. Faça suas alterações: Adicione novas rádios, corrija um bug ou implemente uma nova funcionalidade.
5. Faça o commit das suas alterações: Siga meu guia de mensagens de commit.
6. Envie para a sua branch: `git push origin minha-feature-incrivel`
7. Abra um Pull Request: Vá para o repositório original e abra um Pull Request comparando a sua branch com a `main` do projeto.

## Guias de Estilo

### Mensagens de Commit

Para manter o histórico de commits limpo e organizado, uso o padrão Conventional Commits. Cada mensagem de commit deve ter o seguinte formato:

```
<tipo>(escopo opcional): <descrição>
```

Exemplos:

- `feat: Adiciona categoria de rádio "Synthwave"`
- `fix: Corrige bug no controle de volume no Firefox`
- `docs: Atualiza o guia de contribuição`

Tipos comuns:

- `feat`: Uma nova funcionalidade.
- `fix`: Uma correção de bug.
- `docs`: Alterações na documentação.
- `style`: Alterações que não afetam o significado do código (formatação, etc.).
- `refactor`: Uma alteração de código que não corrige um bug nem adiciona uma funcionalidade.
- `chore`: Outras alterações que não modificam arquivos de código fonte ou de teste.

### Estilo de Código

- **JavaScript**: Sigo as convenções de código já existentes no arquivo index.html. Mantenho o código limpo e legível.
- **CSS**: O projeto utiliza Tailwind CSS. Evito CSS customizado no `<style>`, a menos que seja estritamente necessário para um efeito específico que o Tailwind não suporte nativamente.

## Estrutura do Projeto

O LoFi Square foi projetado para ser o mais simples possível, com todo o código contido em um único arquivo:

- `index.html`: Contém toda a estrutura (HTML), estilização (CSS via Tailwind e uma tag `<style>`) e a lógica da aplicação (JavaScript).
  - As estações de rádio estão definidas em um objeto JavaScript chamado `categories` dentro da tag `<script>`.
- `assets/`: Contém os ícones e imagens utilizados na aplicação.
- `manifest.json`: Arquivo de configuração para a funcionalidade de Progressive Web App (PWA).

Obrigado por contribuir para tornar o LoFi Square ainda melhor!