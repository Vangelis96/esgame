import { FieldType } from "./field-type";
import { ProductionType } from "./production-type";

export class Field {
	editable = false;
	type: FieldType;
	assigned = false;
	productionType: ProductionType | null;
	score: number;
	id: number;
	path: string;

	constructor(id: number, type: FieldType, score: number, productionType: ProductionType | null = null, editable = false, assigned = false, path : string = "") {
		this.id = id;
		this.type = type;
		this.productionType = productionType;
		this.score = score;
		this.path = path;
		this.editable = editable;
		this.assigned = assigned;
	}
}

export enum HighlightSide {
	ALLSIDES = "--all-sides",
	TOP = "--top",
	BOTTOM = "--bottom",
	LEFT = "--left",
	RIGHT = "--right",
	TOPLEFT = "--top-left",
	TOPRIGHT = "--top-right",
	BOTTOMLEFT = "--bottom-left",
	BOTTOMRIGHT = "--bottom-right",
	NONE = ""
}

export class HighlightField {
	id: number;
	side: HighlightSide;
}

export class SelectedField {
	fields: HighlightField[];
	productionType: ProductionType;
	scores: {score: number, name: string}[] = [];

	constructor(ids: HighlightField[], productionType: ProductionType) {
		this.fields = ids;
		this.productionType = productionType;
		this.updateScore();
	}

	updateScore() {
		var idsOnly = this.fields.map(o => o.id);
		this.scores.push({
			name: this.productionType.suitabilityMap.name,
			score: this.productionType.suitabilityMap.getScore(idsOnly)
		});
		this.productionType.consequenceMaps.forEach(o => {
			this.scores.push({
				name: o.name,
				score: o.getScore(idsOnly) * -1
			});
		});
	}
}