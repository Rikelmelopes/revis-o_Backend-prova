// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Conta from "App/Models/Conta";

export default class ContasController {
  index() {
    return Conta.all();
  }

  store({ request }) {
    const dados = request.only([
      "cliente_id",
      "tipo",
      "banco",
      "agencia",
      "saldo",
      "data_criacao",
    ]);
    return Conta.create(dados);
  }
}
