import { Injectable } from '@angular/core';
import {ViewModel} from "../interfaces";

@Injectable()
export class ViewModelService {

  public viewModel: ViewModel = {
    navbarOpen: false,
    addURLOpen: false
  };

  constructor() {}
}
