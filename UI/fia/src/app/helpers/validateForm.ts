import { FormControl, FormGroup } from "@angular/forms";

export default class ValidateForm {
  static validateAllFormGroups(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(group => {
      const control = formGroup.get(group);
      console.log(control);
      if (control instanceof FormControl) {
        control.markAsDirty({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormGroups(control);
      }
    })
  }
}
