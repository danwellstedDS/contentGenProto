// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import SortAZOutlinedSVG from '../icons-svg/lib/SortAZOutlined'
import Icon, { type BaseIconProps } from '../components'

const SortAZOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={SortAZOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    SortAZOutlined.displayName = 'SortAZOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(SortAZOutlined)