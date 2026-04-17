// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import MinusCircleOutlinedSVG from '../icons-svg/lib/MinusCircleOutlined'
import Icon, { type BaseIconProps } from '../components'

const MinusCircleOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={MinusCircleOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    MinusCircleOutlined.displayName = 'MinusCircleOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(MinusCircleOutlined)