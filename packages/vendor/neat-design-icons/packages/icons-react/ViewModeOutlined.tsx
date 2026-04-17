// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import ViewModeOutlinedSVG from '../icons-svg/lib/ViewModeOutlined'
import Icon, { type BaseIconProps } from '../components'

const ViewModeOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={ViewModeOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    ViewModeOutlined.displayName = 'ViewModeOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(ViewModeOutlined)