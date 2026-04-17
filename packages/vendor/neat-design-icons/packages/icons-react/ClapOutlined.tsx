// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import ClapOutlinedSVG from '../icons-svg/lib/ClapOutlined'
import Icon, { type BaseIconProps } from '../components'

const ClapOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={ClapOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    ClapOutlined.displayName = 'ClapOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(ClapOutlined)