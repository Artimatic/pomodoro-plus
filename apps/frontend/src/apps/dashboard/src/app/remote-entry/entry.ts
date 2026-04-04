import { Component } from '@angular/core';
import { NxWelcome } from './nx-welcome';

@Component({
  imports: [NxWelcome],
  selector: 'lib-dashboard-entry',
  template: `<lib-nx-welcome></lib-nx-welcome>`,
})
export class RemoteEntry {}
