// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import RowOutlinedSVG from '../icons-svg/lib/RowOutlined'
import Icon, { type BaseIconProps } from '../components'

const RowOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={RowOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    RowOutlined.displayName = 'RowOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(RowOutlined)