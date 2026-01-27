# Análise do Erro de Build

## Erro Identificado
`Type error: Property 'removeChild' does not exist on type 'never'.`
Arquivo: `app/page.tsx:301:27`

## Explicação Técnica

O erro ocorre devido à análise de fluxo de controle (Control Flow Analysis) do TypeScript. O compilador deduziu que a variável `container` é do tipo `never` (impossível de existir) no local onde o erro é apontado.

### Fluxo Lógico do Código

1.  **Linha 286:** `const container = document.getElementById(...)` define `container` como `HTMLElement | null`.
2.  **Linha 287:** O código verifica `if (container) { ... }`.
3.  **Linha 296:** Dentro desse bloco `if`, existe um `return () => { ... }`. Isso significa que, se `container` for encontrado (existir), a função retorna ali mesmo.
4.  **Linha 304:** O código atinge o segundo `return` no final do `useEffect` **apenas se** não tiver entrado no `if` anterior.
5.  **Conclusão do Compilador:** Se a execução chegou ao segundo `return`, é **obrigatório** que `container` seja `null` (caso contrário, teria retornado antes).
6.  **O Problema:** Dentro do cleanup final, você faz a verificação `if (container && ...)`. O TypeScript entende que isso é uma contradição:
    *   O código só chega ali se `container` for `null`.
    *   O `if` tenta verificar se ele é verdadeiro.
    *   Portanto, dentro desse `if`, o TypeScript considera `container` como `never` (um estado impossível).
    *   Consequentemente, `container.removeChild` falha porque o tipo `never` não possui métodos.

## Por que isso acontece?

Logicamente, se o `container` não existe (`null`), o script nunca foi anexado a ele (o `appendChild` está dentro do primeiro `if`). Logo, não faz sentido tentar removê-lo (`removeChild`) no segundo cleanup. O segundo bloco de cleanup está tentando limpar algo que nunca foi feito.

## Resumo
O TypeScript está impedindo a execução de um código morto (dead code) e logicamente incoerente. Se `container` é nulo, não há como chamar `removeChild` nele, e nem necessidade, pois nada foi adicionado.
