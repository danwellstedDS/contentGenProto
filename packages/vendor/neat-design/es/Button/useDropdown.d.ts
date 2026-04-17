/**
 * @file useDropdown.tsx
 * @author minglong.zhao(minglong.zhao@derbysoft.net)
 */
import type { ReactNode } from 'react';
interface Props {
    dropdown: boolean;
    children: ReactNode;
}
declare const useDropdown: (props: Props) => string | number | true | Iterable<ReactNode> | import("@emotion/react/jsx-runtime").JSX.Element;
export default useDropdown;
