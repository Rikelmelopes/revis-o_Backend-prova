// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Cliente from "App/Models/Cliente";

export default class ClientesController {
  index() {
    return Cliente.all();
  }

  store({ request }) {
    const dados = request.only([
      "nome",
      "telefone",
      "cep",
      "endereco",
      "data_nascimento",
    ]);
    return Cliente.create(dados);
  }
}
