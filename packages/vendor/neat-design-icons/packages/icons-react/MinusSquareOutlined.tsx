// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import MinusSquareOutlinedSVG from '../icons-svg/lib/MinusSquareOutlined'
import Icon, { type BaseIconProps } from '../components'

const MinusSquareOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={MinusSquareOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    MinusSquareOutlined.displayName = 'MinusSquareOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(MinusSquareOutlined)