/**
 * @file getExpandIcon.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
import type { CollapsibleType } from 'antd/lib/collapse/CollapsePanel';
import type { CSSProperties, ReactNode } from 'react';
interface PanelProps {
    isActive?: boolean;
    header?: ReactNode;
    className?: string;
    style?: CSSProperties;
    showArrow?: boolean;
    forceRender?: boolean;
    /** @deprecated Use `collapsible="disabled"` instead */
    disabled?: boolean;
    extra?: ReactNode;
    collapsible?: CollapsibleType;
}
declare const getExpandIcon: () => ({ isActive }: PanelProps) => import("@emotion/react/jsx-runtime").JSX.Element;
export default getExpandIcon;
