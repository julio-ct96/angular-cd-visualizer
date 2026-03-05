import { Component, computed, input } from '@angular/core';

import { APP_MODE } from './app-mode.constant';
import { HEADER_VARIANT_CLASS } from './header-variant-class.constant';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  readonly appMode = input.required<string>();

  protected readonly isNgZone = computed(() => this.appMode() === APP_MODE.NGZONE);

  protected readonly badgeText = computed(() => (this.isNgZone() ? 'NgZone' : 'Zoneless'));

  protected readonly navLabel = computed(() =>
    this.isNgZone() ? 'Ir a Zoneless' : 'Ir a NgZone'
  );

  protected readonly navHref = computed(() =>
    this.isNgZone() ? APP_MODE.ZONELESS_URL : APP_MODE.NGZONE_URL
  );

  protected readonly variantClass = computed(() => HEADER_VARIANT_CLASS[this.appMode()]);
}
