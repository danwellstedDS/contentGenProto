// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import FilteredOutlinedSVG from '../icons-svg/lib/FilteredOutlined'
import Icon, { type BaseIconProps } from '../components'

const FilteredOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={FilteredOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    FilteredOutlined.displayName = 'FilteredOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(FilteredOutlined)