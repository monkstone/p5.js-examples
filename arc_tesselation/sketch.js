// after openprocessing sketch by Manoylov
// https://www.openprocessing.org/sketch/516672
var sivId;
var isColorMode = true;
var bgClr = '#FFFFFF';
var colors = ['#152A3B', '#158ca7', '#F5C03E', '#D63826', '#0F4155', '#7ec873', '#4B3331'];

function setup() {
	createCanvas(500, 500);
	background(0);
	noLoop();
	strokeWeight(1.5);
	strokeCap(SQUARE);
	stroke(0, 200);
	sivId = setInterval(function() {
		genParcattern();
	}, 3000);
}

function draw() {
	genParcattern();
}

function mousePressed(evt) {
	if (evt.target.nodeName === 'CANVAS') {
		if (sivId) {
			clearInterval(sivId);
		}

		if (evt.button === 0) {
			genParcattern();
		} else if (evt.button === 1) {
			isColorMode = !isColorMode;
			genParcattern();
		}
	}
}

function genParcattern() {
	var circNum = ~~random(4, 10); // 4..9
	var blockSize = ~~random(30, 70);// 30..69

	bgClr = isColorMode ? colors[colors.length - 1] : '#FFFFFF';
	fill(bgClr);
	rect(0, 0, width, height);

	for (var y = blockSize / 2; y < height + blockSize / 2; y += blockSize) {
		for (var x = blockSize / 2; x < width + blockSize / 2; x += blockSize) {
			push();
			translate(x, y);
			rotate(HALF_PI * Math.round(random(4)));

			for (var i = circNum; i > 0; --i) {
				var diam = blockSize * 2 * i / (circNum + 1);
				var arcColor = (i < 2 || !isColorMode) ? bgClr : colors[separateIdx(i - 1, circNum + 1)];
				fill(arcColor)
				arc(-blockSize / 2, -blockSize / 2, diam, diam, 0, HALF_PI);
				arc(blockSize / 2, blockSize / 2, diam, diam, PI, PI + HALF_PI);
			}
			pop();
		}
	}
	colors = shuffle(colors);
}

function keyTyped() {
	switch (key.toLowerCase()) {
		case 'g':
			genParcattern();
			break;
		case 'b':
			isColorMode = !isColorMode;
			genParcattern();
			break;
		case 's':
			save('parcattern-' + ~~random(100, 900) + '.png');
			break;
	}
}

function separateIdx(idx, length) {
	return Math.floor(Math.abs(idx - (length - 1) / 2));
}

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = ~~(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}