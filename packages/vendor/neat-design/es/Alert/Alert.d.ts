/**
 * @file Alert.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
import type { AlertProps as AntAlertProps } from 'antd';
export interface AlertProps extends AntAlertProps {
}
declare const Alert: ({ className, type, message, description, action, icon, closable, ...restProps }: AlertProps) => import("@emotion/react/jsx-runtime").JSX.Element;
export default Alert;
