const express = require('express');
var bodyParser = require('body-parser')
const app = express();
const port = 3000;
const cors = require('cors');
app.use(cors({
    origin: '*',
	methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));
app.use(bodyParser.json());

cursor = 0;
movieList = [];
/*
	{id:1, nome: "Jason-X", sinopse: "No ano de 2010, Jason Voorhees é capturado pelo governo dos Estados Unidos e mantido num centro de pesquisas em Crystal Lake. Rowan LaFontaine, uma cientista a serviço do governo, decide colocar Jason em estado de criopreservação após várias tentativas fracassadas de matá-lo. Enquanto o soldado Samuel Johnson coloca um cobertor sobre Jason, o Dr. Wimmer, o sargento Marcus e outros soldados esperam levar o assassino dali a fim de realizar estudos sobre a rápida regeneração celular de Jason. Eles retiram o cobertor que estava sobre Jason, mas encontram Johnson morto. Jason se libertou e mata os soldados e Wimmer. Rowan atrai Jason para uma cápsula criogênica. Ela ativa a cápsula, mas Jason consegue romper o compartimento e esfaqueia Rowan no abdome, enquanto o fluido criogênico vaza para a sala lacrada, congelando os dois.", ano: 2001, rank: 7.1},
	{id:2, nome: "Uma Noite Alucinante", sinopse: "Cinco estudantes da Universidade de Michigan decidem passar um final de semana em uma casa isolada. Lá eles encontram o livro dos mortos, um documento que data da época da Babilônia e que está relacionado ao livro dos mortos egípcio. Enquanto vasculham a casa os amigos gravam em fita alguns encantamentos demoníacos, escritos no livro. A partir de então eles são possuídos por espiritos, um a um. O primeiro alvo é Cheryl (Ellen Sandweiss), brutalmente estuprada pelas forças do mal. Ash (Bruce Campbell), seu irmão, resolve levá-la a uma cidade próxima, mas descobre que a única ponte que leva ao local está destruída. Logo a transformação de Cheryl em demônio é concluída, resultando em seu ataque aos amigos.", ano: 1981, rank: 8.0},
	{id:3, nome: "Exorcista", sinopse: "Em Georgetown, Washington, uma atriz vai gradativamente tomando consciência que a sua filha de doze anos está tendo um comportamento completamente assustador. Deste modo, ela pede ajuda a um padre, que também um psiquiatra, e este chega a conclusão de que a garota está possuída pelo demônio. Ele solicita então a ajuda de um segundo sacerdote, especialista em exorcismo, para tentar livrar a menina desta terrível possessão.", ano: 1973, rank: 9.5},
	{id:4, nome: "Brinquedo Assassino", sinopse: "Um serial killer é morto em um tiroteio com a polícia, mas antes de morrer utiliza seus conhecimentos de vodu e transfere sua alma para um boneco. Um menino ganha exatamente este brinquedo como presente da sua mãe. O menino tenta alertar que o boneco está vivo, mas sua mãe e um detetive da polícia só acreditam nele após o brinquedo ter feito várias vítimas. Mas o boneco está realmente interessado é no garoto, pois só no corpo dele poderá continuar vivo, e isto coloca a criança em grande perigo.", ano: 1989, rank: 7.9},
	{id:5, nome: "A Bolha Assassina", sinopse: "Um meteorito cai perto da cidade de Arborville, Califórnia e um morador de rua o descobre. Uma substância gelatinosa (o Blob ou Bolha) gruda em sua mão, causando-lhe grande dor. Três estudantes do ensino médio - Brian Flagg, Meg Penny e Paul Taylor - socorrem o homem e o levam a um hospital. Paul testemunha que a metade do homem derrete pela exposição ao Blob e, ao chamar por ajuda, mas também é absorvido. Meg ouve os gritos e vê Paul ser devorado pelo Blob e, quando tenta puxá-lo, arranca o braço dele. Ela desmaia e o Blob escorre para fora do hospital e mata o casal.", ano: 1988, rank: 6.5},
*/

app.get('/movies', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(movieList));
})

app.get('/movies/:id', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
	var result = null;
	movieList.forEach(movie => {
		result = movieList.filter(x => x.id == req.params.id);
	});
    res.end(JSON.stringify(result));
})

app.post('/movies', (req, res) => {
	console.log(`POST /movies: ${JSON.stringify(req.body)}`);
	cursor++;
	movie = {
		id: cursor,
		nome: req.body.nome,
		sinopse: req.body.sinopse,
		ano: req.body.ano,
		rank: req.body.rank,
	};
	movieList.push(movie);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(movie));
})

app.put('/movies', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(movieList));
})

app.listen(port, '0.0.0.0', () => {
	console.log(`Example app listening on port ${port}`)
})