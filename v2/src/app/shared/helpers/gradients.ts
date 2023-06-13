export class Gradient {
	constructor(startinGolor: string, endingColor: string, colors: string[]) {
		this.startingColor = startinGolor;
		this.endingColor = endingColor;
		this.colors = colors;
	}

	colors: string[];
	startingColor: string;
	endingColor: string;

	calculateColor(ratio: number) : string {
		var hex = (x: number) => {
			const strValue = x.toString(16);
			return (strValue.length == 1) ? '0' + strValue : strValue;
		};

		var r = Math.ceil(parseInt(this.startingColor.substring(0, 2), 16) * ratio + parseInt(this.endingColor.substring(0, 2), 16) * (1 - ratio));
		var g = Math.ceil(parseInt(this.startingColor.substring(2, 4), 16) * ratio + parseInt(this.endingColor.substring(2, 4), 16) * (1 - ratio));
		var b = Math.ceil(parseInt(this.startingColor.substring(4, 6), 16) * ratio + parseInt(this.endingColor.substring(4, 6), 16) * (1 - ratio));

		return hex(r) + hex(g) + hex(b);
	}

	calculateColorRGB(ratio: number) : number[] {
		var r = Math.ceil(parseInt(this.startingColor.substring(0, 2), 16) * ratio + parseInt(this.endingColor.substring(0, 2), 16) * (1 - ratio));
		var g = Math.ceil(parseInt(this.startingColor.substring(2, 4), 16) * ratio + parseInt(this.endingColor.substring(2, 4), 16) * (1 - ratio));
		var b = Math.ceil(parseInt(this.startingColor.substring(4, 6), 16) * ratio + parseInt(this.endingColor.substring(4, 6), 16) * (1 - ratio));

		return [r, g, b];
	}
}

let gradients: Map<string, Gradient> = new Map<string, Gradient>();
gradients.set('blue', new Gradient("eff3ff", "08519c", ['#d2b188', '#eff3ff', '#bdd7e7', '#6baed6', '#3182bd', '#08519c']));
gradients.set('green', new Gradient("edf8e9", "006d2c", ['#d2b188', '#edf8e9', '#bae4b3', '#74c476', '#31a354', '#006d2c']));
gradients.set('orange', new Gradient("feedde", "a63603", ['#d2b188', '#feedde', '#fdbe85', '#fd8d3c', '#e6550d', '#a63603']));
gradients.set('purple', new Gradient("f2f0f7", "54278f", ['#d2b188', '#f2f0f7', '#cbc9e2', '#9e9ac8', '#756bb1', '#54278f']));
gradients.set('red', new Gradient("fee5d9", "a50f15", ['#d2b188', '#fee5d9', '#fcae91', '#fb6a4a', '#de2d26', '#a50f15']));
gradients.set('yellow', new Gradient("F8F27D", "670B0D", ['#d2b188', '#F8F27D', '#F7D068', '#F6A825', '#AE5322', '#670B0D']));

export default gradients;

export enum DefaultGradients {
	Blue = 'blue',
	Green = 'green',
	Orange = 'orange',
	Purple = 'purple',
	Red = 'red',
	Yellow = 'yellow'
}

export class CustomColors {
	private colors = new Map<number, string>();

	get(i: number) {
		const returnVal = this.colors.get(i);
		if (!returnVal) return "FFFFFF";
		return returnVal;
	}

	set(key: number, value: string) {
		this.colors.set(key, value);
	}

	getRgb(i: number) {
		return this.colorToRgb(this.colors.get(i));
	}

	colorToRgb(hex: string | undefined) {
		if (!hex) return [255, 255, 255];
		const r = hex.slice(0, 2);
		const g = hex.slice(2, 4);
		const b = hex.slice(4, 6);

		return [parseInt(r, 16), parseInt(g, 16), parseInt(b, 16)];
	}
}