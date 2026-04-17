// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import ListTreeOutlinedSVG from '../icons-svg/lib/ListTreeOutlined'
import Icon, { type BaseIconProps } from '../components'

const ListTreeOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={ListTreeOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    ListTreeOutlined.displayName = 'ListTreeOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(ListTreeOutlined)