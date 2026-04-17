// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import FilterOutlinedSVG from '../icons-svg/lib/FilterOutlined'
import Icon, { type BaseIconProps } from '../components'

const FilterOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={FilterOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    FilterOutlined.displayName = 'FilterOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(FilterOutlined)