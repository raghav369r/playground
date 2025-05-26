import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import {MonacoEditorModule} from '@materia-ui/ngx-monaco-editor'; 
@Component({
  selector: 'app-root',
  imports: [HeaderComponent, RouterOutlet,MonacoEditorModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'playGround';
}
