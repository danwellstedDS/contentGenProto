// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import RedoOutlinedSVG from '../icons-svg/lib/RedoOutlined'
import Icon, { type BaseIconProps } from '../components'

const RedoOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={RedoOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    RedoOutlined.displayName = 'RedoOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(RedoOutlined)