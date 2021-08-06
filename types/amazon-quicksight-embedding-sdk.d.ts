/*
Types for the AWS Quicksight Embedding SDK

See this issue:
https://github.com/awslabs/amazon-quicksight-embedding-sdk/issues/47#issuecomment-799455684
*/

declare module "amazon-quicksight-embedding-sdk" {
  export type EmbeddingOptions = {
    url: string;
    container: HTMLElement | string;
    errorCallback?: Function;
    loadCallback?: Function;
    parametersChangeCallback?: Function;
    selectedSheetChangeCallback?: Function;
    parameters?: Object;
    printEnabled?: boolean;
    sheetTabsDisabled?: boolean;
    defaultEmbeddingVisualType?: string;
    width?: string;
    height?: string;
    loadingHeight?: string;
    scrolling?: string;
    className?: string;
    locale?: string;
    footerPaddingEnabled?: boolean;
  };

  export interface EmbeddableObject {
    url: string;
    container?: HTMLElement;
    parameters?: Object;
    defaultEmbeddingVisualType?: string;
    getActiveParametersCallback?: Function;
    getSheetsCallback?: Function;
    on: Function;
    off: Function;
    trigger: Function;
    iframe: HTMLIFrameElement;

    getUrl(): string;
    getContainer(): HTMLElement | void;
    getParameters(): Object | void;
    getActiveParameterValues(callback: Function): void;
    getSheets(callback: Function): void;
    handleMessageEvent(event: Object, options: EmbeddingOptions): void;
    getDefaultEmbeddingVisualType(): string | void;
    setParameters(parameters: Object): void;
    setDefaultEmbeddingVisualType(defaultEmbeddingVisualType: string): void;
    generateDefaultEmbeddingVisualTypeEvent(
      defaultEmbeddingVisualType: string
    ): Object;
  }

  export function embedDashboard(options: EmbeddingOptions): EmbeddableObject;
  export function embedSession(options: EmbeddingOptions): EmbeddableObject;
}
