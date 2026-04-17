// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import TabletVOutlinedSVG from '../icons-svg/lib/TabletVOutlined'
import Icon, { type BaseIconProps } from '../components'

const TabletVOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={TabletVOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    TabletVOutlined.displayName = 'TabletVOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(TabletVOutlined)