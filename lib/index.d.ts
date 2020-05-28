declare global {
    namespace NodeJS {
        interface Global {
            document: any;
            window: any;
            Image: any;
            navigator: any;
            HTMLCanvasElement: any;
            HTMLVideoElement: any;
            requestAnimationFrame: any;
            URL: any;
            phaserOnNodeFPS: number;
        }
    }
}
declare const animationFrame: (cb: any) => number;
export { animationFrame };
declare const requestAnimationFrame: (callback: FrameRequestCallback) => number;
export { requestAnimationFrame };
