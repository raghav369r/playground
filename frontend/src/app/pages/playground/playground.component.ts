import { NgClass, UpperCasePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MonacoEditorModule } from '@materia-ui/ngx-monaco-editor';
import { runFailResponse, runSucResponse } from '../../models/code.models';
import { BACKEND_URL } from '../../utils/constants';
import { InputComponent } from '../../components/input/input.component';

@Component({
  selector: 'app-playground',
  imports: [
    FormsModule,
    UpperCasePipe,
    MonacoEditorModule,
    InputComponent,
    NgClass,
  ],
  templateUrl: './playground.component.html',
  styleUrl: './playground.component.css',
})
export class PlaygroundComponent {
  // @ViewChild('inputRef') inputRef!: InputComponent;
  title = 'filename';
  showInput = false;
  code = '#write ur code here';
  language = 'python';
  theme = 'vs-light';
  input = '';
  timeTaken: number | null = null;
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
  starterCodes = {
    cpp: `#include <iostream>
  using namespace std;
  int main() {
      // Write your code here
      cout << "Hello, World!" << endl;
      return 0;
  }`,

    c: `#include <stdio.h>
  int main() {
      // Write your code here
      printf("Hello, World!\\n");
      return 0;
  }`,

    java: `class Main {
      public static void main(String[] args) {
          // Write your code here
          System.out.println("Hello, World!");
      }
  }`,

    python: `# Write your code here
print("Hello, World!")`,

    ruby: `# Write your code here
puts "Hello, World!"`,

    r: `# Write your code here
print("Hello, World!")`,
  };
  response: null | runSucResponse = null;
  error: null | runFailResponse = null;
  loading = false;
  constructor(private readonly http: HttpClient) {}
  handleRun(input: string) {
    this.timeTaken = null;
    let start = new Date();
    this.loading = true;
    this.http
      .post<runSucResponse>(`${BACKEND_URL}/code/run`, {
        // @ts-ignore
        languageId: this.ids[this.language],
        code: this.code,
        input: input,
        probelmId: 0,
      })
      .subscribe({
        next: (res) => {
          this.timeTaken = new Date().getTime() - start.getTime();
          this.response = res;
          this.loading = false;
          this.error = null;
        },
        error: (err: runFailResponse) => {
          this.timeTaken = new Date().getTime() - start.getTime();
          this.response = null;
          this.loading = false;
          this.error = err;
        },
      });
  }
  handleShowInput() {
    this.showInput = !this.showInput;
  }
  handleSave() {
    console.log('Login to save code');
  }
  onLanChange(selectedLan: string) {
    this.code =
      this.starterCodes[selectedLan as keyof typeof this.starterCodes];
  }
  ngOnInit() {
    this.code =
      this.starterCodes[this.language as keyof typeof this.starterCodes];
  }
}
