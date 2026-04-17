// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import SortAscendingOutlinedSVG from '../icons-svg/lib/SortAscendingOutlined'
import Icon, { type BaseIconProps } from '../components'

const SortAscendingOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={SortAscendingOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    SortAscendingOutlined.displayName = 'SortAscendingOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(SortAscendingOutlined)