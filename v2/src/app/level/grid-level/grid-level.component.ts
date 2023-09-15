import { Component } from '@angular/core';
import { LevelBaseComponent } from '../level-base.component';
import { GameService } from 'src/app/services/game.service';
import staticData from '../../../dataGridExample.json';
import { Router } from '@angular/router';

@Component({
	selector: 'tro-grid-level',
	templateUrl: './grid-level.component.html',
	styleUrls: ['./grid-level.component.scss', '../level-base.component.scss']
})
export class GridLevelComponent extends LevelBaseComponent {
	settings = this.gameService.settingsObs;
	constructor(gameService: GameService, router: Router) {
		super(gameService);
		if (router.url.includes('own') == false) {
			this.gameService.loadSettings(staticData);
		}
		gameService.initialiseGridMode();
	}
}
