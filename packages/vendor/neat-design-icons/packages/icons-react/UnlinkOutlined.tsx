// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import UnlinkOutlinedSVG from '../icons-svg/lib/UnlinkOutlined'
import Icon, { type BaseIconProps } from '../components'

const UnlinkOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={UnlinkOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    UnlinkOutlined.displayName = 'UnlinkOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(UnlinkOutlined)