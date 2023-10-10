import { Component, Input, OnInit } from '@angular/core';
import { LoaderType } from './loader-type.enum';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  @Input() public isLoading: boolean = false;
  @Input() public loaderType: LoaderType = LoaderType.Circular;

  public LoaderType = LoaderType;

  public get loadingText() { 
    return `${this.loading}${this.loadingPeriods}`; 
  }
  private loading = 'Loading';
  private loadingPeriods = '.';

  public ngOnInit(): void { 
    if (this.loaderType === LoaderType.Loading) {
      this.updateLoaderPeriods();

    }
  }

  updateLoaderPeriods() {

    let currentStep = 0;
    const loadingSteps = ['.', '..', '...'];
    setInterval(() => {
        this.loadingPeriods = loadingSteps[(currentStep) % 3];
        currentStep++;
      }, 500);
    // Alternatively
    // let currentStep = 0;
    // setInterval(() => {
    //   switch (currentStep % 3) {
    //     case 0:
    //     this.loadingPeriods = '.';
    //     currentStep++;
    //     break;
    //     case 1:
    //     this.loadingPeriods = '..';
    //     currentStep++;
    //     break;
    //     case 2:
    //     this.loadingPeriods = '...';
    //     currentStep++;
    //     break;
    //   }
    // }, 500);


  }
}
