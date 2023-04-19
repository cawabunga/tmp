import type { W3mQrCode as TW3mQrCode } from '@web3modal/ui';
/**
 * Component
 */
export declare function W3mQrCode(props: JSX.IntrinsicElements['w3m-qrcode']): JSX.Element;
/**
 * Types
 */
declare global {
    namespace JSX {
        interface IntrinsicElements {
            'w3m-qrcode': Partial<TW3mQrCode>;
        }
    }
}
