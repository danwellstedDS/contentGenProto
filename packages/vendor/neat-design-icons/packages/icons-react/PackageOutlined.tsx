// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import PackageOutlinedSVG from '../icons-svg/lib/PackageOutlined'
import Icon, { type BaseIconProps } from '../components'

const PackageOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={PackageOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    PackageOutlined.displayName = 'PackageOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(PackageOutlined)