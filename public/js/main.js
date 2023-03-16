const neutrofilo = document.getElementById("input-neutrofilo");
const neutrofiloSound = new Audio("./public/sound/neutrofilo.wav");

const linfocito = document.getElementById("input-linfocito");
const linfocitoSound = new Audio("./public/sound/linfocito.wav");

const monocito = document.getElementById("input-monocito");
const monocitoSound = new Audio("./public/sound/monocito.wav");

const eosinofilo = document.getElementById("input-eosinofilo");
const eosinofiloSound = new Audio("./public/sound/eosinofilo.wav");

const basofilo = document.getElementById("input-basofilo");
const basofiloSound = new Audio("./public/sound/basofilo.wav");

const linfocitoReactivo = document.getElementById("input-linfocito-reactivo");
const linfocitoReactivoSound = new Audio(
	"./public/sound/linfocito-reactivo.wav"
);

const bandas = document.getElementById("input-bandas");
const bandasSound = new Audio("./public/sound/bandas.wav");

const metamielocito = document.getElementById("input-metamielocito");
const metamielocitoSound = new Audio("./public/sound/metamielocito.wav");

const mielocito = document.getElementById("input-mielocito");
const mielocitoSound = new Audio("./public/sound/mielocito.wav");

const blastos = document.getElementById("input-blastos");
const blastosSound = new Audio("./public/sound/blastos.wav");

const otros = document.getElementById("input-otros");
const otrosSound = new Audio("./public/sound/otros.wav");

const total = document.getElementById("input-total");
const limite = document.getElementById("input-limite");
const paciente = document.getElementById("input-paciente");

const run = (cell, cellSound) => {
	if (~~total.value === ~~limite.value) {
		alert("Ha llegado el limite!");
		return;
	}

	cell.value = ~~cell.value + 1;
	cellSound.cloneNode(true).play();
	total.value = ~~total.value + 1;
	cell.focus();
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

	if (key === ".") {
		run(blastos, blastosSound);
	}
	if (key === "*") {
		run(otros, otrosSound);
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
	blastos.value = 0;
	otros.value = 0;

	paciente.value = "";
	total.value = 0;
	limite.value = 100;
};

const setLimite = () => {
	limite.value = prompt("Cual es su limite?");
};

async function main() {
	init();
	document.addEventListener("keydown", onKeypress);
}

main();
