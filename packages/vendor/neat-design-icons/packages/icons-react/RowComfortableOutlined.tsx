// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import RowComfortableOutlinedSVG from '../icons-svg/lib/RowComfortableOutlined'
import Icon, { type BaseIconProps } from '../components'

const RowComfortableOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={RowComfortableOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    RowComfortableOutlined.displayName = 'RowComfortableOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(RowComfortableOutlined)