/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface AppRoot {
    }
    interface RtData {
    }
}
declare global {
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLRtDataElement extends Components.RtData, HTMLStencilElement {
    }
    var HTMLRtDataElement: {
        prototype: HTMLRtDataElement;
        new (): HTMLRtDataElement;
    };
    interface HTMLElementTagNameMap {
        "app-root": HTMLAppRootElement;
        "rt-data": HTMLRtDataElement;
    }
}
declare namespace LocalJSX {
    interface AppRoot {
    }
    interface RtData {
    }
    interface IntrinsicElements {
        "app-root": AppRoot;
        "rt-data": RtData;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "rt-data": LocalJSX.RtData & JSXBase.HTMLAttributes<HTMLRtDataElement>;
        }
    }
}
