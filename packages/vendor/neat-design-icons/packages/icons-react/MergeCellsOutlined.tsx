// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import MergeCellsOutlinedSVG from '../icons-svg/lib/MergeCellsOutlined'
import Icon, { type BaseIconProps } from '../components'

const MergeCellsOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={MergeCellsOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    MergeCellsOutlined.displayName = 'MergeCellsOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(MergeCellsOutlined)