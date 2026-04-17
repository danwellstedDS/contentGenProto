// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import ResetOutlinedSVG from '../icons-svg/lib/ResetOutlined'
import Icon, { type BaseIconProps } from '../components'

const ResetOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={ResetOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    ResetOutlined.displayName = 'ResetOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(ResetOutlined)