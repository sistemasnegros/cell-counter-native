const neutrofilo = document.getElementById("neutrofilo");
const neutrofiloSound = new Audio("./public/sound/neutrofilo.wav");

const linfocito = document.getElementById("linfocito");
const linfocitoSound = new Audio("./public/sound/linfocito.wav");

const monocito = document.getElementById("monocito");
const monocitoSound = new Audio("./public/sound/monocito.wav");

const eosinofilo = document.getElementById("eosinofilo");
const eosinofiloSound = new Audio("./public/sound/eosinofilo.wav");

const basofilo = document.getElementById("basofilo");
const basofiloSound = new Audio("./public/sound/basofilo.wav");

const linfocitoReactivo = document.getElementById("linfocito-reactivo");
const linfocitoReactivoSound = new Audio(
	"./public/sound/linfocito-reactivo.wav"
);

const bandas = document.getElementById("bandas");
const bandasSound = new Audio("./public/sound/bandas.wav");

const metamielocito = document.getElementById("metamielocito");
const metamielocitoSound = new Audio("./public/sound/metamielocito.wav");

const mielocito = document.getElementById("mielocito");
const mielocitoSound = new Audio("./public/sound/mielocito.wav");

const blastos = document.getElementById("blastos");
const blastosSound = new Audio("./public/sound/blastos.wav");

const promielocito = document.getElementById("promielocito");
const promielocitoSound = new Audio("./public/sound/promielocito.wav");

const finishSound = new Audio("./public/sound/finish.wav");

const total = document.getElementById("input-total");
const limite = document.getElementById("input-limite");
const paciente = document.getElementById("input-paciente");

const runFinish = () => {
	finishSound.cloneNode(true).play();

	generateReport2();

	if (paciente.value) {
		generateReport();
	}
};

const run = (cell, cellSound) => {
	if (~~total.value === ~~limite.value) {
		return runFinish();
		// return alert("Ha llegado a su limite!");
	}

	cell.value = ~~cell.value + 1;
	cellSound.cloneNode(true).play();
	total.value = ~~total.value + 1;
	cell.focus();

	if (~~total.value === ~~limite.value) {
		return setTimeout(runFinish, 100);
	}
};

const onKeypress = ({ key }) => {
	if (key === "1") {
		run(neutrofilo, neutrofiloSound);
	}
	if (key === "2") {
		run(linfocito, linfocitoSound);
	}

	if (key === "3") {
		run(monocito, monocitoSound);
	}

	if (key === "4") {
		run(eosinofilo, eosinofiloSound);
	}

	if (key === "5") {
		run(basofilo, basofiloSound);
	}

	if (key === "6") {
		run(linfocitoReactivo, linfocitoReactivoSound);
	}

	if (key === "7") {
		run(bandas, bandasSound);
	}

	if (key === "8") {
		run(metamielocito, metamielocitoSound);
	}

	if (key === "9") {
		run(mielocito, mielocitoSound);
	}

	if (key === "0") {
		run(promielocito, promielocitoSound);
	}

	if (key === ".") {
		run(blastos, blastosSound);
	}
};

const init = () => {
	neutrofilo.value = 0;
	linfocito.value = 0;
	monocito.value = 0;
	eosinofilo.value = 0;
	basofilo.value = 0;
	linfocitoReactivo.value = 0;
	bandas.value = 0;
	metamielocito.value = 0;
	mielocito.value = 0;
	promielocito.value = 0;
	blastos.value = 0;

	paciente.value = "";
	total.value = 0;
};

const setLimite = () => {
	const value = prompt("Cual es su limite?");

	if (isNaN(value)) {
		return setLimite();
	}
	limite.value = value;
};

const setPaciente = () => {
	paciente.value = prompt("Cual es su paciente?");
};

const generateReport = () => {
	const report = `
H|1|ORION|20230315170138
P|${paciente.value}|
R|1|1^${neutrofilo.value}
R|2|2^${linfocito.value}
R|3|3^${monocito.value}
R|4|4^${eosinofilo.value}
R|5|5^${basofilo.value}
R|6|6^${linfocitoReactivo.value}
R|7|7^${bandas.value}
R|8|8^${metamielocito.value}
R|9|9^${mielocito.value}
R|10|10^${promielocito.value}
L|1|N	
	`;

	alert(report);
};

const generateReport2 = () => {
	const cells = [
		neutrofilo,
		linfocito,
		monocito,
		eosinofilo,
		basofilo,
		linfocitoReactivo,
		bandas,
		metamielocito,
		mielocito,
		promielocito,
		blastos,
	];

	const cellFilted = cells.filter((e) => e.value !== "0");

	const cellStored = cellFilted.map((cell) => ({
		name: cell.id,
		por: ~~cell.value / ~~limite.value,
	}));

	const cellOutput = cellStored.reduce(
		(a, e) => `${a} ${e.name}: %${e.por} \n`,
		""
	);

	alert(cellOutput);
};

async function main() {
	limite.value = 100;
	init();
	document.addEventListener("keydown", onKeypress);
	paciente.addEventListener("focus", setPaciente);
}

main();
