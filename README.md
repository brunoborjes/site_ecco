# ECCO — Espaço de Arte e Experimentação

Site institucional e plataforma de programação cultural do **ECCO**, espaço independente de arte e experimentação localizado no bairro Bandeirantes, em Juiz de Fora/MG.

O projeto foi desenvolvido como uma Single Page Application (SPA) leve, responsiva e sem dependências externas de build, estruturada a partir do Documento-Mestre editorial da marca e alinhada à identidade cromática oficial da logo.

---

## Identidade Visual

A interface utiliza uma atmosfera escura derivada diretamente das cores oficiais da logo do **ECCO**:

| Token / Elemento | Cor / Valor | Aplicação |
| :--- | :--- | :--- |
| **Azul Profundo (Logo)** | `#0D1E7A` | Início do degradê institucional e luzes de fundo |
| **Roxo Intenso (Logo)** | `#54126B` | Centro do degradê institucional e destaques |
| **Vermelho Carmesim (Logo)** | `#CE121E` | Extremidade do degradê, acentos e alertas editoriais |
| **Fundo Principal** | `#070B24` | Base azul-índigo profundo das páginas |
| **Fundo Alternativo** | `#100926` | Seções alternadas em roxo-ameixa escuro |
| **Tipografia Principal** | `#FFFFFF` / `#D8DEF5` | Contraste máximo para leitura e títulos |

### Tipografia
* **Display / Títulos:** `Syne`
* **Corpo / Interface:** `Plus Jakarta Sans`
* **Tags Técnicas / Metadados:** `JetBrains Mono`

---

## Estrutura de Arquivos

```text
├── index.html   # Estrutura semântica, cabeçalho, drawer mobile, rodapé e modal universal
├── style.css    # Design system, variáveis de cor da logo, componentes e responsividade
├── script.js    # Base de dados oficial, roteador SPA (9 páginas), checkout e CMS local
└── README.md    # Documentação técnica e guia de atualização do projeto
```

---

## Páginas e Funcionalidades

O roteamento funciona via hash (`#rota`) com suporte ao histórico do navegador (`popstate`), contemplando **9 seções principais**:

1. **Início (`#inicio`):** Hero institucional, manifesto resumido, 4 frentes de atuação, vitrine de próximas oficinas, espetáculos em cartaz, destaque da Galeria Subversivos, chamada para artistas e informações práticas.
2. **O Ecco (`#o-ecco`):** História desde a fundação em 9 de março de 2024, proposta artística, 4 princípios fundamentais (*Acessibilidade, Criatividade, Encontro e Transformação*) e apresentação dos idealizadores (*Daniel Meotte* e *Melissa Coppe*).
3. **Aulas (`#aulas`):** Detalhamento técnico, valores e formato das modalidades de **Teatro**, **Pintura** e **Violão**, tabelas de horários por faixa etária e fluxo de matrícula via WhatsApp.
4. **Oficinas (`#oficinas`):** Explicação do formato mensal com materiais incluídos e vitrine interativa (*Pintura em Vinil, Criação de Carimbos, Noite Neon*).
5. **Teatro (`#teatro`):** História da companhia residente **Teatro do Contra**, apresentação da **Sala Iris Alves** (capacidade de até 30 lugares), horizonte de expansão 2027, vitrine de espetáculos e convocatória para companhias convidadas.
6. **Galeria Subversivos (`#subversivos`):** Histórico das 17 exposições realizadas, horários de visitação livre, chamada curatorial e catálogo de obras disponíveis para aquisição.
7. **Realize no Ecco (`#realize`):** Condições de locação cultural, estrutura disponível, bônus de 20 minutos para montagem/encerramento, tabela oficial de valores por hora e solicitação via WhatsApp.
8. **Agenda (`#agenda`):** Programação cronológica unificada com filtros por categoria (*Oficinas, Teatro, Exposições, Atividades especiais*) e alternância entre *Próximas atividades* e *Arquivo*.
9. **Contato (`#contato`):** Endereço, horários de visitação da galeria, canais oficiais e mapa interativo do bairro Bandeirantes.

### Recursos Integrados
* **CMS Local (Gestor de Conteúdo):** Acessível pelo rodapé em *"Gestão de Conteúdo (CMS Local)"*. Permite preencher endereço completo, WhatsApp, e-mail e cadastrar novas oficinas diretamente no navegador (`localStorage`), com opção de **exportar o arquivo `.json`** atualizado.
* **Checkout Estruturado:** Fluxo modal preparado para compra de vagas em oficinas, ingressos de espetáculos e obras da galeria com seleção de **Pix**, **Cartão de crédito** ou **Cartão de débito**, pronto para conexão com gateway de pagamento.
* **Atendimento WhatsApp:** Geração automática de mensagens contextualizadas para matrículas e solicitação de locação do espaço.
* **Rastreabilidade Editorial:** Etiquetas `[PENDENTE]` e painel de pendências garantem que nenhuma informação provisória seja publicada como definitiva sem revisão.

---

## Como Executar Localmente

Por utilizar apenas HTML5, CSS3 e JavaScript puro (ES6+), não é necessário instalar pacotes ou rodar etapas de compilação:

1. Clone ou baixe os arquivos do repositório em uma mesma pasta.
2. Abra o arquivo `index.html` diretamente no navegador ou utilize uma extensão de servidor local (como o **Live Server** no VS Code).

### Deploy (Vercel / Hospedagem Estática)
1. Suba os arquivos `index.html`, `style.css`, `script.js` e `README.md` para um repositório no GitHub.
2. Importe o repositório na **Vercel** (ou Netlify / GitHub Pages) mantendo o preset *Other / Static* (sem comando de build e diretório raiz `./`).
3. Conecte o domínio personalizado via DNS.

---

## Guia de Atualização e Checklist Pré-Publicação

Para tornar definitivos os dados atualizados pelo CMS Local, abra o arquivo `script.js` e preencha o objeto `ECCO_DEFAULT_DATA` no topo do código:

* `config.enderecoCompleto`: Logradouro, número, complemento e CEP no bairro Bandeirantes.
* `config.whatsappNumero`: Número oficial no formato internacional sem símbolos (ex.: `5532999999999`).
* `config.emailOficial`: E-mail institucional de atendimento.
* `idealizadores`: Biografias individuais de Daniel Meotte e Melissa Coppe.
* `tabelasHorarios`: Associação explícita entre cada grade de horários e as modalidades de Teatro e Pintura.
* `oficinas`, `espetaculos` e `obras`: Datas confirmadas, vagas/lugares, classificação indicativa, valores e fotos reais em substituição às molduras indicativas.
