// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import PlusSquareOutlinedSVG from '../icons-svg/lib/PlusSquareOutlined'
import Icon, { type BaseIconProps } from '../components'

const PlusSquareOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={PlusSquareOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    PlusSquareOutlined.displayName = 'PlusSquareOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(PlusSquareOutlined)