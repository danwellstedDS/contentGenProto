// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import ColumnOutlinedSVG from '../icons-svg/lib/ColumnOutlined'
import Icon, { type BaseIconProps } from '../components'

const ColumnOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={ColumnOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    ColumnOutlined.displayName = 'ColumnOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(ColumnOutlined)