import { UpperCasePipe, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  MonacoEditorComponent,
  MonacoEditorModule,
} from '@materia-ui/ngx-monaco-editor';
import { BACKEND_URL } from '../../utils/constants';

@Component({
  selector: 'app-all-code',
  imports: [UpperCasePipe, FormsModule, MonacoEditorModule, NgIf],
  templateUrl: './all-code.component.html',
  styleUrl: './all-code.component.css',
})
export class AllCodeComponent {
  constructor(private readonly http: HttpClient) {}
  allLanguages: string[] = [
    'cpp',
    'c',
    'java',
    'python',
    'ruby',
    'r',
    'javascript',
    'csharp',
  ];
  ids = {
    cpp: 2,
    c: 1,
    java: 3,
    python: 5,
    ruby: 7,
    r: 6,
    javascript: 8,
    csharp: 4,
  };
  language = 'python';
  startCode = '';
  validationCode = '';
  solutionCode = '';
  message = '';
  loading = false;
  handleSubmit() {
    this.message = '';
    this.loading = true;
    this.http
      .post(`${BACKEND_URL}/problem/add/codes`, {
        validationCode: this.validationCode,
        startCode: this.startCode,
        solutionCode: this.solutionCode,
        problemId: 25,
        // @ts-ignore
        languageId: this.ids[this.language],
      })
      .subscribe({
        next: (res) => {
          this.loading = false;
          this.message = 'Success: ' + res;
        },
        error: (err) => {
          this.loading = false;
          this.message =
            err.message || err.error || err.status || err.toString();
        },
      });
  }
}

// two sum=25
// even =22
