import { AfterViewInit, Component, OnInit } from '@angular/core';

declare var TradingView: any;
declare var Datafeeds: any;

@Component({
  selector: 'app-tradingview',
  templateUrl: './tradingview.component.html',
  styleUrls: ['./tradingview.component.scss']
})
export class TradingviewComponent implements OnInit, AfterViewInit {

  constructor() {

  }

  ngOnInit() { }

  ngAfterViewInit() {

      const widget = window['tvWidget'] = new TradingView.widget({
        fullscreen: false,
        symbol: 'AAPL',
        interval: '1',
        container_id: 'tv_chart_container',
        datafeed: new Datafeeds.UDFCompatibleDatafeed('assets/js/charting_library-master/charting_library/data'),
        library_path: 'assets/js/charting_library-master/charting_library/',
        locale: 'en',
        custom_css_url: '/assets/css/tradingview.css',
        drawings_access: { type: 'black', tools: [ { name: 'Regression Trend' } ] },
        disabled_features: [
          'use_localstorage_for_settings',
          'header_indicators',
          'header_saveload',
          'header_saveload_on_the_right',
          'header_symbol_search',
          'go_to_date',
          'timeframes_toolbar',
          'edit_buttnos_in_legend',
          'dont_show_boolean_study_arguments',
          'legend_context_menu',
          'hide_last_na_study_output',
          'border_around_the_chart',
          'remove_library_container_border',
          'display_market_status',
          'show_chart_property_page',
          'symbol_info',
          'volume_force_overlay',
          'create_volume_indicator_by_default',
          'control_bar',
          'header_interval_dialog_button',
          'caption_buttons_text_if_possible',
          'left_toolbar'

        ],
        enabled_features: ['study_templates'],
        charts_storage_url: 'http://saveload.tradingview.com',
        charts_storage_api_version: '1.1',
        client_id: 'tradingview.com',
        user_id: 'public_user_id',
        width: 616,
        height: 400,
        timezone: 'Etc/UTC',
        theme: 'Light',
        style: '2',
        toolbar_bg: '#ffffff',
        enable_publishing: false,
        hide_top_toolbar: false,
        save_image: false,
        hideideas: true,
        favorites: {
          intervals: ['h', 'D', '3D', '2M'],
          chartTypes: ['Candles', 'Area']
        }
      });
  }
}

