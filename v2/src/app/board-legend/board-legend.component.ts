import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { LegendElement, Legend } from '../shared/models/legend';

@Component({
	selector: 'tro-board-legend',
	templateUrl: './board-legend.component.html',
	styleUrls: ['./board-legend.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoardLegendComponent {
	private _legendData: Legend;
	legendElements: LegendElement[];
	isNegative = false;

	@Input()
	set legendData(data: Legend) {
		if (data) {
			this._legendData = data;
			this.legendElements = data.elements.sort((a, b) => a.forValue - b.forValue).filter(o => o.forValue != 0);
			this.isNegative = data.isNegative;
		}
	}
}
