// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import CloseOutlinedSVG from '../icons-svg/lib/CloseOutlined'
import Icon, { type BaseIconProps } from '../components'

const CloseOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={CloseOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    CloseOutlined.displayName = 'CloseOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(CloseOutlined)