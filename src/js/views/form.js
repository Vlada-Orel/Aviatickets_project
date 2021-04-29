import {
  getAutocompleteInstanse,
  getDatePickerInstanse,
} from "../plugins/materialize";

class FormUI {
  constructor(autocompleteInstanse, datePickerInstanse) {
    this._form = document.querySelector("#locationControls");
    this.origin = document.querySelector("#autocomplete-origin");
    this.destination = document.querySelector("#autocomplete-destination");
    this.depart = document.querySelector("#datepicker-depart");
    this.return = document.querySelector("#datepicker-return");
    this.originAutocomplete = autocompleteInstanse(this.origin);
    this.destinationAutocomplete = autocompleteInstanse(this.destination);
    this.departDatePicker = datePickerInstanse(this.depart);
    this.returnDatePicker = datePickerInstanse(this.return);
  }

  get form() {
    return this._form;
  }

  get originValue() {
    return this.origin.value;
  }

  get destinationValue() {
    return this.destination.value;
  }

  get departDateValue() {
    return this.departDatePicker.toString();
  }

  get reternDateValue() {
    return this.returnDatePicker.toString();
  }

  setAutocompleteData(data) {
    this.originAutocomplete.updateData(data);
    this.destinationAutocomplete.updateData(data);
  }
}

const formUI = new FormUI(getAutocompleteInstanse, getDatePickerInstanse);

export default formUI;
