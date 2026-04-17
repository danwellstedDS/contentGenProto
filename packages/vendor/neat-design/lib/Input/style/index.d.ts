/**
 * @file index.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
declare const useStyle: ({ size }: {
    size: any;
}) => string;
declare const useTextAreaStyle: ({ size }: {
    size: any;
}) => string;
declare const usePasswordStyle: ({ size }: {
    size: any;
}) => string;
export default useStyle;
export { usePasswordStyle, useTextAreaStyle };
