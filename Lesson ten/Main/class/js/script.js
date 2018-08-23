class Options {
	constructor(height, width, bg, fontSize, textAlign) {
		this.height = height;
		this.width = width;
		this.bg = bg;
		this.fontSize = fontSize;
		this.textAlign = textAlign;
	}

	newDiv(height = this.heigth, width = this.width, bg = this.bg, fontSize = this.fontSize, textAlign = this.textAlign) {
		let div = document.createElement('div'),
			script = document.getElementsByTagName('script')[0];

		document.body.insertBefore(div, script);
		div.innerHTML = 'Hello';
		div.style.cssText = `height : ${height}px; \
							 width : ${width}px; \
							 background : ${bg}; \
							 font-size : ${fontSize}px; \
							 text-align : ${textAlign}; \
							 `;
		return div;
	}
}

const obj = new Options(100,200,'#FF8C00',20,'left');

console.log(obj.newDiv(40,150,'#7CFC00',30,'center'));