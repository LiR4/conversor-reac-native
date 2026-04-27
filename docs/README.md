# 💱 Conversor de Moedas (React Native)

Este aplicativo mobile foi desenvolvido utilizando **React Native** com
o objetivo de realizar a conversão entre diferentes moedas de forma
simples e rápida.

## 📱 Funcionalidades

-   Seleção de moeda de origem e destino através de dropdowns
-   Campo de entrada para o valor a ser convertido
-   Busca dinâmica dentro da lista de moedas
-   Consumo de API para obter a cotação em tempo real
-   Exibição do valor convertido

## 🌐 Integração com API

Para obter a lista de moedas disponíveis, foi realizado um **request**
para o endpoint:

/api/currencies

Já a conversão de valores é feita através da API:

https://api.unirateapi.com/api/convert

Parâmetros utilizados: - amount: valor a ser convertido - from: moeda de
origem - to: moeda de destino - api_key: chave de autenticação

## ⚙️ Estrutura do Projeto

-   App.js: lógica principal e chamadas à API
-   InputCoin: componente de seleção com busca
-   coins.json: lista de moedas obtida via API

## 🧠 Funcionamento

O usuário insere um valor, seleciona as moedas e clica em
**Converter**.\
A aplicação realiza uma requisição à API e exibe o resultado da
conversão.

## 🎯 Objetivo

-   Praticar consumo de APIs (fetch)
-   Trabalhar com estados no React Native
-   Criar componentes reutilizáveis
-   Melhorar experiência do usuário

------------------------------------------------------------------------

🚀 Projeto base para futuras melhorias como histórico de conversões e
suporte a criptomoedas.
