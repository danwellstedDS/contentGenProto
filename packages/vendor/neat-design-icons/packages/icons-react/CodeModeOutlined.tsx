// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import CodeModeOutlinedSVG from '../icons-svg/lib/CodeModeOutlined'
import Icon, { type BaseIconProps } from '../components'

const CodeModeOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={CodeModeOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    CodeModeOutlined.displayName = 'CodeModeOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(CodeModeOutlined)