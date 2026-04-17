// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import SyncOutlinedSVG from '../icons-svg/lib/SyncOutlined'
import Icon, { type BaseIconProps } from '../components'

const SyncOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={SyncOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    SyncOutlined.displayName = 'SyncOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(SyncOutlined)