// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import CardListOutlinedSVG from '../icons-svg/lib/CardListOutlined'
import Icon, { type BaseIconProps } from '../components'

const CardListOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={CardListOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    CardListOutlined.displayName = 'CardListOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(CardListOutlined)