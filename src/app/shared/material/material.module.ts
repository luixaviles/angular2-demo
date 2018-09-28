import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatInputModule,
  MatIconModule,
  MatToolbarModule,
  MatCardModule,
  MatSidenavModule,
  MatListModule,
  MatDialogModule,
  MatFormFieldModule,
  MatSlideToggleModule,
  MatRadioModule,
  MatCheckboxModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatRadioModule,
    MatSidenavModule,
    MatListModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSlideToggleModule
  ],
  exports: [
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatRadioModule,
    MatSidenavModule,
    MatListModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSlideToggleModule
  ],
  declarations: []
})
export class MaterialModule { }
