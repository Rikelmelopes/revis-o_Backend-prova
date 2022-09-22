import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import Conta from "App/Models/Conta";

export default class extends BaseSeeder {
  public async run() {
    await Conta.createMany([
      {
        tipo: "P",
        banco: 17,
        agencia: "00000000",
        saldo: 1200,
        dataCriacao: new Date(2020, 5, 30),
        clienteId: 1,
      },
    ]);
  }
}
