# BeeStay - Landing Page Institucional

Landing page moderna e responsiva para a BeeStay, empresa especializada em gestão de imóveis para Short Stay (aluguel de temporada).

## 🚀 Tecnologias

- **HTML5** - Estrutura semântica
- **Tailwind CSS** - Framework CSS via CDN
- **Phosphor Icons** - Biblioteca de ícones
- **JavaScript Vanilla** - Interatividade (menu mobile, FAQ accordion, animação de logos)

## 📂 Estrutura do Projeto

```
BeestayInstitucional/
├── landing-page-v3.html   # Versão atual da landing page
├── landing-page-v2.html   # Versão anterior
├── index.html             # Página inicial
├── logo.svg               # Logo principal
├── icone.svg              # Ícone da marca
├── Airbnb.svg             # Logo parceiro
├── Booking.svg            # Logo parceiro
├── Decolar.svg            # Logo parceiro
├── Expedia.svg            # Logo parceiro
└── README.md              # Este arquivo
```

## 🎨 Características da Landing Page v3

### Seções
1. **Hero Section** - Título impactante com mockup de celular interativo
2. **Logo Bar** - Carrossel animado de logos parceiros
3. **Como Funciona** - 3 cards com recursos principais
4. **Diferenciais** - 4 cards destacando vantagens da BeeStay
5. **FAQ** - Accordion com 5 perguntas frequentes
6. **CTA** - Formulário de contato
7. **Footer** - Links e redes sociais

### Design
- **Cores principais:** Preto (#0a0a0a), Dourado (#d4a853)
- **Tipografia:** Inter (Google Fonts)
- **Animações:** Hover effects, transições suaves
- **Gradientes:** Aplicados em cards e mockup

### Responsividade
- **Mobile-first** com breakpoints sm, md, lg
- **Menu hamburger** funcional para telas menores
- **Mockup adaptativo:** 240px (mobile) / 280px (desktop)
- **Tipografia escalonada:** text-sm → text-base → text-lg
- **Padding dinâmico:** px-4 → px-8 → px-16

## 💻 Como Executar

1. Clone ou baixe o projeto
2. Abra `landing-page-v3.html` em um navegador
3. Ou use um servidor local:

```bash
# Com Python
python -m http.server 8000

# Com Node.js (npx)
npx serve .
```

## 📱 Breakpoints

| Dispositivo | Largura | Classes |
|-------------|---------|---------|
| Mobile | < 640px | (default) |
| SM | ≥ 640px | sm: |
| MD | ≥ 768px | md: |
| LG | ≥ 1024px | lg: |

## 🔧 Customização

### Cores (tailwind.config)
```javascript
colors: {
  'bee-gold': '#d4a853',
  'bee-gold-dark': '#b8912e',
  'bee-black': '#0a0a0a'
}
```

### Modificar Conteúdo
- Textos: Editar diretamente no HTML
- Imagens: Substituir SVGs na pasta raiz
- Cores: Alterar classes Tailwind

## 📦 Dependências (CDN)

- Tailwind CSS v3.4
- Phosphor Icons v2.0

## ✅ Features Implementadas

- [x] Design moderno e profissional
- [x] Responsividade completa (mobile, tablet, desktop)
- [x] Menu mobile funcional
- [x] Mockup de celular interativo
- [x] Carrossel de logos animado
- [x] FAQ accordion
- [x] Formulário de contato
- [x] Hover effects e transições
- [x] SEO básico (meta tags)

## 📄 Licença

Projeto proprietário - BeeStay © 2025
