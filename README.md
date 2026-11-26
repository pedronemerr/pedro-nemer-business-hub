# Pedro Nemer Business Hub — V3.3

Pacote atualizado para substituir integralmente o conteúdo do repositório GitHub existente.

## Alterações desta versão
- Hero usa exatamente a composição enviada e aprovada pelo usuário (`public/hero-aprovada.png`).
- Logotipo oficial da ÁPICE GROWTH MARKETING aplicado na seção da empresa (`public/apice-growth-marketing.png`).
- Setas de navegação e chamadas substituídas por ícones SVG vetoriais, sem emojis.
- Hero em largura total, com texto alinhado ao grid do site e adaptação para celular.
- Fundos, animações e demais setores preservados da versão anterior aprovada.
- Removidas imagens antigas de Hero que poderiam causar confusão.

## Marcas oficiais
- Pedro Nemer
- ÁPICE GROWTH MARKETING
- AUTOM CRM
- ÁPICE FLOW

## Estrutura
- `index.html`
- `package.json`
- `src/main.jsx`
- `src/styles.css`
- `public/hero-aprovada.png`
- `public/apice-growth-marketing.png`
- `public/autom-logo.png`
- `public/apiceflow-logo.png`

## Build
```bash
npm install
npm run build
```

Saída do Vite: `dist`

Não há dependência nem importação de `lucide-react`. As setas são SVGs inline.

## StayCloud
- Branch: `main`
- Framework: Vite
- Diretório raiz: `./`
- Comando de build: `npm run build`
- Diretório de saída: `dist`
