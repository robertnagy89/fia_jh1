import { Component, OnChanges, OnInit, Renderer2 } from '@angular/core';
import { UserSettings } from '../../../models/usersettings';
import { UserSettingsService } from '../../services/user-settings.service';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.css']
})
export class UserSettingsComponent {
  userSettings: UserSettings = {
    id: '00000000-0000-0000-0000-000000000000',
    primaryColor: '#313A43',
    secondaryColor: '#74818C',
    accentColor: '#A9EEE6',
    accentColorHover: '#19F9DF',
    dangerColor: '#dc3545',
    textColor: '#ffffff'
  }

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
      this.userSettings = {
        id: '00000000-0000-0000-0000-000000000000',
        primaryColor: '#313A43',
        secondaryColor: '#74818C',
        accentColor: '#A9EEE6',
        accentColorHover: '#19F9DF',
        dangerColor: '#dc3545',
        textColor: '#ffffff'
      }
    }
    else if (name == 'calm') {
      this.userSettings = {
        id: '00000000-0000-0000-0000-000000000000',
        primaryColor: '#625772',
        secondaryColor: '#fefaec',
        accentColor: '#342D3E',
        accentColorHover: '#19F9DF',
        dangerColor: '#f38181',
        textColor: '#070D0D'
      }
    }
    this.updateChanges();
  }

  updateChanges = (): void => {
    document.documentElement.style.setProperty('--primary-color', this.userSettings.primaryColor);
    document.documentElement.style.setProperty('--secondary-color', this.userSettings.secondaryColor);
    document.documentElement.style.setProperty('--accent-color', this.userSettings.accentColor);
    document.documentElement.style.setProperty('--danger-color', this.userSettings.dangerColor);
    document.documentElement.style.setProperty('--primary-color', this.userSettings.primaryColor);
    this.settings.saveSettings(this.userSettings);
  }
}
