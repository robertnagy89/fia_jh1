import { Component, OnChanges, OnInit, Renderer2 } from '@angular/core';
import { UserSettingsService } from '../../services/user-settings.service';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.css']
})
export class UserSettingsComponent {
  primaryColor: string = '#313A43';
  secondaryColor: string = '#74818C';
  accentColor: string = '#A9EEE6';
  accentColorHover: string = '#19F9DF';
  dangerColor: string = '#dc3545';
  textColor: string = '#ffffff';

  constructor(private settings: UserSettingsService) { };

  setColors(name: string) {
    //  :root {
    //  --primary-color: #313A43;
    //  --secondary-color: #74818C;
    //  --text-color: #ffffff;
    //  --accent-color: #A9EEE6;
    //  --accent-color-hover: #19F9DF;
    //  --success-color: #28a745;
    //  --warning-color: #ffc107;
    //  --danger-color: #dc3545;
    //}
    if (name == 'default') {
      this.primaryColor = '#313A43';
      this.secondaryColor = '#74818C';
      this.textColor = '#ffffff';
      this.accentColor = '#A9EEE6';
      this.dangerColor = '#dc3545';
      this.accentColorHover = '#19F9DF';
    }
    else if (name == 'calm') {
      this.primaryColor = '#625772';
      this.secondaryColor = '#fefaec';
      this.textColor = '#342D3E';
      this.accentColor = '#A9EEE6';
      this.dangerColor = '#f38181';
      this.accentColorHover = '#19F9DF';
    }
    this.updateChanges();
  }

  updateChanges = (): void => {
    document.documentElement.style.setProperty('--primary-color', this.primaryColor);
    document.documentElement.style.setProperty('--secondary-color', this.secondaryColor);
    document.documentElement.style.setProperty('--accent-color', this.accentColor);
    document.documentElement.style.setProperty('--danger-color', this.dangerColor);
    document.documentElement.style.setProperty('--primary-color', this.primaryColor);
  }
}
