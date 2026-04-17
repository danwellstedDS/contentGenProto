// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import ListOutlinedSVG from '../icons-svg/lib/ListOutlined'
import Icon, { type BaseIconProps } from '../components'

const ListOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={ListOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    ListOutlined.displayName = 'ListOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(ListOutlined)