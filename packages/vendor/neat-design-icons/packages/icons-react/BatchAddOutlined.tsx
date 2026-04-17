// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import BatchAddOutlinedSVG from '../icons-svg/lib/BatchAddOutlined'
import Icon, { type BaseIconProps } from '../components'

const BatchAddOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={BatchAddOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    BatchAddOutlined.displayName = 'BatchAddOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(BatchAddOutlined)