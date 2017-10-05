import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-item-copy',
  templateUrl: './list-item-copy.component.html',
  styleUrls: ['./list-item-copy.component.scss']
})
export class ListItemCopyComponent implements OnInit {

  @Input() optionName: any;
  @Input() optionValue: any;

  constructor() { }

  ngOnInit() {

  }

  copyToClipboard(e) {
    const element = e.target.previousElementSibling;
    const displayMessage = e.target.parentNode.querySelector('.copied-to-clipboad-msg');
    displayMessage.classList.add('active');
    element.select();
    document.execCommand('copy', true);

    const timer = setTimeout(() => {
      displayMessage.classList.remove('active');
      clearTimeout(timer);
    }, 2000);
  }
}
