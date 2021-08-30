export type TypeToast = 'success' | 'info' | 'warn' | 'error';

export interface ToastRequest {
  type: TypeToast;
  title: string;
  message: string;
}
