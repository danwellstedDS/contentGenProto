// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import SolitCellsOutlinedSVG from '../icons-svg/lib/SolitCellsOutlined'
import Icon, { type BaseIconProps } from '../components'

const SolitCellsOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={SolitCellsOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    SolitCellsOutlined.displayName = 'SolitCellsOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(SolitCellsOutlined)