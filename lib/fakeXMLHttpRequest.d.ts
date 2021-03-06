/// <reference types="node" />
declare class FakeXMLHttpRequest {
    url: string;
    status: number;
    response: any;
    responseText: string;
    open(_type: string, url: string): void;
    send(): void;
    onload(xhr: any, event: any): void;
    onerror(err: NodeJS.ErrnoException | null): void;
    onprogress(): void;
}
export default FakeXMLHttpRequest;
