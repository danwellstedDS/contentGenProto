// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import TabletHOutlinedSVG from '../icons-svg/lib/TabletHOutlined'
import Icon, { type BaseIconProps } from '../components'

const TabletHOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={TabletHOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    TabletHOutlined.displayName = 'TabletHOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(TabletHOutlined)