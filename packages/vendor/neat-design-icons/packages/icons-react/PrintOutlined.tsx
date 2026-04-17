// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import PrintOutlinedSVG from '../icons-svg/lib/PrintOutlined'
import Icon, { type BaseIconProps } from '../components'

const PrintOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={PrintOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    PrintOutlined.displayName = 'PrintOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(PrintOutlined)