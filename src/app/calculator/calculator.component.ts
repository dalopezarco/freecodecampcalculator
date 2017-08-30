import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  template: `
  <div class="container-fluid main-container text-center">
    <h1>Calculator APP <small>{{daniel}}</small></h1>

    <div class="container carcasa text-center">
      <h3>Calculator</h3>

      <div class="container pantalla text-right">
        <div class="row">
          <div class="col-md-12 text-right">
            <h3>{{prueba}}</h3>
          </div>
      </div>
            </div>

      <div class="container">

          <div class="row  fila-calc">
            <div class="col-md-3">
              <button type="button" class="btn btn-primary btn-sm btn-block">AC</button>
            </div>
            <div class="col-md-3">
              <button type="button" class="btn btn-primary btn-sm btn-block">CE</button>
            </div>
            <div class="col-md-3">
              <button type="button" class="btn btn-primary btn-sm btn-block">/</button>
            </div>
            <div class="col-md-3">
              <button type="button" class="btn btn-primary btn-sm btn-block">X</button>
            </div>
          </div>

          <div class="row fila-calc">
            <div class="col-md-3">
              <button type="button" class="btn btn-primary btn-sm btn-block">7</button>
            </div>
            <div class="col-md-3">
              <button type="button" class="btn btn-primary btn-sm btn-block">8</button>
            </div>
            <div class="col-md-3">
              <button type="button" class="btn btn-primary btn-sm btn-block">9</button>
            </div>
            <div class="col-md-3">
              <button type="button" class="btn btn-primary btn-sm btn-block">-</button>
            </div>
          </div>

          <div class="row fila-calc">
            <div class="col-md-3">
              <button type="button" class="btn btn-primary btn-sm btn-block">4</button>
            </div>
            <div class="col-md-3">
              <button type="button" class="btn btn-primary btn-sm btn-block">5</button>
            </div>
            <div class="col-md-3">
              <button type="button" class="btn btn-primary btn-sm btn-block">6</button>
            </div>
            <div class="col-md-3">
              <button type="button" class="btn btn-primary btn-sm btn-block">+</button>
            </div>
          </div>

          <div class="row fila-calc">
            <div class="col-md-9">
              <div class="row">

                <div class="col-md-4">
                  <button type="button" class="btn btn-primary btn-sm btn-block">1</button>
                </div>

                <div class="col-md-4">
                  <button type="button" class="btn btn-primary btn-sm btn-block">2</button>
                </div>

                <div class="col-md-4">
                  <button type="button" class="btn btn-primary btn-sm btn-block">3</button>
                </div>


              </div>
              <div class="row fila-calc">
                <div class="col-md-8">
                  <button type="button" class="btn btn-primary btn-sm btn-block">0</button>
                </div>
                <div class="col-md-4">
                  <button type="button" class="btn btn-primary btn-sm btn-block">.</button>
                </div>

              </div>
            </div>
            <div class="col-md-3">
              <button type="button" class="btn btn-primary btn-sm btn-block btn-igual">=</button>
              <br><br><br><br>
            </div>

            </div>

          </div>


    </div>
  </div>

  `,
  styles: []
})
export class CalculatorComponent implements OnInit {
  daniel = "prueba";
  constructor() { }

  ngOnInit() {
  }

}
