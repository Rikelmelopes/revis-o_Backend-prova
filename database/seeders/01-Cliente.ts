import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import Cliente from "App/Models/Cliente";

export default class extends BaseSeeder {
  public async run() {
    await Cliente.createMany([
      {
        nome: "ADS",
        telefone: "61984654655",
        cep: "72215523",
        endereco: "rua 12 cj c",
        cpf: "08113596119",
        salario: 2000,
        dataNascimento: new Date(2020, 5, 30),
      },
    ]);
  }
}
