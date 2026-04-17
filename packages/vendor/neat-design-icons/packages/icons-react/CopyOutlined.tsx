// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import CopyOutlinedSVG from '../icons-svg/lib/CopyOutlined'
import Icon, { type BaseIconProps } from '../components'

const CopyOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={CopyOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    CopyOutlined.displayName = 'CopyOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(CopyOutlined)