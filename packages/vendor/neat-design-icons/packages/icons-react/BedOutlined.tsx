// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import BedOutlinedSVG from '../icons-svg/lib/BedOutlined'
import Icon, { type BaseIconProps } from '../components'

const BedOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={BedOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    BedOutlined.displayName = 'BedOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(BedOutlined)