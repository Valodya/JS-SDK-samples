import { Component, h } from '@stencil/core';


@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true
})
export class AppRoot {

  render() {
    return (
      <div>
        <header>
          <h1>Stencil App Starter</h1>
        </header>

        <main>
          <div class="main-menu">
            <stencil-route-link url='/rt-data' exact={true}>RT-Data</stencil-route-link>
            <stencil-route-link url='/rt-data2' exact={true}>RT-Data</stencil-route-link>
          </div>

          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url='/rt-data' exact={true} component='rt-data'/>
              <stencil-route url='/rt-data2' exact={true} component='rt-data'/>
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
