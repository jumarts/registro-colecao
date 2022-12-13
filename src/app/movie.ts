export class Movie {
   id: number;
   nome: string;
   sinopse: string;
   ano: number;
   rank: number;
   
   constructor(id: number, nome: string, sinopse: string, ano: number, rank: number) {
	   this.id = id;
	   this.nome = nome;
	   this.sinopse = sinopse;
	   this.ano = ano;
	   this.rank = rank;
   }
}