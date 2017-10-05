import { AfterViewInit, Component, OnInit, Renderer } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

declare var $: any;

@Component({
  selector: 'app-history-filter',
  templateUrl: './history-filter.component.html',
  styleUrls: ['./history-filter.component.scss']
})
export class HistoryFilterComponent implements OnInit{

  //TODO OUTPUT SUBMIT VALUE
  transactionsFilterForm: FormGroup;
  elementInputFrom: any;
  elementInputTo: any;

  constructor(private fb: FormBuilder,
              private renderer: Renderer) {

  }

  ngOnInit() {
    this.elementInputFrom = $("#datetimepicker-from");
    this.elementInputTo = $('#datetimepicker-to');

    this.initDatePickers();
    this.initForm();
  }

  initForm() {
    this.transactionsFilterForm = this.fb.group({
      fromDate: [null],
      toDate: [null],
      period: [null]
    })
  }

  initDatePickers() {
    let self = this;
    this.elementInputFrom.datetimepicker({
      useCurrent: false,
      defaultDate: new Date()
    });
    this.elementInputTo.datetimepicker({
      useCurrent: false
    });


    this.elementInputFrom.on("dp.change", function (e) {
      self.elementInputTo.data("DateTimePicker").minDate(e.date);
      let inputEvent = new Event("input", { bubbles: true });
      self.renderer.invokeElementMethod(e.target, "dispatchEvent", [inputEvent]);
    });
    this.elementInputTo.on("dp.change", function (e) {
      self.elementInputFrom.data("DateTimePicker").maxDate(e.date);
      let inputEvent = new Event("input", { bubbles: true });
      self.renderer.invokeElementMethod(e.target, "dispatchEvent", [inputEvent]);
    });
  }

  onResetPeriod() {
    this.transactionsFilterForm.controls.period.reset();
  }
  onResetDatePickers() {
    this.transactionsFilterForm.controls.fromDate.reset();
    this.transactionsFilterForm.controls.toDate.reset();
  }

  onResetForm() {
    this.transactionsFilterForm.reset();
  }

  onSubmitForm() {
    window['test'] = this.transactionsFilterForm;
  }
}
