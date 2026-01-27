# Plano de Implementação: Otimização BeeStay Institucional

Este documento descreve as etapas para melhorar a estrutura, experiência do usuário (UX) e conversão da landing page.

## Fase 1: Estrutura e Correções Críticas (Imediato) ✅
**Objetivo:** Modularizar o código para facilitar manutenção e corrigir bugs visíveis.

- [x] **Extrair Componente `Header`:**
    - Mover todo o código de navegação (`<nav>`) de `page.tsx` para `app/components/Header.tsx`.
    - Isso isola a lógica do menu e limpa o arquivo principal.
- [x] **Corrigir Menu Mobile:**
    - Implementar estado `useState` (`isMenuOpen`) no novo componente `Header`.
    - Adicionar lógica de abertura/fechamento ao clicar no botão hambúrguer.
    - Adicionar ícone de "Fechar" (X) quando o menu estiver aberto.
- [x] **Otimização de Imagens:**
    - Substituir tags `<img>` nativas pelo componente `<Image />` do Next.js.
    - **Benefício:** Carregamento mais rápido (WebP), lazy loading automático e melhoria no Core Web Vitals (LCP).

## Fase 2: Experiência do Usuário (UX) ✅
**Objetivo:** Tornar a navegação fluida e o site mais responsivo.

- [x] **Indicador de Seção Ativa (ScrollSpy):**
    - Fazer os links do menu mudarem de cor conforme o usuário rola a página (ex: ficar dourado quando estiver na seção "Serviços").
- [ ] **Refinamento do Formulário Bitrix:**
    - Criar um wrapper/container com altura fixa ou esqueleto de carregamento para evitar que a página "pule" (Layout Shift) quando o formulário carrega.
- [x] **Feedback Visual em Botões:**
    - Adicionar estados de `hover` e `active` mais perceptíveis nos botões de CTA.

## Fase 3: Conversão e Performance
**Objetivo:** Aumentar a taxa de contatos e velocidade.

- [x] **Sticky CTA Mobile:**
    - Adicionar uma barra fixa no fundo da tela APENAS para mobile com o botão "Agendar Consultoria" ou WhatsApp, garantindo que a conversão esteja sempre a um toque de distância.
- [ ] **Lazy Loading de Componentes Pesados:**
    - Carregar o carrossel e o formulário apenas quando entrarem na viewport (se necessário para performance extrema).

## Fase 4: Limpeza de Código
- [ ] **Remover CSS não utilizado:** Verificar se há classes no `globals.css` que podem ser removidas ou convertidas para Tailwind puro.
- [ ] **Padronização de Tipos:** Garantir que as interfaces TypeScript estejam bem definidas.

---

**Status:**
- ✅ Fase 1: Concluída
- ✅ Fase 2: Concluída (exceto Bitrix form refinement)
- 🔄 Fase 3: Parcialmente concluída (Sticky CTA implementado)
- ⏳ Fase 4: Pendente

**Implementações Realizadas:**
1. Componente Header extraído e modularizado (app/components/Header.tsx)
2. Menu mobile funcional com ícone de fechar (X)
3. Todas as imagens convertidas para Next.js Image component
4. ScrollSpy implementado - links do menu destacam a seção ativa
5. Barra CTA sticky mobile adicionada
6. Estados hover e active aprimorados em todos os botões CTA
