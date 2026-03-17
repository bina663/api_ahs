
# 🧠 API - AHS: Asylum

## 📌 Sobre o projeto

Essa API foi desenvolvida com base em uma das minhas séries favoritas: **American Horror Story**, mais especificamente na temporada **Asylum**.

O objetivo do projeto foi praticar desenvolvimento de APIs REST, organização de dados e consumo de informações de forma estruturada, utilizando uma temática que gosto — o que deixou o processo muito mais interessante.

---

## 🚀 Funcionalidades

* Listagem de personagens da temporada *Asylum*
* Retorno de dados em formato JSON
* Estrutura simples e fácil de consumir
* Ideal para estudos de consumo de API (frontend ou backend)

---

## 🛠️ Tecnologias utilizadas

* Node.js
* Express
* JSON (simulando banco de dados)
* MongoDB *(planejado inicialmente)*

---

## ⚠️ Observação importante

Inicialmente, os dados seriam armazenados em um banco **MongoDB**.
Porém, devido a limitações da plataforma de hospedagem (Render), não foi possível estabelecer a conexão com o banco.

Como solução alternativa, utilizei um arquivo `.json` para armazenar os dados, garantindo que a API continuasse funcionando normalmente.

---

## 🔗 Acesse a API

Você pode acessar os dados diretamente pelo link abaixo:

👉 [https://api-ahs-asylum.onrender.com/caractersasylum](https://api-ahs-asylum.onrender.com/caractersasylum](https://api-ahs.vercel.app/)

---

## 📚 Exemplo de resposta

```json
[
  {
      "name":"Dr. Oliver Thredson", 
      "intérprete": "Zachary Quinto",
      "image": "https://i.pinimg.com/originals/b1/3f/ef/b13fef07f8d44a889c62fbf4af64b2a1.gif"
  },
  {
      "name":"Monsignor Timothy Howard", 
      "intérprete": "Joseph Fiennes",
      "image": "https://i.pinimg.com/originals/62/dc/d8/62dcd825b6d84c26b7c62f7dcfb0c811.gif"
  }
]
```

---

## 💡 Objetivo do projeto

Este projeto foi desenvolvido com foco em:

* Praticar criação de APIs REST
* Trabalhar com rotas e estrutura de dados
* Simular integração com banco de dados
* Construir algo baseado em um tema pessoal (série favorita)

---

## 🔮 Melhorias futuras

* Integração real com MongoDB
* Filtros por personagem
* Rotas individuais (GET por ID)
* Deploy com banco funcional
* Documentação com Swagger

---

## 🎯 Considerações finais

Esse projeto foi feito para estudo e prática, mas também como uma forma de unir programação com algo que eu gosto.
Pretendo continuar evoluindo essa API e adicionar novas funcionalidades futuramente 🚀

---

