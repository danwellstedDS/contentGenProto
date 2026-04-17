// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import BiddingOutlinedSVG from '../icons-svg/lib/BiddingOutlined'
import Icon, { type BaseIconProps } from '../components'

const BiddingOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={BiddingOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    BiddingOutlined.displayName = 'BiddingOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(BiddingOutlined)