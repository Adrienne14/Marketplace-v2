export type Props = {
  type: string
  withClose?: boolean
}

export enum CONFIRM_TYPE {
  success = 'success',
  failed = 'failed',
  canceled = 'canceled'
}

export type ConfirmProps = {
  type: CONFIRM_TYPE;
  icon: string;
  description: string
}