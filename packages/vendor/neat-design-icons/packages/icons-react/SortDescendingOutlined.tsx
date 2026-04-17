// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import SortDescendingOutlinedSVG from '../icons-svg/lib/SortDescendingOutlined'
import Icon, { type BaseIconProps } from '../components'

const SortDescendingOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={SortDescendingOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    SortDescendingOutlined.displayName = 'SortDescendingOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(SortDescendingOutlined)