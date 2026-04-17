// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import RowCompactOutlinedSVG from '../icons-svg/lib/RowCompactOutlined'
import Icon, { type BaseIconProps } from '../components'

const RowCompactOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={RowCompactOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    RowCompactOutlined.displayName = 'RowCompactOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(RowCompactOutlined)