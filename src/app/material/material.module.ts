import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule} from '@angular/material/select';
import { MatRadioModule} from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import {MatSlideToggleModule  } from '@angular/material/slide-toggle';
import {MatButtonToggle,MatButtonToggleAppearance,MatButtonToggleGroup,MatButtonToggleModule,MatButtonToggleChange} from '@angular/material/button-toggle';

import { MatToolbarModule } from '@angular/material/toolbar';

const MaterialComponents=
[
  MatAutocompleteModule, 
  MatCheckboxModule,
  MatButtonModule,
  MatFormFieldModule, 
  MatDatepickerModule, 
  MatRadioModule, 
  MatInputModule, 
  MatSelectModule,
  MatSlideToggleModule, 
  MatSlideToggleModule,
  MatButtonToggleModule,
  MatIconModule,
  MatDividerModule,
  MatToolbarModule
]


@NgModule({
  imports: [MaterialComponents ],
  exports:[MaterialComponents]
})
export class MaterialModule { }
