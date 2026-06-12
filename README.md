# 🍽️ Restaurant API

Uma API RESTful robusta e escalável desenvolvida com Node.js e TypeScript para o gerenciamento completo do fluxo de atendimento de um restaurante. 

Este projeto permite gerenciar produtos, mesas, controlar o status de ocupação (abrir/fechar sessões) e registrar pedidos calculando totais de consumo em tempo real através de consultas otimizadas no banco de dados.

## ✨ Funcionalidades e Regras de Negócio Implementadas

* **Gerenciamento de Produtos:** CRUD completo com validação de dados de entrada.
* **Controle de Mesas (Tables):** Cadastro e listagem do mapa de mesas do restaurante.
* **Sessões de Mesas (Table Sessions):**
  * Abertura de sessão para iniciar o atendimento.
  * Validação para impedir a abertura de uma mesa já ocupada.
  * Fechamento de sessão com registro exato de data e hora (`closed_at`).
* **Pedidos (Orders):**
  * Adição de produtos a uma mesa aberta.
  * **Histórico de Preços:** O sistema salva o preço do produto no momento da compra (Snapshot), garantindo que alterações futuras no cardápio não afetem os relatórios de vendas passadas.
  * Cálculo de totais e sub-totais de consumo da mesa utilizando `JOINs` e funções agregadas (`SUM`, `COALESCE`) diretamente via banco de dados para máxima performance.

## 🚀 Tecnologias Utilizadas

* **[Node.js](https://nodejs.org/en/)** - Ambiente de execução JavaScript.
* **[TypeScript](https://www.typescriptlang.org/)** - Superconjunto de JavaScript que adiciona tipagem estática.
* **[Express](https://expressjs.com/)** - Framework web rápido e minimalista.
* **[Knex.js](https://knexjs.org/)** - SQL Query Builder flexível com tipagem inteligente de repositórios.
* **[SQLite](https://www.sqlite.org/index.html)** - Banco de dados relacional (fácil configuração para ambiente de desenvolvimento).
* **[Zod](https://zod.dev/)** - Declaração e validação de schemas/dados de entrada.
* **[tsx](https://github.com/privatenumber/tsx)** - Executor TypeScript moderno.

## ⚙️ Pré-requisitos

Para clonar e rodar este projeto, você precisará ter instalado:
* [Node.js](https://nodejs.org/en/) (Versão 18 ou superior)
* [Git](https://git-scm.com/)