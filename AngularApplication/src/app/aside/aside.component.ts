import {
  Component, ComponentFactoryResolver, ElementRef, OnDestroy, OnInit, ViewChild,
  ViewContainerRef
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from '../services/event.service';
import { CashInComponent } from './cash-in/cash-in.component';
import { IAside, IAsideEvent } from '../models/aside.interface';
import { Location } from '@angular/common';
import { WalletInformationComponent } from './wallet-information/wallet-information.component';
import { TradeComponent } from './trade/trade.component';
import { SettleComponent } from './settle/settle.component';
import { LykkeProjectsListComponent } from './lykke-projects-list/lykke-projects-list.component';
import { ExchangeSpotComponent } from './exchange-spot/exchange-spot.component';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit, OnDestroy {

  customComponents: Array<IAside>;
  componentInstance: boolean;
  componentData: any;

  breadCrumbList: Array<any>;
  breadCrumbUrls: Array<any>;
  showDirection: string;
  hideBreadcrumb: boolean;
  debounce: boolean;

  @ViewChild('container', {read: ViewContainerRef}) container;
  @ViewChild('curtain') curtain: ElementRef;
  @ViewChild('asideWrapper') asideWrapper: ElementRef;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private eventService: EventService,
              private componentFactoryResolver: ComponentFactoryResolver) {

    this.debounce = false;
    this.eventService.addEvent('open:aside');

    this.breadCrumbUrls = [ // TODO REFACTOR THIS SEE CREATE BREADGRUMB FUNCTION
      {name: 'Trading Wallet', url: '/wallets/trading', match: 'trading', split: '/wallets/'},
      {name: 'Private Wallet', url: '/wallets/private', match: 'private', split: '/wallets/'},
      {name: 'New wallet', url: '/wallets/private', match: 'new-wallet', split: '/wallets/'},
      {name: 'Exchange', url: '/exchange', match: 'exchange', split: '/'}
    ];

    this.componentInstance = false;
    this.breadCrumbList = [];
    this.customComponents = [
      {
        operationName: 'Trade',
        componentName: TradeComponent,
        dataStore: true
      },
      {
        operationName: 'CashInOut',
        componentName: CashInComponent,
        dataStore: true
      },
      {
        operationName: 'walletDetails',
        componentName: WalletInformationComponent,
        dataStore: true
      },
      {
        operationName: 'Settle',
        componentName: SettleComponent,
        dataStore: true
      },
      {
        operationName: 'LykkeGroup',
        componentName: LykkeProjectsListComponent,
        dataStore: false,
        hideBreadcrumb: true
      },
      {
        operationName: 'ExchangeSpot',
        componentName: ExchangeSpotComponent,
        dataStore: true
      }
    ];
  }


  ngOnInit() {
    this.eventService.subscribeToEvent('open:aside', (eventData: IAsideEvent) => {
      if(!this.debounce) {
        this.showDirection = eventData.direction;
        const componentForCreation = this.customComponents.find(component => component['operationName'] === eventData.operation);

        if (componentForCreation) {
          componentForCreation.hideBreadcrumb ? this.hideBreadcrumb = true : this.hideBreadcrumb = false;

          if(eventData.data) {
            this.setComponentData(eventData.data);
          }

          this.createBreadcrumbList(decodeURI(this.router.url));
          this.toggleCurtain();
          this.createCustomComponent(componentForCreation);
        } else {
          this.router.navigate([], { relativeTo: this.route, queryParams: null });
        }
      }
    });
  }

  toggleCurtain() {
    const body = document.querySelector('body');
    if (body.classList.contains('blur')) {
      body.classList.remove('blur');
      this.curtain.nativeElement.classList.remove('show');
      this.asideWrapper.nativeElement.classList.remove('show');
    } else {
      body.classList.add('blur');
      this.curtain.nativeElement.classList.add('show');
      this.asideWrapper.nativeElement.classList.add('show');
    }
  }

  createCustomComponent(component) {
    const singlePostFactory = this.componentFactoryResolver.resolveComponentFactory(component.componentName);
    const componentInstance = this.container.createComponent(singlePostFactory).instance;
    this.componentInstance = true;
    if (component.dataStore) {
      componentInstance.data = this.componentData;
    }
  }

  destroyCustomComponent() {
    this.container.clear();
    this.componentData = null;
    this.breadCrumbList = [];
    this.componentInstance = false;
    this.debounce = true;
    // because of animation direction must wait transition duration
    let timer = setTimeout(() => {
      this.showDirection = null;
      this.hideBreadcrumb = false;
      this.debounce = false;
      clearTimeout(timer);
    },500);


    this.toggleCurtain();
    this.router.navigate([], { relativeTo: this.route, queryParams: null });
  }

  setComponentData(data) {
    this.componentData = data;
  }

  createBreadcrumbList(createUrl) {
    const breadcrumbUrlsList = [
       {
         name: 'Private Wallet',
         url: '/wallets/private'
       },
       {
         name: 'Trading Wallet',
         url: '/wallets/trading'
       },
       {
         name: 'Exchange',
         url: '/exchange'
       }
   ];

    breadcrumbUrlsList.map((breadCrumb, index) => {
      if (createUrl.indexOf(breadCrumb.url) !== -1) {
        this.breadCrumbList.push(breadCrumb);

        const urlSufix = createUrl.slice(breadCrumb.url.length);

        if (urlSufix) {
          urlSufix.split('/').map(url => {
            if (url) {
              this.breadCrumbList.push({name: url, url: this.breadCrumbList[this.breadCrumbList.length - 1].url + '/' + url});
            }
          });
        }
      }
    });


  }

  ngOnDestroy() {
    this.destroyCustomComponent();
  }
}
