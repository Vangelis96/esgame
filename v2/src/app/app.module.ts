import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LevelComponent } from './level/level.component';
import { GameBoardComponent } from './game-board/game-board.component';
import { FieldComponent } from './field/field.component';
import { ProductionTypeButtonComponent } from './product-type-button/production-type-button.component';
import { PointBoardComponent } from './point-board/point-board.component';
import { Layout2Component } from './layout/layout2/layout2.component';
import { Layout1Component } from './layout/layout1/layout1.component';
import { NavigationComponent } from './layout/navigation/navigation.component';
import { ScoreBoardComponent } from './score-board/score-board.component';
import { BoardLegendComponent } from './board-legend/board-legend.component';
import { ButtonDirective } from './shared/button.directive';
import { HelpComponent } from './help/help.component';
import { ScoreIndicatorComponent } from './score-indicator/score-indicator.component';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}

@NgModule({
	declarations: [
		AppComponent,
		LevelComponent,
		GameBoardComponent,
		FieldComponent,
		ProductionTypeButtonComponent,
		PointBoardComponent,
		Layout2Component,
		Layout1Component,
		NavigationComponent,
		ScoreBoardComponent,
		BoardLegendComponent,
		ButtonDirective,
		HelpComponent,
		ScoreIndicatorComponent,
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		HttpClientModule,
		MatSelectModule,
		TranslateModule.forRoot({
			defaultLanguage: 'de',
			loader: {
				provide: TranslateLoader,
				useFactory: HttpLoaderFactory,
				deps: [HttpClient]
			}
		})
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
